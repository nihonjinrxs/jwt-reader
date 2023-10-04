#!/usr/bin/env node

const jwt = require('jsonwebtoken');
const readline = require('node:readline/promises');

let opts = {};
if (process.argv.includes("--complete") || process.argv.includes("-c")) {
    opts = { complete: true }
}

const signal = AbortSignal.timeout(10_000);

signal.addEventListener('abort', () => {
    console.log('JWT decode input await timeout');
    process.exit(1);
}, { once: true });

readline
    .createInterface({
        input: process.stdin,
        output: process.stdout
    })
    .question(
        `This tool will decode a JSON web token so you can see the contents.
NOTE: It does NOT verify the token.

Enter the token to decode:
`)
    .then((token) => {
        const decoded = jwt.decode(token.trim(), opts);
        console.log('');
        console.dir(decoded, { depth: null });
        process.exit(0);
    });
