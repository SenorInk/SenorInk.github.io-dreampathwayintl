document.addEventListener("DOMContentLoaded", function () {
    
    var educationSelect = document.getElementById("education");
    var servicesSelect = document.getElementById("services");
    var nearestOfficeSelect = document.getElementById("nearest-office");
    var dreamCountrySelect = document.getElementById("dream-country");

    dreamCountrySelect.addEventListener("change", function () {
      const selectOption = dreamCountrySelect.options[0]; 
      
      selectOption.disabled = this.value !== ""; 
    });  

    
    educationSelect.addEventListener("change", function () {
      disableSelectOption(educationSelect, "");
    });

    servicesSelect.addEventListener("change", function () {
      disableSelectOption(servicesSelect, "");
    });

    nearestOfficeSelect.addEventListener("change", function () {
      disableSelectOption(nearestOfficeSelect, "");
    });

    nearestOfficeSelect.addEventListener("change", function () {
      disableSelectOption(dreamCountrySelect, "");
    });

    function disableSelectOption(selectElement, valueToDisable) {
      for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === valueToDisable) {
          selectElement.options[i].disabled = true;
        } else {
          selectElement.options[i].disabled = false;
        }
      }
    }
  });

  function showOtherInput(selectElement) {
    var otherInput = document.getElementById('other-country');
    if (selectElement.value === 'Others') {
      otherInput.style.display = 'block';
      otherInput.setAttribute('required', 'required'); // set the required attribute
    } else {
      otherInput.style.display = 'none';
      otherInput.removeAttribute('required'); // remove the required attribute
    }
  }

const urlParams = new URLSearchParams(window.location.search);
const service = urlParams.get('service');

if (service) {
    const servicesSelect = document.getElementById('services');
    const options = servicesSelect.querySelectorAll('option');

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === service) {
            options[i].selected = true;
            break; // Stop searching once the service is found
        }
    }
}