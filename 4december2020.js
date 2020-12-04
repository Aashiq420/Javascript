const circle = {
  radius: 1,
  draw(){
    console.log('draw')
  }
};

//clone creation method 1
const clone1 = {}
for(let i in circle){
  clone1[i] = circle[i];
}
console.log(clone1);

//clone creation method 2
const clones2 = Object.assign({}, circle);
console.log(clones2)

//clone creation method 3
const clone3 = {...circle};
console.log(clone3)

//Math
console.log(Math.random())

function getRandom(min,max){
  return Math.random()*(max-min)+min;
}
console.log(getRandom(1,10))

//round, max, min, sqrt, pow
Math.round(1.9) //2
Math.min(1,2,3,4,5) //1
Math.max(1,2,3,4,5) //5
console.log(Math.pow(2,5)) //32
console.log(Math.sqrt(3)) //1,73205

console.log(Math.ceil(1.4)) //round up
console.log(Math.floor(1.4)) //round down

console.log(Math.floor(Math.random()*10)+1)

//generate 5 random numbers in range 49
for (let i=0;i<6;i++){
  console.log(Math.floor(Math.random()*49)+1)
}
