export class Component {
  constructor(pages) {
    const req = require.context('../../pages/', true, /^\.\/.*\.html$/)
    const path = './'
    const HTMLS = []

    this.user = {
      name: 'testaroo',
      email: 'lol@q'
    }

    for (let page in pages) {
      if (typeof pages[page].path != 'undefined') {
        HTMLS[page] = req(path + pages[page].path)

        this.interpolator(HTMLS[page])
      }

    }

  }

  interpolator(string) {
    const starts = string.indexOfAll('${', 2)
    const ends = string.indexOfAll('}$')

    if (starts != -1) {
      starts.map((inter, i) => {
        let interpolated = string.slice(inter, ends[i])

        console.log(
          prop(this, interpolated)
        )
      })
    }
  }
}
