import { Component } from './configs/ComponentMaker';
import { Router } from './configs/router';

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
});

export const router = new Router(Pages);

const Components = new Component({
  nav: {
    path: 'nav.html',
    componentName: 'nav-app'
  }
});





// Redirect Example
// router.redirect('/contact');
