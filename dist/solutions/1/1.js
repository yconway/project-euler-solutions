"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mathy_1 = require("../../lib/Mathy");
const array_1 = require("../../lib/array");
const log_1 = require("../../lib/log");
const Solutions_1 = require("../Solutions");
function e1() {
    let max = 1000;
    let multiplesOf3 = Mathy_1.Mathy.getMultiples(3, max);
    let multiplesOf5 = Mathy_1.Mathy.getMultiples(5, max);
    let uniques = array_1.unique(multiplesOf3.concat(multiplesOf5));
    log_1.log(array_1.sum(uniques));
}
Solutions_1.solutions.register(1, e1);
