import readPackageJson from '../lib/readPackageJson.js';
import fetchLatestNpmVersion from '../lib/fetchLatestNpmVersion.js';
import formatDependency from '../utils/formatDependency.js';

const checkDependencies = async () => {
  const json = readPackageJson();
  const dependencies = Object.entries(json.dependencies);
  const devDependencies = Object.entries(json.devDependencies);

  const dependenciesTableData = [];
  for (let i = 0; i < dependencies.length; i++) {
    const version = await fetchLatestNpmVersion(dependencies[i][0]);
    dependenciesTableData.push(formatDependency(dependencies[i], version));
  }
  console.log('\n')
  console.table(dependenciesTableData);

  const devDependenciesTableData = [];
  for (let i = 0; i < devDependencies.length; i++) {
    const version = await fetchLatestNpmVersion(devDependencies[i][0]);
    devDependenciesTableData.push(formatDependency(devDependencies[i], version));
  }
  console.table(devDependenciesTableData);
}

export default checkDependencies;