#!/usr/bin/env node
const mdLinks=require('.lib/index');
let pathFile = process.argv[2];
let options = process.argv[3];
mdLinks.mdLinks(pathFile, options);