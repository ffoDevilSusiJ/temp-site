let localizations = document.querySelectorAll(".localization__item");

localizations.forEach((item) => {
    item.addEventListener('click', function() {
        localizations.forEach((item) => {
            item.classList.toggle('localization__item_active');
        });
    })
});

function _calculateScrollbarWidth() {
    document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
  }
  // recalculate on resize
  window.addEventListener('resize', _calculateScrollbarWidth, false);
  // recalculate on dom load
  document.addEventListener('DOMContentLoaded', _calculateScrollbarWidth, false); 
  // recalculate on load (assets loaded as well)
  window.addEventListener('load', _calculateScrollbarWidth);