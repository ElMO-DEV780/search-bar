const output = document.getElementById('output');
const input = document.getElementById('input');
const found = document.getElementById('found');

let data = ['html', 'css', 'javascript', 'python', 'c', 'php', 'cpp', 'c#'];
for (i = 0; i < data.length; i++) {
  // show the elements in output div
  output.innerHTML += `<span>${data[i]}</span>`
}

input.addEventListener('keyup', () => {
  let founditems = 0; // count found items
  let result = '';
  data.forEach((element) => {
    if (element.toLowerCase().includes(input.value.toLowerCase())) {
      result += `<span>${element}</span>`; //add found items to result variable
      founditems ++;
    }
  })
  
  if(founditems != data.length) {
    found.innerHTML = `${founditems} found`;
    found.style.display = 'block'
    input.style.width = '75%'
  } else { 
    found.style.display = 'none';
    input.style.width = '100%'
  }
     output.innerHTML = result;
});