// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 2, 12)
// //in javascript month starts from 0
// console.log(myCreatedDate.toDateString())

let myCreatedDate = new Date("01-14-2024")

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

newDate.toLocaleString('default' , {
    weekday: "Long" ,
})
