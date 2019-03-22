let textarea;

$(document).ready(function () {

    textarea = $('#textarea').val();
    calculator();

    $('#textarea').bind(
        'input', function () {
            textarea = $('#textarea').val();
            calculator();
        }
    );

});


function calculator() {
    // $('#result').html(textarea);

    let arr = textarea.split(/[^-0-9]/); // подумать - /[^-0-9]*/


    for (const a of arr) {
        console.log('a1', a)
    }


    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        // if (arr[i - 1] == '-' && arr[i] > 0) {
        //     newArr.push(-arr[i]);
        // }
        if (arr[i] > 0) {
            newArr.push(+arr[i]);
        } else if (arr[i] <= 0) {
            newArr.push(+arr[i]);
        }

    }

    let sum = 0;
    for (const a of newArr) {
        // console.log('a :', a);
        sum += a;
    }

    $('#result').html(sum);


}

