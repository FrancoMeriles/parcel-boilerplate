import ReactDOM from "react-dom";
import React from "react";

import Counter from "./Counter";
import { hello } from "./hello";

let user = { firstName: "Franco", lastName: "Meriles" };
console.log(hello(user));
ReactDOM.render(<Counter />, document.querySelector("#app"));
