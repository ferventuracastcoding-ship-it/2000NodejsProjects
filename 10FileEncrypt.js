const crypto = require("crypto");
const fs = require("fs");

const algorithm = "aes-256-cbc";

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


function encryptFile(input, output){

    const cipher =
        crypto.createCipheriv(
            algorithm,
            key,
            iv
        );

    const inputFile =
        fs.readFileSync(input);

    const encrypted =
        Buffer.concat([
            cipher.update(inputFile),
            cipher.final()
        ]);

    fs.writeFileSync(
        output,
        encrypted
    );

    console.log("File encrypted");
}


encryptFile(
    "secret.txt",
    "secret.enc"
);


console.log("KEY:", key.toString("hex"));
console.log("IV:", iv.toString("hex"));
