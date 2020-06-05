"use strict";

var navlinks = $('.navbar-nav .nav-link');
navlinks.click(function (ev) {
  var componentUrl = "/components/".concat($(ev.target).attr('data-component'), ".html");
  $('#content').load(componentUrl);
});