const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=7ddhXS7Y#kUu5D8lw5y98F-e-fCcKA9TBEiY0In992jIS6I92zGw",
MONGODB: process.env.MONGODB || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=7ddhXS7Y#kUu5D8lw5y98F-e-fCcKA9TBEiY0In992jIS6I92zGw",//enter mongo db url
};
