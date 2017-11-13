# Miniframe

Simple and small framework for small/medium projects.

Features:
 * Router
 * Pretty URL and multiple URL params
 * Components
 * Interpolation (_maybe_)


## Router

Easy routing

```javascript
const Pages = new Component({
  home: {
    path: 'home.html',
    componentName: 'home-app'
  },
  about: {
    path: 'about.html',
    componentName: 'about-app'
  },
  contact: {
    path: 'contact.html',
    componentName: 'contact-app'
  }
  /* 
  page name: {
    file path: 'file.extention' // Files are inside Pages folder
    component name: 'example-app' // name must have dash (-) to avoid html tags conflic 
  }
  */
});

export const router = new Router(Pages);
```

Html files must be placed at PAGES folder.

Folder which html files are placed can be changed at _RoutePathReplacer.js_.


## Single Page App support

Comes enabled by default

```javascript
// To disable it
new Router(Pages, false);
```