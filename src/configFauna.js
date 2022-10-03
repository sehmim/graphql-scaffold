#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from "fs";
// import { readSchema } from './schemaParser'

async function getFaumaKeys() {
  try {
    const answers = await inquirer.prompt({
      name: "faunaKey",
      type: "input",
      message: "What is your fauna key:",
    }) 
    return answers
  } catch (error) {
    console.log(error);
  }
}

async function getFaumaSecret() {
  try {
    const answers = await inquirer.prompt({
      name: "faunaSecret",
      type: "input",
      message: "What is your fauna secret:",
    }) 
    return answers
  } catch (error) {
    console.log(error);
  }
}


async function main() {
  const { faunaKey } = await getFaumaKeys();
  const { faunaSecret } = await getFaumaSecret();

  await writeToTomlFile(faunaKey, faunaSecret)
  // validate key and secret 
}

async function writeToTomlFile(faunaKey, faunaSecret){

  const data = 
  `\n\n
[vars]
FAUNA_SECRET = "${faunaKey}"
FAUNA_DOMAIN = "${faunaSecret}"
  `

  // TODO: Check if vars already exist and replace those

  fs.appendFile('wrangler.toml', data, ()=> {
    console.log("Done writing fauna creds into .toml")
  })
}


main().then( async () => {
  console.log("\n--------- Done! ----------- \n")
})