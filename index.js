let num = 0;
let arr = [];
let big = 0;

document.querySelector("button").addEventListener("click", function() {
    big = 0;
    num = document.querySelector("input").value;
    arr = convertToRoman(num);
    outputValue(arr);
});

document.querySelector("input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        document.querySelector("button").click();
    }
})

function outputValue(arr) {
    if (big == 1) {
        document.querySelector(".thousand").textContent = "";
        document.querySelector(".rest").textContent = "";
        let bigNumArray = arr.split('.')[0];
        let restArray = arr.split('.')[1];

        document.querySelector(".thousand").append(bigNumArray);
        document.querySelector(".rest").append(restArray);
    } else {
        document.querySelector(".thousand").textContent = "";
        document.querySelector(".rest").textContent = "";
        document.querySelector(".rest").append(arr);
    }
}

const romanValues = {
    1000000: 'M',
    500000: 'D',
    100000: 'C',
    50000: 'L',
    10000: 'X',
    5000: 'V',
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    5: 'V',
    1: 'I',
    2: 'II', 3: 'III', 4: 'IV', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'
}

function convertToRoman(num) {
    if (num >= 5000) {big = 1};

    let arr = [];
    if (num <= 0 ) {
        console.log(typeof(num));
        alert('Enter a number greater than 0');
    }
    
    while (num > 0) {
        if (num >= 1000000) {
            arr.push(romanValues[1000000]);
            num -= 1000000;
            if (num < 5000) {arr.push(".")};
            continue;
        }

        if (num >= 500000) {
            arr.push(romanValues[500000]);
            num -= 500000;
            if (num < 5000) {arr.push(".")};
            continue;
        }

        if (num >= 100000) {
            arr.push(romanValues[100000]);
            num -= 100000;
            if (num < 5000) {arr.push(".")};
            continue;
        }

        if (num >= 50000) {
            arr.push(romanValues[50000]);
            num -= 50000;
            if (num < 5000) {arr.push(".")};
            continue;
        }

        if (num >= 10000) {
            arr.push(romanValues[10000]);
            num -= 10000;
            if (num < 5000) {arr.push(".")};
            continue;
        }

        if (num >= 5000) {
            arr.push(romanValues[5000]);
            num -= 5000;
            if (num < 5000) {arr.push(".")};
            continue;
        }

        if (num >= 1000) {
            arr.push(romanValues[1000]);
            num -= 1000;
            continue;
        }
        if (num >= 900) {
            arr.push(romanValues[900]);
            num -= 900;
            continue;
        }
        if (num >= 500) {
            arr.push(romanValues[500]);
            num -= 500;
            continue;
        }
        if (num >= 400) {
            arr.push(romanValues[400]);
            num -= 400;
            continue;
        }                        
        if (num >= 100) {
            arr.push(romanValues[100]);
            num -= 100;
            continue;
        }
        if (num >= 90) {
            arr.push(romanValues[90]);
            num -= 90;
            continue;
        }          
        if (num >= 50) {
            arr.push(romanValues[50]);
            num -= 50;
            continue;
        }
        if (num >= 40) {
            arr.push(romanValues[40]);
            num -= 40;
            continue;
        }          
        if (num >= 10) {
            arr.push(romanValues[10]);
            num -= 10;
            continue;
        }
        if (num < 10) {
            arr.push(romanValues[num]);
            num -= num;
            continue;
        }
    }
    return arr.join('');
}