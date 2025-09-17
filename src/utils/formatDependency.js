const formatTableRow = ([key, value]) => {
  return {
    packageName: key,
    currentVersion: value
  };
}

export default formatTableRow;