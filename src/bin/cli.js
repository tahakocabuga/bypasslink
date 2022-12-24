#!/usr/bin/env node

const yargs = require("yargs");
const chalk = require("chalk");
const figlet = require("figlet");
const axios = require("axios");

const usage = chalk.keyword("orange")(
  chalk.green(
    figlet.textSync("bypasslink", {
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 1000,
      whitespaceBreak: true,
    })
  ) +
    "\nUsage: bypass <-option> <link> \n" +
    "\n"
);

const options = yargs
  .usage(usage)
  .option("b", {
    alias: "bypass",
    describe:
      "Bypass the link from an url shortening service. (if it is supported)",
    type: "string",
    demandOption: false,
  })
  .help(true).argv;

const argv = require("yargs/yargs")(process.argv.slice(2)).argv;
if (argv.bypass == null && argv.b == null) return yargs.showHelp();

const bypass = argv.b || argv.bypass;

if (bypass) {
  if (bypass == true && Object.keys(argv).length > 3)
    return console.log(
      chalk.red("You can't use more than one options while bypassing.\n")
    );
  if (bypass == true)
    return console.log(chalk.red("Usage: bypass <-b/--bypass> <link>\n"));
  axios({
    method: "post",
    url: "https://api.bypass.vip/",
    data: new URLSearchParams({
      url: bypass,
    }),
  })
    .then((response) => {
      let { data } = response;
      if (data.success === true) {
        console.log(`
          ${chalk.green("SUCCESS!")}

          Link: ${chalk.yellow(data.query)}
          Bypassed Link: ${chalk.yellow(data.destination)}
          Service: ${chalk.yellow(data.website)}
          MS: ${chalk.yellow(data.time_ms)}
        `);
      } else if (data.success === false) {
        console.log(`
          ${chalk.red("ERROR!")}

          Response: ${chalk.yellow(data.response)}
          Input: ${chalk.yellow(data.query)}
        `);
      }
    })
    .catch((error) =>
      console.log(`
          ${chalk.red("ERROR!")}

          Err: ${chalk.red("Invalid URL")}
          Input: ${chalk.red(bypass)}
        `)
    );
}
