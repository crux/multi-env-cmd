#!/usr/bin/env node
'use strict'

const yargs = require("yargs");
const {spawn} = require('child_process')
const { hideBin } = require('yargs/helpers')

function usage_and_exit() {
    console.log('usage: multi-env <env file> ... -- <shell command>')
    process.exit(1)
}

const argv = process.argv
const envs = argv.slice(0, argv.indexOf('--')).slice(2)
const cmd = argv.slice(argv.indexOf('--') + 1).join(' ')

// bail out on empty env file list
;(0 < envs.length) || usage_and_exit()
// bail out on empty cmdline
;(cmd.length < 1) && usage_and_exit()

var line = cmd
if(0 < envs.length) {
    line = envs.map((e) => `source ${e}`).join(' && ') + ' && ' + line
}
console.log({line: line})

//spawn(`echo '${line}'`, [], { stdio: 'inherit', shell: true });
spawn(`(set -a; ${line})`, [], { stdio: 'inherit', shell: true });

//.end
