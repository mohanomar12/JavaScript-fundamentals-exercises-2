
function describeCountry (country,population,capitalCity){
    return `${country} has ${population} million peaple and its capital city is ${capitalCity}`
}
describeCountry("somaliland",3.5,"Hargeisa")

let country = describeCountry("somaliland",3.5,"Hargeisa")
let country2 = describeCountry("kenya",50,"nairobi")
let country3 = describeCountry("uganda",30,"kambala")
let country4 = describeCountry("jaibuti",2.5,"jaibuti")
console.log(country)
console.log(country2)
console.log(country3)
console.log(country4)

function percentageOfWorld1 (population){
    return population / 79000000000 * 100
}
percentageOfWorld1(160000000)

let populationofsomalia = percentageOfWorld1(160000000)
let populationofkenya = percentageOfWorld1(510000000)
let populationofsomaliland = percentageOfWorld1(2000000)
console.log(populationofsomalia)
console.log(populationofkenya)
console.log(populationofsomaliland)

let population = [10000000,250000000,450000000,670000000,]
let neighbours =["kenya","ethobia","jaibuti","yeman",]
console.log(population)
console.log(neighbours)

let elements = true
console.log(elements)


for(let i=0; i <=3; i++){
    console.log(neighbours[i])
}
for(let i = 3; i >=0 ; i--){
    console.log(neighbours[i])
}


let b=0;
while(b<=3){
    console.log(neighbours[b])
    b++
}
let I=3;
while(I>=0){
    console.log(neighbours[I])
    I--
}