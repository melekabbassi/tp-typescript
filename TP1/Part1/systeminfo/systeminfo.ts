import * as os from "os";
import * as fs from "fs";

let homeDir = os.homedir();
let cpuArch = os.arch();
let osType = os.platform();
let freeMemkB = os.freemem() / 1024;
let freeMemMB = freeMemkB / 1024;

// console.log("System Information: " + homeDir + " " + cpuArch + " " + osType + " " + freeMemkB + "kB " + freeMemMB + "MB");

let data = "System Information: " + homeDir + " " + cpuArch + " " + osType + " " + freeMemkB + "kB " + freeMemMB + "MB";

try {
    fs.writeFileSync("./os.info", data);
} catch (error) {
    console.log("Error: " + error);
}