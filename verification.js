const bcrypt = require('bcrypt');

async function verifyPassword(inputPassword, hashFromDB) {
    const match = await bcrypt.compare(inputPassword, hashFromDB);
    return match; // true or false
}

// $2b$10$uYR.R.hXrgt1LlXTNIRDcOiws7aK6/FQhZ8XXjQD8X53JRmSTUCOq