"use strict";

function loadPosts() {
  $.get('/api/posts', function (posts) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = posts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var p = _step.value;
        $('#posts-container').append($("\n          <div class=\"col-4\">\n            <div class=\"card m-2\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">".concat(p.title, "</h5>\n                <h6 class=\"card-subtitle mb-2 text-muted\">").concat(p.user.username, "</h6>\n                <p class=\"card-text\">\n                  ").concat(p.body.substr(0, 200), "\n                  <a href=\"#\">...read more</a>\n                </p>\n                <a href=\"#\" class=\"card-link\">Comment</a>\n                <a href=\"#\" class=\"card-link\">Like</a>\n              </div>\n            </div>\n          </div>\n          \n          ")));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
}