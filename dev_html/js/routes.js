import { Replacer } from './configs/RoutePathReplacer';
import { Router } from './configs/router';

const Page = new Replacer({
  home: 'home.html',
  contact: 'contact.html',
  content: 'content.html'
});

export const router = new Router(Page);

// Redirect Example
// router.redirect('/contact');
