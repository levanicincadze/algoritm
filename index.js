function calculator(num1, num2, operator) {
    if (num1 < 0 || num2 < 0) {
        console.log("რიცხვები უნდა იყოს დადებითი.");
        return;
    }
}

function register(password) {
    if (password.length < 5) {
        console.log("პაროლის სიგრძე უნდა იყოს მინიმუმ 5 სიმბოლო.");
        return false;
    }

    if (password[2] !== '#') {
        return false;
    }


    console.log("რეგისტრაცია წარმატებულია!");
    return true;
}


function sortNumbers(a, b, c) {
    let numbers = [a, b, c];
    numbers.sort((x, y) => x - y);
    console.log(`დასორტირებული რიცხვები: ${numbers.join(", ")}`);
}


calculator(10, 5, '+');
calculator(10, 2, '/');
calculator(-5, 3, '*');


register("pa#ss");
register("p#assw");
register("passw");


sortNumbers(9, 6, 3);
sortNumbers(10, 5, 8);
sortNumbers(7, 7, 7);