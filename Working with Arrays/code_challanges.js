//1
const dogsJulia = [3, 5, 2, 12, 7],
      dogsKate = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3],
      dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (arr1, arr2) {
    let newData = arr1.slice(1, arr1.length - 2);
    let allDogs = newData.concat(arr2);

    allDogs.forEach((age, i) => {
        if (age >= 3) {
            console.log(
                `Dog number ${i + 1} is an adult, and he is ${age} years old.`
            );
        } else {
            console.log(`Dog number ${i + 1} is stil a puppy`);
        }
    });
};

checkDogs(dogsJulia, dogsKate);
checkDogs(dogsJulia2, dogsKate2);

//1.1
const checkDogs2 = function (dogsJulia, dogsKate) {
    let dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.slice(0, -2);
    let allDogs = dogsJuliaCorrected.concat(dogsKate);

    allDogs.forEach(function (age, i) {
        if (age >= 3) {
            console.log(
                `Dog number ${i + 1} is an adult, and he is ${age} years old.`
            );
        } else {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }
    });
};

checkDogs2([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs2([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


//2
let calcAverageHumanAge = function (dogAge) {
    let humanAge = dogAge.map(function (age) {
        if (age <= 2) {
            return 2 * age;
        } else if (age > 2) {
            return 16 + age * 4;
        }
    });
    //age<=2 ? 2 * age : 16 + age * 4
    const adults = humanAge.filter(dog => dog > 18);

    let average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));