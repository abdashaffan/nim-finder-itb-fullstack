const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.get("/", async (req, res) => {
  res.send("<h1>API NIM Finder ITB oleh Abdakadabra</h1>");
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
});

router.post("/", async (req, res) => {
  try {
    const { query, size, offset, sortType } = req.body;
    const searchQuery = new Student({query,size,offset});
    const errorObj = searchQuery.validateSync();
    if (errorObj) {
      return res.json({
        msg: errorObj.message
      });
    }
    const regex = new RegExp(`.*${query}.*`);
    const mongoQuery = {
      $or: [
        {
          nama: {
            $regex: regex,
            $options: "i"
          }
        },
        {
          nim_tpb: {
            $regex: regex
          }
        },
        {
          nim_prodi: {
            $regex: regex
          }
        }
      ]
    };
    const [data, count] = await Promise.all([
      Student.find(mongoQuery)
        .limit(size)
        .skip(size * offset)
        .sort({ [sortType.name]: sortType.toggle })
        .select("nama nim_tpb nim_prodi fakultas prodi angkatan _id"),
      Student.countDocuments(mongoQuery)
    ]);
    return res.json({
      query,
      size,
      offset,
      count,
      data
    });
  } catch (e) {
    console.log(e);
    return res.json({ msg: e });
  }
});
module.exports = router;
