let myH1 = document.querySelector('h1');
console.log(myH1);
myH1.classList.add("text-blue");

//////////////////

let myH3 = document.querySelector('h3');
console.log(myH3);

function colorh3(params) {
    myH3.classList.add('text-error')
}
myH3.addEventListener('click', colorh3)

/////////////////

let mypara = document.querySelectorAll('p')[0];

function paraAction(params) {
    if (mypara.classList.contains('text-style')) {
        mypara.classList.remove('text-style')
    } else {
        mypara.classList.add('text-style')
    }
}

mypara.addEventListener('click', paraAction)

//////////////////

let mypara2 = document.querySelectorAll('p')[1];
console.log(mypara2.innerHTML);

let mySpan = mypara2.children;
console.log(mySpan);


// function mypara2action() {
//     for (let i = 0; i < mySpan.length; i++) {
//mySpan[i].classList.add('bolder')

///////////

// switch (mySpan[i]) {
//     case mySpan[0]:
//         mySpan[0].classList.add('bolder')
//         break;

//     case mySpan[1]:
//         mySpan[1].classList.add('bolder')
//         break;

//     case mySpan[2]:
//         mySpan[2].classList.add('bolder')
//         break;
// }

///////////

//if (mySpan[i]==[0]) {
// mySpan[0].classList.add('bolder')
//} 
//else if (mySpan[i]==[1]) {
//mySpan[1].classList.add('bolder')
//}

//else {
//mySpan[2].classList.add('bolder')

//}
//}

//}

// mySpan[0].addEventListener('click', mypara2action)
// mySpan[1].addEventListener('click', mypara2action)
// mySpan[2].addEventListener('click', mypara2action)

// const spans = document.querySelectorAll('p:last-child span');

for (let i = 0; i < mySpan.length; i++) {
    mySpan[i].addEventListener('click', () => {
        mySpan[i].classList.add('bolder');

        // for (let j = 0; j < mySpan.length; j++) {
        //     mySpan[j].classList.remove('bolder');
        // }
        // mySpan[i].classList.add('bolder');
    });
}

/////////////////

let mypara3 = document.querySelectorAll('p')[2];
console.log(mypara3.innerHTML);

let mySpan2 = mypara3.children;
console.log(mySpan2);

for (let i = 0; i < mySpan2.length; i++) {
    mySpan2[i].addEventListener('click', () => {
        // mySpan2[i].classList.add('bolder');

        for (let j = 0; j < mySpan2.length; j++) {
            // mySpan2[i].addEventListener('click', () => {
                mySpan2[j].classList.remove('bolder');
            //})
        }
        mySpan2[i].classList.add('bolder');
    })

}