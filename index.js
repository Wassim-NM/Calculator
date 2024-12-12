const inputs_html = document.getElementById('inputs');
let input;

let btns = document.querySelectorAll('button');
btns.forEach(displayOnClick);

function displayOnClick(element) {
    element.addEventListener('click', ()=> {
        input = element.innerText;
        if (input == 'AC') {
            inputs_html.innerHTML = '';
        }else if (input == 'Del') {
            inputs_html.innerHTML[0] = '';
        }else{
            inputs_html.innerHTML += input;
        }
    });
};