let textarea;

$(document).ready(function () {

    textarea = $('#textarea').val();
    calculator();
    // auto_grow('#textarea');  

    $('#textarea').bind(
        'input', function () {
            textarea = $('#textarea').val();
            calculator();
        }
    );

});


function calculator() {

    let arr = textarea.split(/[^-0-9]/); // подумать - как оптимизировать

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(+arr[i]);
        } else if (arr[i] <= 0) {
            newArr.push(+arr[i]);
        }
    }

    let sum = 0;
    for (const a of newArr) {
        sum += a;
    }

    $('#result').html(sum);
  
}

// auto_grow(element);
function auto_grow(element) {
    element.style.height = "0px";
    element.style.height = (element.scrollHeight)+"px";
}