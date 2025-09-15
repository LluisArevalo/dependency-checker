import ora from 'ora';
import chalk from 'chalk';

export default class Spinner {
  constructor(initialMessage, finalMessage) {
    this.finalMessage = finalMessage;
    this.spinner = ora(initialMessage);
  }

  start() {
    this.spinner.start();
  }

  succeed() {
    this.spinner.succeed(chalk.green(this.finalMessage))
  }
}