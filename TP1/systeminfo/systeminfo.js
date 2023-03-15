"use strict";
exports.__esModule = true;
var os = require("os");
console.log("System Information");
console.log("CPU Architecture: " + os.arch());
console.log("Operating System: " + os.platform());
console.log("Free Memory: " + os.freemem() + " bytes");
