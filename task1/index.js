let choosen_coffee = -1

function update_factory(coffee) {
  var description = document.getElementById('description')
  return (entry) => {
    if (choosen_coffee == coffee || choosen_coffee == -1) {
      if (choosen_coffee != -1) document.getElementById(choosen_coffee).style.display = 'none';
      else if (entry.checked) description.style.visibility = 'visible';
      choosen_coffee = entry.checked ? coffee : -1
      if (choosen_coffee != -1) document.getElementById(choosen_coffee).style.display = 'contents';
      else description.style.visibility = 'hidden';
    } else {
      entry.checked = false
    }
  }
}