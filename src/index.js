module.exports = function toReadable(number) {
    const numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const tens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    function calcTens(number) {
        if (number < 20) return numbers[number];
        if (number < 100) {
            let firstDigit = Math.floor(number / 10);
            let secondDigit = number % 10;
            return secondDigit
                ? `${tens[firstDigit]} ${numbers[secondDigit]}`
                : `${tens[firstDigit]}`;
        } else return calcHundreds(number);
    }

    function calcHundreds(number) {
        let firstDigit = Math.floor(number / 100);
        let remainder = number % 100;
        return remainder
            ? `${numbers[firstDigit]} hundred ${calcTens(remainder)}`
            : `${numbers[firstDigit]} hundred`;
    }

    return calcTens(number);
};
