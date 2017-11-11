import { Replacer } from './configs/RoutePathReplacer';
import { Router } from './configs/router';

const Page = new Replacer({
  home: 'home.html',
  contact: 'contact.html',
  content: 'content.html'
});

export const router = new Router(Page);
console.log(router);

// Redirect Example
// router.redirect('/contact');
