import { Klicky } from "./klicky";

Klicky();

//Click event specifically for clicking the linkedin icon
import { clickFunction } from "./klicky";
const element = document.getElementById("linkedin");
element.addEventListener("click", clickFunction);

