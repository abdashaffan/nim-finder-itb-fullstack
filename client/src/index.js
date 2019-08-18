import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import WebFont from 'webfontloader';
import "./index.css";
import * as serviceWorker from './serviceWorker';


// WebFont.load({
//     google: {
//         families: ['Titillium Web:300,400,700', 'sans-serif']
//     }
// });


ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();