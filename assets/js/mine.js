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


    $(".dice").click(function () {

        $(this).animate({ borderSpacing: randomAngle() }, {
            step: function (now) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 1000
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
    switch (num) {
        case 1: changeColorCircle([5]);
            break;
        case 2: changeColorCircle([3, 7]);
            break;
        case 3: changeColorCircle([9, 1, 5]);
            break;
        case 4: changeColorCircle([1, 9, 3, 7]);
            break;
        case 5: changeColorCircle([1, 9, 3, 7, 5]);
            break;
        case 6: changeColorCircle([1, 9, 3, 7, 4, 6]);
            break;
        default:
            break;
    }

    return num;
}


function randomAngle() {
    const num = Math.floor(Math.random() * 720);
    return num;
}


function changeColorCircle(arr) {
    for (let i = 1; i < 10; i++) {
        for (const a of arr) {
            if (a == i) {
                $("#dice>div:nth-child(" + i + ")").fadeTo(150, 1);
                break;
            } else {
                $("#dice>div:nth-child(" + i + ")").fadeTo(150, 0);
            }
        }
    }
}