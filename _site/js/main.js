const myEventsUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRzoD7fJxmchjzqGDGtTf2cGsRbPYEtl5ff8iXHgAgIToqAN9cv-YstfK572anvi33PNaFq26AsGI-4/pub?output=csv";

const app = new Vue({
  el: "#app",
  data: function () {
    return {
      events: []
    };
  },
  created: function () {
    this.fetchEvents();
  },
  methods: {
    fetchEvents() {
      Papa.parse(myEventsUrl, {
        download: true,
        header: true,
        complete: (results) => this.events = results.data
      });
    }
  }
});



let backtoTopBtn = document.getElementById("myBtn");


function topFunction() {
    document.getElementById("top").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

   // Add slideDown animation to Bootstrap dropdown when expanding.
   $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });



  const elements = document.querySelectorAll(".hidden-line");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function isElementVisible() {
    for (card of elements) {
      isElementInViewport(card)
        ? card.classList.add("animated-line")
        : card.classList.remove("animated-line");
    }
  }
  
  document.addEventListener("DOMContentLoaded", isElementVisible);
  window.addEventListener("scroll", isElementVisible);
  window.addEventListener("resize", isElementVisible);
  