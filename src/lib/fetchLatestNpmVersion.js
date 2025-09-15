const fetchLatestNpmVersion = async (npmPackage) => {
  const url = `https://registry.npmjs.org/${npmPackage}/latest`;
  const response = await fetch(url);
  const data = await response.json();
  return data.version;
}

export default fetchLatestNpmVersion;