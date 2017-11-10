export class Replacer {
  constructor(pages) {
    const req = require.context('../../pages/', true, /^\.\/.*\.html$/);
    const path = './';
    let finalPage = {};

    for (let page in pages) {
      finalPage[page] = req(path + pages[page]);
    }

    return finalPage;
  }
}
