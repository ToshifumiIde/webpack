import $ from "jquery";
// jqueryを「$」で扱う。jqueryはnode_modulesに格納されているモジュール。
// かといって相対パスを指定する必要はなく、webpackが自動で探してきてくれる。
import velocity from "velocity-animate";  //
import  { add } from "./modules/math.js"; //

console.log("app");

const result = add(1, 2);

$("body").append(result);
velocity($("h1"), "fadeIn", { duration: 2000, loop: true });
