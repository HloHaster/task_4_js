// Первое задание

let train = {
    isLocomotive : true,
    locomotiveLength: 25,
    locomotiveColor: "black",

    isFreightCar: false,
    freightCarLength: 30,

    isCoachCar: true,
    totalCoachCars: 9,
    coachLength: 20,
};

function findTrainLength(train) {
    let trainLength = 0;
    if (train.isLocomotive) {
        trainLength += train.locomotiveLength;
    }
    if (train.isFreightCar) {
        trainLength += train.freightCarLength
    }
    if (train.isCoachCar) {
        trainLength += train.totalCoachCars * train.coachLength;
    }
    return trainLength;
}

console.log("Train length = " + findTrainLength(train));



// Второе задание

let car = {
    brand: "Nissan",
    color: "white",
    "number of doors": 4,
    horsepower: 144,
    "engine capacity": "2,0 л.",
    gearbox: "automatic",
};


let secondCar = {};

for (let key in car) {
    secondCar[key] = car[key];
}

console.log(secondCar);

let thirdCar = Object.assign({}, car);

console.log(thirdCar);


// Третье задание

let book = {
    numberOfPages : 545,
    cover  : true,
    isTheAuthorAlive  : false,
    isBestseller  : true,
    booksEditions  : 20000000,
};

for (let key in book) {
    if (typeof book[key] == 'boolean') {
    console.log(key);
    }
}

