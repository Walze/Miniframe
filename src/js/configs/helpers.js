String.prototype.indexOfAll = function (text, add = 0) {
  var indexes = [], i = -1;
  while ((i = this.indexOf(text, i + 1)) != -1) {
    indexes.push(i + add);
  }
  return indexes.length ? indexes : -1;
};



window.accessProp = function (obj, propString) {
  if (!propString)
    return obj;

  var prop, props = propString.split('.');

  for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
    prop = props[i];

    var candidate = obj[prop];
    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }
  return obj[props[i]];
}
