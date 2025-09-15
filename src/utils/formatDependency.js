const formatDependency = ([key, value], version) => {
  return {
    package: key,
    version: value,
    latestVersion: version
  };
}

export default formatDependency;