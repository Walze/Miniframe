import { Component } from './configs/ComponentMaker'
import { Router } from './configs/router'

const Pages = new Component({
  home: {
    name: 'home-component',
    file: 'home.html',
  },
  about: {
    name: 'about-component',
    file: 'about.html',
  },
  contact: {
    name: 'contact-component',
    file: 'contact.html',
  }
})

const Components = new Component({
  nav: {
    name: 'nav-app',
    file: 'nav.html',
  }
})


export const router = new Router(Pages.HTMLS)






// Redirect Example
// router.redirect('/contact')
