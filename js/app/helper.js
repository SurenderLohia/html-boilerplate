var helper = {};

function getElById(id) {
  return document.getElementById(id);
}

function forEach(arr, action) {
  var arrLen = arr.length;
  var item;
  for(var i = 0; i < arrLen; i += 1) {
    action(arr[i]);
  }
}

function attachEvent(el, event, fun) {
  el.addEventListener(event, fun);
}

function addClass(el, className) {
  if (el.classList) {
      el.classList.add(className);
    } else {
    el.className += ' ' + className;
  }
}

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

// dotT.js render Helper
function renderTemplate(templatePlaceholderId, templateFn, data) {
  var templatePlaceHolder = getElById(templatePlaceholderId);
  if(!templatePlaceHolder) {
    console.error('Placeholder template is not defined: ' + templatePlaceholderId + '\nUnable to render this template');
    return;
  }
  templatePlaceHolder.innerHTML=templateFn(data);
}

helper = {
  forEach: forEach,
  renderTemplate: renderTemplate,
  getElById: getElById,
  attachEvent: attachEvent,
  addClass: addClass,
  removeClass: removeClass
}

module.exports = helper;