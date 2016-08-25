{
  layout.home = new Layout('home')
  layout.home.html(`
  <main>
    <section class="home-intro">
        <div class="home-intro-content container">
          <h2>${MULTIBAO.UVP1}<span>${MULTIBAO.UVP2}</span></h2>
          <a href="#lilianricaud/patterns/blob/master/README.md">${MULTIBAO.BUTTON1}</a>
          <a href="#lilianricaud/open-social-innovation/blob/master/what-is-open-social-innovation.md">${MULTIBAO.BUTTON2}</a>
        </div>
    </section>
    <section id="gh-crew-list" class="container">
      <ul data-template="crews">
      </ul>
    </section>
  </main>`)
}
