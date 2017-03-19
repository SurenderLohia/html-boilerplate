var helper = {};

function forEach(arr, action) {
  var arrLen = arr.length;
  var item;
  for(var i = 0; i < arrLen; i += 1) {
    action(arr[i]);
  }
}

// dotT.js render Helper
function renderTemplate(templatePlaceholderId, templateFn, data) {
  var templatePlaceHolder = document.getElementById(templatePlaceholderId);
  templatePlaceHolder.innerHTML=templateFn(data);
}

helper = {
  forEach: forEach,
  renderTemplate: renderTemplate
}

module.exports = helper;