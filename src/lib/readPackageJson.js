import fs from 'fs';

const readPackageJson = () => {
  const data = fs.readFileSync('./package.json', {
    encoding: 'utf8',
    flag: 'r'
  });

  return JSON.parse(data);
}

export default readPackageJson;