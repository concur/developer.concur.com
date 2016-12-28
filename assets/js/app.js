var App = (function() {
  //Search Box (Header)
  function handleSearch() {
    jQuery('.search').click(function() {
      var searchBtn = jQuery('.search-btn');
      var searchOpen = jQuery('.search-open');

      searchBtn.hasClass('fa-search') ? searchOpen.fadeIn(500) : searchOpen.fadeOut(500);
      searchBtn.toggleClass('fa-search fa-times');
    });
  }

  //Sidebar Navigation Toggle
  function handleToggle() {
    jQuery('.list-toggle').on('click', function() {
      jQuery(this).toggleClass('active');
    });
  }

  return {
    init: function() {
      handleSearch();
      handleToggle();
    }
  };
})();
