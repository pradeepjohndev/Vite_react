const bcrypt = require('bcrypt');

async function generateHash() {
    const plainPassword = "pradeep@123"; // put your admin password here
    const saltRounds = 10;

    const hash = await bcrypt.hash(plainPassword, saltRounds);
    console.log("Generated Hash:");
    console.log(hash);
}

generateHash();
