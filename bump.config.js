/** @type {import('bumpp').VersionBumpOptions} */
module.exports = {
  commit: 'release: v%s',
  tag: 'v%s',
  execute: 'git tag latest --force',
};
