export class Component {
  constructor(pages) {
    const req = require.context('../../pages/', true, /^\.\/.*\.html$/);
    const path = './';
    const HTMLS = []

    for (let page in pages) {
      HTMLS[page] = req(path + pages[page].path);


    }
  }
}
