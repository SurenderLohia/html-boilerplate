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

// dotT.js render Helper
function renderTemplate(templatePlaceholderId, templateFn, data) {
  var templatePlaceHolder = getElById(templatePlaceholderId);
  templatePlaceHolder.innerHTML=templateFn(data);
}

helper = {
  forEach: forEach,
  renderTemplate: renderTemplate,
  getElById: getElById,
  attachEvent: attachEvent
}

module.exports = helper;