var inputElements = document.getElementsByTagName('input');

for(let inputElement of inputElements) {
  if(inputElement.value == "4") {
    inputElement.checked = true;
  }
}
jQuery('#saran').html("Dosen berperilaku dan berilmu baik");
jQuery('#form_kuis').submit();
