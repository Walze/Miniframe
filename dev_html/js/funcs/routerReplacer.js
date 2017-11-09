export class Replacer {
  constructor(pages) {
    const req = require.context('../../pages/', true, /^\.\/.*\.html$/);
    const path = './';
    let final = {};

    for (let page in pages) {
      final[page] = req(path + pages[page]);
    }

    return final;
  }
}
