# Miniframe

Simple and small framework for small/medium projects.

Features:
 * Router
 * Pretty URL and multiple URL params
 * Components (_soon_)
 * Interpolation (_soon_)


## Router

Easy routing 

```javascript
const Pages = new Replacer({
  home: 'home.html',
  contact: 'contact.html',
  about: 'about.html',
  // Name of the page: 'name of file.ext'
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