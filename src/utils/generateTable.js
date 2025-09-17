import { Table } from 'console-table-printer';
import formatTableRow from './formatDependency.js';
import getPackageVersionColor from './getPackageVersionColor.js';

const generateTable = async (title, dependencyList, fetchFn) => {
  const table = new Table({
    title,
    columns: [
      { name: 'packageName', alignment: 'left' },
      { name: 'currentVersion', alignment: 'left' },
      { name: 'latestVersion', alignment: 'left' }
    ]
  });

  for (let i = 0; i < dependencyList.length; i++) {
    const { packageName, currentVersion } = formatTableRow(dependencyList[i]);
    const latestVersion = await fetchFn(packageName);
    const color = getPackageVersionColor(currentVersion, latestVersion);

    table.addRow({ packageName, currentVersion, latestVersion }, { color });
  }

  table.printTable();
}

export default generateTable;