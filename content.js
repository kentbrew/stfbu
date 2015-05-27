var d = document, w = window;

var killMe = [
  'pagelet_sidebar', 'pagelet_dock'
];

var freq = 100;

var kill = function (id) {
  var el = d.getElementById(id);
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
    return true;
  }
};

var hack = function () {
  var el = d.getElementById('globalContainer');
  if (el) {
    if (el.nextSibling) {
      el.style.paddingRight = '0';
      el.parentNode.removeChild(el.nextSibling);
    }
  }
};

var check = function () {
  var found = false;
  for (var i = 0; i < killMe.length; i = i + 1) {
    var t = kill(killMe[i]);
    if (t) {
      found = true;
    }
  }
  if (found) {
    hack();
  } else {
    w.setTimeout(check, freq);
  }
};

check();