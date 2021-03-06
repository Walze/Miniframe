export class Component {
  constructor(pages) {
    const req = require.context('../../pages/', true, /^\.\/.*\.html$/);
    const path = './';
    let newPages = {};
    const Components = [];

    for (let page in pages) {
      newPages[page] = req(path + pages[page].path);

      const Component = document.registerElement(pages[page].componentName, {
        prototype: Object.create(HTMLElement.prototype)
      });
      let component = new Component();
      component.innerHTML = newPages[page];

      Components[page] = component;

      let DOMComp = document.querySelector(pages[page].componentName);

      if (DOMComp) {
        DOMComp.innerHTML = component.innerHTML;

        // Executing script tag
        const ScriptTag = DOMComp.querySelector('script');

        if (ScriptTag) eval(ScriptTag.innerHTML);
      }
    }
    return Components;
  }
}
