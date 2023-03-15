"use strict";
exports.__esModule = true;
var os = require("os");
var fs = require("fs");
var homeDir = os.homedir();
var cpuArch = os.arch();
var osType = os.platform();
var freeMemkB = os.freemem() / 1024;
var freeMemMB = freeMemkB / 1024;
// console.log("System Information: " + homeDir + " " + cpuArch + " " + osType + " " + freeMemkB + "kB " + freeMemMB + "MB");
var data = "System Information: " + homeDir + " " + cpuArch + " " + osType + " " + freeMemkB + "kB " + freeMemMB + "MB";
try {
    fs.writeFileSync("./os.info", data);
}
catch (error) {
    console.log("Error: " + error);
}
