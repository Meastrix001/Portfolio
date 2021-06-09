const app = {
  initialize () {
    this.cacheElements();
    this.registerEventListeners();
  },
  cacheElements () {
    // this.btnToTopElement = document.querySelector('.btn-to-top');
    this.$menuOpen = document.querySelector('.btn-open')
    this.$menuClose = document.querySelector('.btn-close')
    this.$nav = document.querySelector('.nav')
    this.$projectCard = document.querySelectorAll('.projects--card')
    // this.navIcons = document.querySelector('.account')
  },
  registerEventListeners () {
    // if (this.btnToTopElement !== null) {
    //   this.btnToTopElement.addEventListener('click', (ev) => {
    //     window.scrollTo({
    //       top: 0,
    //       left: 0,
    //       behavior: 'smooth',
    //     });
    //   });
    // }
    if (this.$projectCard) {
      console.log(this.$projectCard)
      this.$projectCard.forEach(card => {
        card.addEventListener('click', evt => {
          console.log(evt.target.parentNode)
          evt.target.parentNode.parentNode.classList.toggle('open')
        })
      })
    }
    this.$menuOpen.addEventListener('click', evt => {
      this.$menuOpen.classList.toggle('open')
      this.$menuClose.classList.toggle('open')
      this.$nav.classList.toggle('open')
    })

    this.$menuClose.addEventListener('click', evt => {
      this.$menuOpen.classList.toggle('open')
      this.$menuClose.classList.toggle('open')
      this.$nav.classList.toggle('open')
    })
  },
};

app.initialize();
