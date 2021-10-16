(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.btnToTopElement = document.querySelector('.btn-to-top');
      this.menuBtn = document.querySelector('.menu-btn');
      this.nav = document.querySelector('.nav');
      this.navExit = document.querySelector('.menu-btn-exit');
    },
    registerEventListeners () {
      if (this.btnToTopElement !== null) {
        this.btnToTopElement.addEventListener('click', (ev) => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });
      }
      this.menuBtn.addEventListener("click", ev => {
        this.nav.classList.toggle('open'),
        this.navExit.classList.toggle('state')
      })
      this.navExit.addEventListener("click", ev => {
        this.nav.classList.toggle('open'),
        this.navExit.classList.toggle('state')
      })
    },
  };
  app.initialize();
})();
