// Run this once in Node.js
import CryptoJS from "crypto-js";

const hash = CryptoJS.SHA256("").toString();
console.log(CryptoJS.SHA256("").toString()); // This will log the hash to the console
console.log(hash); // Copy this value