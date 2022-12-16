var inputElements = document.getElementsByTagName('input');

for(let inputElement of inputElements) {
  if(inputElement.value == "Tidak" && inputElement.name == "rad_konfirmasi") {
    inputElement.checked = true;
  }else if(inputElement.value == "Sehat" && inputElement.name == "rad_kondisi") {
    inputElement.checked = true;
  }else if(inputElement.value == "Tidak" && inputElement.name == "rad_kontak") {
    inputElement.checked = true;
  }
}

jQuery("#form_survey").submit();
