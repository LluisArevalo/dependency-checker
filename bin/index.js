#!/usr/bin/env node

import { program } from 'commander';
import Spinner from '../src/utils/loadSpinner.js';
import generateTitle from '../src/utils/generateTitle.js';
import checkDependencies from '../src/commands/checkDependencies.js';

generateTitle('Dependency Checker')

program
  .version('1.0.0')
  .description('Node.js dependency versions checker')
  .action(() => {
    const spinner = new Spinner('Checking dependencies', 'Dependencies checked completed');

    spinner.start();
    checkDependencies(spinner);
    spinner.succeed();
  });

program.parse(process.argv);