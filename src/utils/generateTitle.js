import figlet from 'figlet';
import chalk from 'chalk';

const generateTitle = (title) => {
  console.log(
    chalk.yellow(figlet.textSync(title, { horizontalLayout: "full" }))
  );
};

export default generateTitle;