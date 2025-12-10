const si = require("systeminformation");

async function getSystemInfo() {
    try {
        const os = await si.osInfo();
        const cpu = await si.cpu();
        const mem = await si.mem();
        const net = await si.networkInterfaces();
        const system = await si.system();
        const bios = await si.bios();
        const disk = await si.diskLayout();

        console.log(" SYSTEM INFORMATION ");
        console.log("Device Name:", os.hostname);
        console.log("OS:", os.distro, os.release);
        console.log("Kernel:", os.kernel);

        console.log("\n HARDWARE ");
        console.log("Manufacturer:", system.manufacturer);
        console.log("Model:", system.model);
        console.log("BIOS Version:", bios.version);

        console.log("\n CPU ");
        console.log("Model:", cpu.manufacturer, cpu.brand);
        console.log("Cores:", cpu.cores);
        console.log("Threads:", cpu.processors);

        console.log("\ MEMORY (RAM) ");
        console.log("Total RAM (GB):", (mem.total / 1024 / 1024 / 1024).toFixed(2));
        console.log("Free RAM (GB):", (mem.free / 1024 / 1024 / 1024).toFixed(2));

        console.log("\n NETWORK");
        net.forEach(n => {
            if (n.ip4) {
                console.log("Interface:", n.iface);
                console.log("IPv4:", n.ip4);
                console.log("MAC:", n.mac);
            }
        });

        console.log("\n DISK");
        disk.forEach(d => {
            console.log("Disk:", d.name);
            console.log("Type:", d.type);
            console.log("Size (GB):", (d.size / 1024 / 1024 / 1024).toFixed(2));
        });

    } catch (error) {
        console.error("Error fetching system info:", error);
    }
}

getSystemInfo();
