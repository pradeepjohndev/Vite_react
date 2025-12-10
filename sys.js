/* import { baseboard } from "systeminformation";

baseboard()
  .then(data => {
    console.log("Baseboard Information:");
    console.log("Manufacturer:", data.manufacturer);
    console.log("Model:", data.model);
    console.log("Version:", data.version);
    console.log("Serial Number:", data.serial);
    console.log("Asset Tag:", data.assetTag);
    console.log("Max Memory (bytes):", data.memMax);
    console.log("Memory Slots:", data.memSlots);
  })
  .catch(err => console.error("Error:", err));
 */

/* const si = require("systeminformation");

si.cpu(function (data) {
  console.log("CPU Information:");
  console.log("- manufacturer: " + data.manufacturer);
  console.log("- brand: " + data.brand);
  console.log("- speed: " + data.speed);
  console.log("- cores: " + data.cores);
  console.log("- physical cores: " + data.physicalCores);
  console.log("- processors: " + data.processors);
  console.log("- vendor: " + data.vendor);
  console.log("- family: " + data.family);
  console.log("- model: " + data.model);
  console.log("- stepping: " + data.stepping);
  console.log("- revision: " + data.revision);  
  console.log("- voltage: " + data.voltage);
  console.log("...");
}); */


const si = require("systeminformation");

async function getSystemStats() {
  try {
    const cpuSpeed = await si.cpuCurrentSpeed();
    const cpuLoad = await si.currentLoad();

    console.log("----- System Stats -----");
    console.log("Current Speed:", cpuSpeed.avg, "GHz");
    console.log("Min Speed:", cpuSpeed.min, "GHz");
    console.log("Max Speed:", cpuSpeed.max, "GHz");
    console.log("CPU Load:", cpuLoad.currentLoad.toFixed(2) + "%");
    console.log("------------------------");
    /* si.networkInterfaces().then(data => {data.forEach(net => {
    console.log("Interface:", net.iface);
    console.log("IP Address:", net.ip4);
    console.log("MAC:", net.mac);
    console.log("-------------------------");
  });
}); */
  } catch (err) {
    console.error("Error:", err);
  }
}

getSystemStats();
setInterval(getSystemStats, 1000);





