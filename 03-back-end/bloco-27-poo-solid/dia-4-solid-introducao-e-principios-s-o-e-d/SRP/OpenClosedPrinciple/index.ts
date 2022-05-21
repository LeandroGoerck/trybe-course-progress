import Circle from "./Circle";
import Rectangle from "./Rectangle";

import AreaComputation from "./AreaComputation";
import Triangle from "./Triangle";

const circle = new Circle(2);
const rect = new Rectangle(2, 5);
const triangle = new Triangle(4, 7);

const area = new AreaComputation([circle, rect, triangle]);

console.log('total area', area.totalArea(), 'm2');