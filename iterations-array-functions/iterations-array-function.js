let personData = [
    {
        "name":"James Smith",
        "age": 25,
        "gender": "Male",
        "contact": "09284625481",
        "adress": "batulao st",
        "email": "james.smith@gmail.com"
    },
    {
        "name":"Robert Douglas",
        "age": 30,
        "gender": "Male",
        "contact": "09284855481",
        "adress": "mayon st",
        "email": "robert.doug@gmail.com"
    },
    {
        "name":"Anna Pelaez",
        "age": 22,
        "gender": "Female",
        "contact": "09284625487",
        "adress": "bulusan st",
        "email": "annepelaez@gmail.com"
    },
    {
        "name":"Inigo Chiu",
        "age": 20,
        "gender": "Male",
        "contact": "09284625433",
        "adress": "apo st",
        "email": "Inigo@gmail.com"
    },
    {
        "name":"Godfrey Ferdinand",
        "age": 17,
        "gender": "Male",
        "contact": "09284625431",
        "adress": "Taal st",
        "email": "godferdinand@gmail.com"
    },
    {
        "name":"Bella Pasco",
        "age": 24,
        "gender": "Female",
        "contact": "09284625477",
        "adress": "sierra madre st",
        "email": "shooterp@gmail.com"
    },
    {
        "name":"Jb Maano",
        "age": 20,
        "gender": "Male",
        "contact": "09284625488",
        "adress": "sierra madre st",
        "email": "jb.maano@gmail.com"
    },
    {
        "name":"Hiro Tanaka",
        "age": 17,
        "gender": "Male",
        "contact": "09284625123",
        "adress": "Paco st",
        "email": "hirota@gmail.com"
    },
    {
        "name":"Nestor Velasco",
        "age": 19,
        "gender": "Male",
        "contact": "09284625499",
        "adress": "Taal st",
        "email": "Nesti@gmail.com"
    },
    {
        "name":"David Centeno",
        "age": 20,
        "gender": "Male",
        "contact": "09284625469",
        "adress": "Canlaon st",
        "email": "david@gmail.com"
    },
]

//for method
for(let x = 0; x < personData.length; x++){
    // console.log(personData[x]);
}

//single object for for in method
let singleperson = {
        "name":"David Centeno",
        "age": 20,
        "gender": "Male",
        "contact": "09284625469",
        "adress": "Canlaon st",
        "email": "david@gmail.com"
}
//for in method
for (let x in singleperson) {
    //print property and its value
    // console.log(`${x}: ${singleperson[x]}`);
}

//for of method
for (let x of personData) {
    // console.log(x)
}

//while method
let x = 0;
while (x < personData.length) {
    // console.log(personData[x])
    x++;
}

//for each method
personData.forEach(function (val, index){
    //print all data
    // console.log(val)
    //print indexes and its name
    // console.log(`${index}: ${val.name}`);
});

//filter() method
//print person age is less than or equal to 25
let personAge25 = personData.filter(function(data){return data.age <= 25})
// console.log(personAge25)

//print female gender
let personFemale = personData.filter(function(data){return data.gender == "Female"})
// console.log(personFemale)

//map() method
//get the person name and their contact numbers
let personMapped = personData.map(function(data){return `${data.name} : ${data.contact}`})
// console.log(personMapped)

//reduce() method
//sum age
let sumAge = personData.reduce(function(accumulate, data){return accumulate + data.age}, 0)
// console.log(sumAge)
