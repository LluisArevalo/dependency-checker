const COLORS = {
  DEFAULT: 'green',
  RED: 'red',
  YELLOW: 'yellow'
}

const _getSemanticVersioning = (version) => {
  const cleanedVersion = version.replace(/^[^\d]*/, '');
  const [major, minor, patch] = cleanedVersion
    .split('.')
    .map(num => parseInt(num, 10) || 0);

  return {
    major, minor, patch
  }
}

const getPackageVersionColor = (current, latest) => {
  const currentComparisson = _getSemanticVersioning(current);
  const latestComparisson = _getSemanticVersioning(latest);

  if (currentComparisson.major < latestComparisson.major) {
    return COLORS.RED;
  }

  if (currentComparisson.minor < latestComparisson.minor || currentComparisson.patch < latestComparisson.patch) {
    return COLORS.YELLOW;
  }

  return COLORS.DEFAULT;
}

export default getPackageVersionColor;