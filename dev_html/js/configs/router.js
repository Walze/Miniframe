export class Router {
  constructor(Page) {
    // URL fields
    this.URL = document.location.href.split('/').slice(3);

    // Redirect to home if 404'd
    let redirectHTML;
    if (Page[this.URL[0]]) redirectHTML = Page[this.URL[0]];
    else redirectHTML = Page.home;

    // Creating view and appending it
    const Append = (document.createElement('div').innerHTML = redirectHTML);
    this.View = document.querySelector('#view');
    this.View.innerHTML = Append;

    // Executing script tag
    eval(this.View.querySelector('script').innerHTML);

    // Listening for Href clicks
    document.querySelectorAll('[href]').forEach(el => {
      el.addEventListener('click', ev => {
        window.location = ev.target.getAttribute('href');
      });
    });
  }

  redirect(where) {
    window.location = where;
  }
}
