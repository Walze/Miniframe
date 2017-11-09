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

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
