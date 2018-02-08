import { Component } from './configs/ComponentMaker'
import { Router } from './configs/router'

const Pages = new Component({
  home: {
    file: 'home.html',
    name: 'home-component'
  },
  about: {
    file: 'about.html',
    name: 'about-component'
  },
  contact: {
    file: 'contact.html',
    name: 'contact-component'
  }
})


export const router = new Router(Pages.HTMLS)

const Components = new Component({
  nav: {
    file: 'nav.html',
    name: 'nav-app'
  }
})





// Redirect Example
// router.redirect('/contact')
