import { Replacer } from './funcs/routerReplacer';

const page = new Replacer({
  home: 'home.html',
  contact: 'contact.html'
});

document.querySelectorAll('[route-href]').forEach(el => {
  el.addEventListener('click', e => {
    const link = e.target.getAttribute('route-href');

    window.location = link;
  });
});
