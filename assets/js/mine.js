let textarea;

$(document).ready(function () {

    // первоначальное заполнение textarea
    let strTextarea = 'level: 1 \n';
    strTextarea += 'clothes and bonus: 1 2 3+4 5,6 7/8 9(10) \n';
    strTextarea += 'curses: -1 -2 -3-4 -5,-6 -7/-8 -9(-10)';
    $("#textarea").html(strTextarea);
    calculator();
    // хочу сделать вызов автовысоты - auto_grow(element) не знаю как написать


    // очистка поля textarea
    $('#textarea').one("click", function () {
        let strTextarea = 'level: 1\n';
        strTextarea += 'bonus: \n';
        strTextarea += 'curses: ';
        $("#textarea").html(strTextarea);
        auto_grow(this);
        calculator();
    });

    $('#textarea').bind('input', function () {
        calculator();
    });

});


function calculator() {
    textarea = $('#textarea').val();
    let str = textarea.replace(/-/g, ' -');
    let arr = str.split(/[^-0-9]/); // подумать - как оптимизировать

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

function auto_grow(element) {
    element.style.height = "0px";
    element.style.height = (element.scrollHeight) + "px";
}