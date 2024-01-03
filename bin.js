#!/usr/bin/env node

const yargs = require("yargs");
const OpenMovieDatabase = require("./index");

if (!yargs.argv.key) {
  return console.log("You must provide a key argument with an OMDb API Key");
}

if (!yargs.argv.title && !yargs.argv.search) {
  return console.log(
    "You must provide either a title or search argument - you have provided neither"
  );
}

if (yargs.argv.title && yargs.argv.search) {
  return console.log(
    "You must provide either a title or search argument - not both"
  );
}

const omdb = new OpenMovieDatabase(yargs.argv.key);

if (yargs.argv.title) {
  omdb.get({ t: yargs.argv.title }).then((results) => {
    console.log(results);
  });
}

if (yargs.argv.search) {
  omdb.get({ s: yargs.argv.search }).then((results) => {
    console.log(results.Search);
  });
}
