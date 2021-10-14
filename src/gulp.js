function createDist() {
  return src(['./'], { allowEmpty: true }).pipe(dest('dist/client/scripts'));
}
