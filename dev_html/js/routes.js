import { Replacer } from './configs/RoutePathReplacer';
import { Router } from './configs/router';

const Pages = new Replacer({
  home: 'home.html',
  contact: 'contact.html',
  about: 'about.html'
});

export const router = new Router(Pages);
console.log(router);

// Redirect Example
// router.redirect('/contact');
