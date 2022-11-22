//array of 25 czech man names
let manNames = ["Matěj", "Lukáš", "Jakub", "Tomáš", "Stefan", "Oliver", "Robin", "Boris", "Ondřej", "Honza", "Jan", "Petr", "Michal", "Martin", "Filip", "David", "Václav", "Jakub", "Jan", "Pavel", "Marek", "Jiří", "Karel", "František", "Josef"];
//array of 25 czech man surnames
let manSurnames = ["Novák", "Novotný", "Svoboda", "Žemlička", "Dvořák", "Nováček", "Pánek", "Kvasnička", "Mráček", "Boček", "Konečný", "Suchý", "Rezler", "Zeman", "Koler", "Nedvěd", "Schick", "Souček", "Coufal", "Brabec", "Kůdela", "Berbr", "Karabec", "Hložek", "Tecl"];
//array of 25 czech woman names
let womanNames = ["Anna", "Petra", "Eliška", "Klára", "Lucie", "Tereza", "Hana", "Veronika", "Sára", "Jana", "Kateřina", "Markéta", "Eva", "Jitka", "Michaela", "Barbora", "Martina", "Lenka", "Alena", "Pavlína", "Ivana", "Daniela", "Monika", "Jarmila", "Zuzana"];
//array of 25 czech woman surnames
let womanSurnames = ["Nováková", "Novotná", "Svobodová", "Žemličková", "Dvořáková", "Nováčková", "Pánková", "Kvasničková", "Mráčková", "Bočková", "Konečná", "Suchá", "Rezlerová", "Zemanová", "Kolerová", "Nedvědová", "Schicková", "Součková", "Coufalová", "Brabcová", "Kůdelová", "Berbrová", "Karabecová", "Hložková", "Teclová"];

const dtoIn = {
    count: 50,
    age: {
        min: 19,
        max: 35
    }
}

function main(dataInput) {
    const dtoOut = [];
    for (let i = 0; i < dataInput.count; i++) {
        if(randomGender() === "Male") {
            const gender = "Male";
            const name = randomManName();
            const surname = randomManSurname();
            const birthdate = randomBirthdate();
            const workload = randomWorkload();
            dtoOut.push({
                name: name,
                surname: surname,
                gender:gender,
                birthdate: birthdate,
                workload: workload,
            });
        } else if(randomGender() === "Female")  {
            const gender = "Female";
            const name = randomWomanName()
            const surname = randomWomanSurname()
            const birthdate = randomBirthdate();
            const workload = randomWorkload();
            dtoOut.push({
                name: name,
                surname: surname,
                gender:gender,
                birthdate: birthdate,
                workload: workload,
            });
        }
    }
    return dtoOut;

}

const result = main(dtoIn);
console.log(doStuff(result));

//function that count workers with workload 10
function countWorkload10(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].workload === 10) {
            count++;
        }
    }
    return count;
}

//function that count median workload
function medianWorkload(array) {
    let median = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].workload;
    }
    median = sum / array.length;
    return median;
}

//function that count average workload of female workers
function averageWorkloadFemale(array) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i].gender === "Female"){
            count++;
            sum += array[i].workload;
        }
    }
    return sum / count;
}


function doStuff(array) {
    let count = 0;
    let workload10 = 0;
    let workload20 = 0;
    let workload30 = 0;
    let workload40 = 0;
    let age = 0;
    let sumAge = 0;
    let averageAge = 0;
    let minimalAge = 0;
    let maximalAge = 0;
    let medianAge = 0;
    let medWorkload = medianWorkload(main(dtoIn));
    let avgWomenWorkload = averageWorkloadFemale(main(dtoIn));

    function medianWorkload(array) {
        let median = 0;
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i].workload;
        }
        median = sum / array.length;
        return median;
    }

    for (let i = 0; i < array.length; i++) {
        count++;
        if (array[i].workload === 10) {
            workload10++;
        } else if (array[i].workload === 20) {
            workload20++;
        } else if (array[i].workload === 30) {
            workload30++;
        } else {
            workload40++;
        }
    }

    for (let i = 0; i < array.length; i++) {
        const date = new Date(array[i].birthdate);
        const now = new Date();
        age = now.getFullYear() - date.getFullYear();
        if (now.getMonth() < date.getMonth() || (now.getMonth() === date.getMonth() && now.getDate() < date.getDate())) {
            age--;
        }
        if (age < minimalAge) {
            minimalAge = age;
        }
        if (age > maximalAge) {
            maximalAge = age;
        }
        sumAge += age;
    }
    medianAge = sumAge / array.length;
    averageAge = sumAge / array.length;
    return {
        total: count,
        workload10: workload10,
        workload20: workload20,
        workload30: workload30,
        workload40: workload40,
        averageAge: averageAge,
        minAge: minimalAge,
        maxAge: maximalAge,
        medianAge: medianAge,
        medianWorkload: medWorkload,
        averageWomenWorkload: avgWomenWorkload,
        sortedByWorklad: array.sort((a, b) => a.workload - b.workload)
    }
}

function countObjectInArray(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count++;
    }
    return count;
}

//function to chose gender randomly
function randomGender() {
    let genders = ["Male", "Female"];
    return genders[Math.floor(Math.random()*genders.length)];
}

//function to generate random man name
function randomManName() {
    return manNames[Math.floor(Math.random() * manNames.length)];
}

//function to generate random man surname
function randomManSurname() {
    return manSurnames[Math.floor(Math.random() * manSurnames.length)];
}

//function to generate random woman name
function randomWomanName() {
    return womanNames[Math.floor(Math.random() * womanNames.length)];
}

//function to generate random woman surname
function randomWomanSurname() {
    return womanSurnames[Math.floor(Math.random() * womanSurnames.length)];
}

//function to generate random birthdate
function randomBirthdate() {
    const min = new Date();
    const max = new Date();
    min.setFullYear(min.getFullYear() - dtoIn.age.max);
    max.setFullYear(max.getFullYear() - dtoIn.age.min);
    const birthdate = new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
    return birthdate.toISOString();
}

//function to generate random workload
function randomWorkload() {
    return Math.floor(Math.random() * 4) * 10 + 10;
}

//const dtoOut = {
//   total: 50,
//   workload10: 13,
//   workload20: 12,
//   workload30: 10,
//   workload40: 15
//   averageAge: 33.6,
//   minAge: 19,
//   maxAge: 55,
//   medianAge: 38,
//   medianWorkload: 28,
//   averageWomenWorkload: 26,
//   sortedByWorkload: [
//     {
//       gender: "female",
//       birthdate: "2000-01-03T00:00:00.000Z",
//       name: "Jana",
//       surname: "Nováková",
//       workload: 20
//     },
//     {
//       gender: "male",
//       birthdate: "2000-08-07T00:00:00.000Z",
//       name: "Jan",
//       surname: "Novák",
//       workload: 40
//     }
//   ]
// }
