(function(w) {
  function init() {
    updateTemplateSetup();
  }

  function updateTemplate(e) {
    var curOption = (e.target);
    var curCodeId = curOption.getAttribute('data-template-code');
    var curCode = document.getElementById(curCodeId); 
    var isChecked = curOption.checked;
    var curTemplteStyle;

    if(isChecked) {
      curTemplteStyle = 'block';
    } else {
      curTemplteStyle = 'none';
    }

    curCode.style.display=curTemplteStyle;
  }


  function updateTemplateSetup() {
    var optionSwitches = document.querySelectorAll('.option-switch');
    
    forEach(optionSwitches, function(optionSwitche) {
      optionSwitche.addEventListener('change', updateTemplate);
    });
  }
  
  // Helper function
  function forEach(arr, action) {
    var arrLen = arr.length;
    var item;
    for(var i = 0; i < arrLen; i += 1) {
      action(arr[i]);
    }
  }

  // Code init
  init();
}(window));

