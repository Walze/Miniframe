export class CssImporter {
  constructor(styles) {
    for (let style in styles) {
      require('../../css/' + styles[style]);
    }
  }
}
