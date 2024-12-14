const inputs_html = document.getElementById('inputs');
const result_html = document.querySelector('#result');
let input;
let result;

let btns = document.querySelectorAll('button');
// btn = full item of the list of btns
btns.forEach((btn) => {
    btn.addEventListener('click', calculate)
});

function calculate(event) {
    let btn_text = this.innerText;  // first method
    // let btn_text = event.target.value; // second method
    // if (btn_text != '(' && ')' && '/' && '*' && '-' && '+' && '=' && 'Del' && 'AC') {
    //     inputs_html.innerText += btn_text;
    // };
    if (btn_text == 'AC') {
        inputs_html.innerHTML = '';
        result_html.innerHTML = '0';
    } else if (btn_text == '=') {
        result = eval(inputs_html.innerText);
        result_html.innerText = result;
    } else if (btn_text == 'Del') {

    } else {
        inputs_html.innerText += btn_text;
    };
}

// function displayOnClick(element) {
//     element.addEventListener('click', ()=> {
//         input = element.innerText;
//         if (input == 'AC') {
//             inputs_html.innerHTML = '';
//         }else if (input == 'Del') {
//             inputs_html.innerHTML[-1] = '';
//         }else{
//             inputs_html.innerHTML += input;
//         }
//     });
// };
