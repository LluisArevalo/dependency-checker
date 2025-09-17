import readPackageJson from '../lib/readPackageJson.js';
import fetchLatestNpmVersion from '../lib/fetchLatestNpmVersion.js';
import generateTable from '../utils/generateTable.js';

const checkDependencies = async () => {
  const json = readPackageJson();
  const dependencies = Object.entries(json.dependencies);
  const devDependencies = Object.entries(json.devDependencies);

  generateTable('Dependencies', dependencies, fetchLatestNpmVersion);
  generateTable('Dev Dependencies', devDependencies, fetchLatestNpmVersion);
}

export default checkDependencies;