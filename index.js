var yaml = require('js-yaml');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var value = yaml.safeLoad(source);
  this.value = [value];
  return "module.exports = " + JSON.stringify(value, undefined, '\t');
};
