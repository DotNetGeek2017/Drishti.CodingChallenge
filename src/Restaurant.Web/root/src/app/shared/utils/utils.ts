function deepfind(obj, path) {
  return path.split(".").reduce(function(o, x) {
    return typeof o == "undefined" || o === null ? o : o[x];
  }, obj);
}

export { deepfind };
