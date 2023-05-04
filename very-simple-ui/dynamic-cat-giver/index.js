// let salud = 'hey ther'
// console.log(salud);

// let name = 'Anubhav';
// let age  = 23;

// const msg = `my name is ${name} and I love being ${age}`
// console.log(msg)

// myHeading.textContent = 'Hello world!';

// let head = document.querySelector('h2');
// head.onclick = function () {
//     alert('oops')
// // };

// let butt = document.querySelector('button');

// let myHeading = document.querySelector('h1')

// function changeUser () {
//   let username = prompt('enter name');
//   localStorage.setItem('name', username);
//   myHeading.textContent= 'you entereed ' + username;
// }

// if(!localStorage.getItem('name')) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
//   }
// butt.onclick = function() { changeUser();
// }

// let quotediv = document.getElementById('quote');

// fetch('https://api.kanye.rest')
// .then(res => res.json())
// .then(quote => {
//   quotediv.innerHTML += `<p> ${quote.quote}</p>`
// })

// using innerhtml +=

let btngive = document.getElementById('cat');
btngive.addEventListener("click", function e(){
  let qup = document.getElementById('catext');
  qup.style.display ="block";
  qup.innerHTML +='<p> heres a cat</p>';
})
//using appendchild

// let btngive = document.getElementById('cat');
// btngive.addEventListener("click", function e(){
//   let qup = document.getElementById('quote');
//   qup.style.display ="block";
//   console.log(qup)
//   const node = document.createTextNode("Heres a cat");
//   const br = document.createElement("br");
//   qup.appendChild(node)
//   qup.appendChild(br);;
// })

// To clear all the contentn in div 

// let btntake = document.getElementById('minus');
// btntake.addEventListener("click", function ev(){
//   document.getElementById('quote').innerHTML=""
// })

// To clear first content in div 
let btntake = document.getElementById('minus');
btntake.addEventListener("click", function evaa(){
  let qdiv = document.getElementById('catext');
  // while(qdiv.firstChild){
    qdiv.removeChild(qdiv.firstChild)
  console.log(qdiv.innerHTML)
// }
})
// To color first content in div 
let btnColor = document.getElementById('color');
let count = 0;
btnColor.addEventListener("click", function eva(){

  if(count < (document.querySelector('#catext').childNodes.length -1)) {
    count ++;
  hc = document.querySelector('#catext').childNodes[count];
  console.log(count)
  hc.style.color = "red"
  console.log(hc)}
})


// btntake.addEventListener("click", function event(){
//   let mydiv = document.getElementById('quote');
//   mydiv.style.display('none')
// })


// btngive.addEventListener("click", function evt() {
//   let quotediv = document.querySelector('#quote');
//   quotediv.innerHTML += `<p> heres a cat </p>`
// })

// btntake.addEventListener("click", function takecat() {
    // let quotediv = document.querySelector('#quote');
//     quotediv.innerHTML = `<p> heres a cat </p>`
  
// })

let catbtn = document.getElementById('showcat')
let picdiv = document.getElementById('catpic')
let quotediv = document.querySelector('#quote');

function fetchcat(){
  picdiv.innerHTML = '';
  quotediv.innerHTML = "A Random Cat Is Here";
  console.log('written cat');
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(res => res.json())
  .then(data => {
    let myurl = data[0].url;
    let mimg = document.createElement("img")
    console.log(myurl)
    console.log(mimg)
    mimg.setAttribute('src', `${myurl}`)
    mimg.classList.add('showcase');
    picdiv.appendChild(mimg)

  })
  }


catbtn.addEventListener("click", fetchcat)
  



