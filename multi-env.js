#!/usr/bin/env node
'use strict'

const yargs = require("yargs");
const {spawn} = require('child_process')
const { hideBin } = require('yargs/helpers')

const argv = process.argv
//console.log(process.argv);
const envs = argv.slice(0, argv.indexOf('--')).slice(2)
const cmd = argv.slice(argv.indexOf('--') + 1).join(' ')
//console.log({envs: envs, cmd: cmd})

var line = cmd
if(0 < envs.length) {
    line = envs.map((e) => `source ${e}`).join(' && ') + ' && ' + line
}
console.log({line: line})

//spawn(`echo '${line}'`, [], { stdio: 'inherit', shell: true });
spawn(`(set -a; ${line})`, [], { stdio: 'inherit', shell: true });

//.end
