let textarea;

$(document).ready(function () {

    // первоначальное заполнение textarea
    let strTextarea = 'Level: 1 \n';
    strTextarea += 'Bonuses, clothes…: 1 2 3+4 5,6 7/8 9(10) \n';
    strTextarea += 'Curses: -1 -2 -3-4 -5,-6 -7/-8 -9(-10) \n';
    strTextarea += 'You can write any related numbers in this field, separating them with + - / () characters, etc.';
    $("#textarea").html(strTextarea);
    calculator();
    autoGrow();
    diceRandom();


    // очистка поля textarea
    $('#textarea').one("click", function () {
        let strTextarea = 'Level: 1\n';
        strTextarea += 'Bon: \n';
        strTextarea += 'Cur: ';
        $("#textarea").html(strTextarea);
        calculator();
        autoGrow();
    });


    $('#textarea').bind('input', function () {
        calculator();
        autoGrow();
    });


    $("#dice").click(function () {
        // alert("Вы нажали на кнопку кубики " + diceRandom());  

        $(this).animate({ borderSpacing: -720 }, {
            step: function (now, fx) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 'slow'
        }, 'linear');

        diceRandom();
    });

    $(window).on('beforeunload', function () { return 'Вы уверены, что хотите покинуть страницу?'; });

});


function calculator() {
    textarea = $('#textarea').val();
    let str = textarea.replace(/-/g, ' -');
    let arr = str.split(/[^-0-9]/);
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


function autoGrow() {
    const element = $('#textarea')[0];
    element.style.height = '0px';
    element.style.height = (element.scrollHeight) + 'px';
}


function diceRandom() {

    const num = Math.floor(Math.random() * 6) + 1;

    const colorBefore = 'antiquewhite';
    const colorAfter = 'rgba(0, 0, 0, 0.6)';

    switch (num) {
        case 1: changeColorCircle([5], colorBefore, colorAfter);
            break;
        case 2: changeColorCircle([3, 7], colorBefore, colorAfter);
            break;
        case 3: changeColorCircle([1, 5, 9], colorBefore, colorAfter);
            break;
        case 4: changeColorCircle([1, 3, 7, 9], colorBefore, colorAfter);
            break;
        case 5: changeColorCircle([1, 3, 5, 7, 9], colorBefore, colorAfter);
            break;
        case 6: changeColorCircle([1, 3, 4, 6, 7, 9], colorBefore, colorAfter);
            break;
        default:
            break;
    }

    return num;
}


function changeColorCircle(arr, colorBefore, colorAfter) {
    // let color = colorAfter;
    for (let i = 1; i < 10; i++) {
        for (const a of arr) {
            if (a == i) {
                $("#dice>div:nth-child(" + i + ")").css("background-color", colorAfter);
                break;
            } else {
                $("#dice>div:nth-child(" + i + ")").css("background-color", colorBefore);
            }
        }
    }
}