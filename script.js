// //event handling
// function myFunction()
// {
//     console.log("I am clicked");
// }
// const mouseover = () => {
//     console.log('mouse over');
// }
// function keyPressEvent() {
//     console.log('key was pressed');
// }

// function keyUpEvent() {
//     console.log('key up was pressed');
// }

// function keyDownEvent() {
//     console.log('key down was pressed');
// } 


// //event listners
// const box1 = document.getElementById('box-1');
// box1.addEventListener('mousemove', (e) => {
//     console.log('event object', e.clientX, e.clientY);
// })

// const nameInput = document.getElementById('nameInput');
// nameInput.addEventListener('keydown', (e) => {
//     console.log('key', e.key);
// })

// nameInput.addEventListener('focus', (e) => {
//     console.log('key', e);
// // }) 



// const box4=document.getElementById('box-4');
// box4.addEventListener('click',()=>{
//     console.log('box-4 was clicked');
// }) 


// box2.adEventListne('keydow',()=>{

// })

Array.prototype.extra="extraone";
const arr = [1,2,3,4];
arr.forEach((element)=>{
    console.log(element);
})
//apply for in loop
for(let index in arr){
    console.log(index);
    //console.log(arr[index]);
}
// //has own property
// for(let index in arr){
//     if(arr.hasOwnProperty(index)){
//         console.log(index);
//     }
// }
// //apply for of loop
// for(let element of arr){
//     console.log(element);
// }
//apply for each loop
// arr.forEach((element)=>{
//     console.log(element);
// })

Array.prototype.customForEachOne = function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this);
    }
}
// using for each loop
// arr.customForEachOne((element,index,arr)=>{
//     console.log(element);
// })
