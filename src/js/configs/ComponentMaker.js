export class Component {
  constructor(components) {
    this.req = require.context('../../components/', true, /^\.\/.*\.html$/)
    this.components = components
    this._path = './'
    this.HTMLS = []
    this.TagsDOM = []

    this.render()
  }

  render() {
    for (let component in this.components) {
      if (typeof this.components[component].file != 'undefined') {
        this.HTMLS[component] = this.req(this._path + this.components[component].file)

        const TagsDOM = document.querySelectorAll(this.components[component].name)

        TagsDOM.forEach(el => {
          this.TagsDOM.push(el)
          el.innerHTML = this.HTMLS[component]
        })
      }
    }
  }
}
