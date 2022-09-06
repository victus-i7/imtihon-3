const selectorCheck = document.querySelector(".form__select");
const result = document.querySelector(".form__result");
const form = document.querySelector(".form");
let array = []
form.addEventListener("change", (event) => {
    event.preventDefault();


    let selectorCheckValue = selectorCheck.value;

    result.innerHTML = `${selectorCheckValue}`;
});




const optionCheck = document.querySelector(".option_inner");
const result1 = document.querySelector(".check__result");
const check = document.querySelector(".check");


// check.addEventListener('change', (event) => {
//     event.preventDefault();

//     let name = document.querySelector(".name")
//     let Fname = name.textContent
//     console.log(Fname)


//     result1.innerHTML = `${Fname}`;
// });
// check.addEventListener('change', (event) => {
//     event.preventDefault();

//     let name1 = document.querySelector(".name1")
//     let Fname1 = name1.textContent
//     console.log(Fname1)


//     result1.innerHTML = `${Fname1}`;
// });
// check.addEventListener('change', (event) => {
//     event.preventDefault();

//     let name2 = document.querySelector(".name2")
//     let Fname2 = name2.textContent
//     console.log(Fname2)


//     result1.innerHTML = `${Fname2}`;
// });

// ========================== o'lcham kod =========================== //

document.getElementById("check11").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("pm")
    let uzbgar = p.textContent.replace("N1", "25 cm")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
});

document.getElementById("check12").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("pmm")
    let uzbgar = p.textContent.replace("N2", "30 cm")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
});

document.getElementById("check13").addEventListener("click", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("pmmmm")
    let uzbgar = p.textContent.replace("N3", "35 cm")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
})



// ========================== ustgi cod =========================== //

document.getElementById("check").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("pr")
    let uzbgar = p.textContent.replace("1", "Pomidor")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
})

document.getElementById("check1").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("prr")
    let uzbgar = p.textContent.replace("2", "Kurka go'shti")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
})
document.getElementById("check2").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("prrr")
    let uzbgar = p.textContent.replace("3", "Zaytun")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
})
document.getElementById("check3").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("prrrr")
    let uzbgar = p.textContent.replace("4", "Tuzlangan bodiring")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
})
document.getElementById("check4").addEventListener("change", (e) => {
    e.preventDefault()
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("prrrrr")
    let uzbgar = p.textContent.replace("5", "Qoziqorin")
    p.innerHTML = uzbgar

    results.appendChild(poragraf)
    console.log(poragraf)
})

document.getElementById("check5").addEventListener("change", (e) => {
    e.preventDefault()
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("prrrrrr")
    let uzbgar = p.textContent.replace("6", "Qazi")
    p.innerHTML = uzbgar

    results.appendChild(poragraf)
    console.log(poragraf)
})





function usha() {


    if (array.length === 0) {
        let btn = document.getElementById("shop")
        btn.onclick = (e) => {
            e.preventDefault()
            let div = document.createElement("div")
            div.className = 'diven'
            div.style.width = '700px'
            div.style.height = '70vh'
            div.style.background = 'linear-gradient(rgb(0, 0, 0, 0.7), rgb(0, 0, 0, 0.7))'
            div.style.textAlign = 'center'
            document.body.appendChild(div)
            let h1 = document.createElement("h1")
            h1.appendChild(document.createTextNode("Buyurtma qabul qilindi"))
            div.appendChild(h1)
            h1.style.color = "#FFF"
            let img = document.createElement("img")
            img.src = './images/ptichka.webp'
            div.appendChild(img)
            img.style.width = '50%'
            img.style.margin = '0 auto'
            let btn = document.createElement("button")
            btn.id = 'messi'
            btn.appendChild(document.createTextNode("X"))
            div.appendChild(btn)
            div.addEventListener("click", () => {
                div.remove()
            })

        }
    }
}
usha()

document.getElementById("text1").addEventListener("change", () => {
    let results = document.querySelector(".ceck-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("pt")
    let uzbgar = p.textContent.replace("1", "Achchiq")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
})
document.getElementById("text2").addEventListener("change", () => {
    let results = document.querySelector(".ceck-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("ptt")
    let uzbgar = p.textContent.replace("2", "Sosiskali")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
})

// window.addEventListener("load", () => {

//     let btn = document.getElementById("shop")
//     btn.onclick = (e) => {
//         e.preventDefault()
//         let div = document.createElement("div")
//         div.className = 'diven'
//         div.style.width = '700px'
//         div.style.height = '70vh'
//         div.style.background = 'crimson'
//         div.style.textAlign = 'center'
//         document.body.appendChild(div)
//         let h1 = document.createElement("h1")
//         h1.appendChild(document.createTextNode("Buyurtma qabul qilindi"))
//         div.appendChild(h1)
//         h1.style.color = "#FFF"
//         let img = document.createElement("img")
//         img.src = './images/ptichka.webp'
//         div.appendChild(img)
//         img.style.width = '50%'
//         img.style.margin = '0 auto'
//         let btn = document.createElement("button")
//         btn.id = 'messi'
//         btn.appendChild(document.createTextNode("X"))
//         div.appendChild(btn)
//         div.addEventListener("click", () => {
//             div.remove()
//         })
//     }
// })

// console.log(array)
// if (array.length === 0) {
//     document.getElementById("shop").addEventListener("click", () => {

//         let div = document.createElement("div")
//         div.className = 'diven'
//         div.style.width = '700px'
//         div.style.height = '70vh'
//         div.style.background = 'crimson'
//         div.style.textAlign = 'center'
//         document.body.appendChild(div)
//         let h1 = document.createElement("h1")
//         h1.appendChild(document.createTextNode("Hali he[ch narsa sotib olmadimgiz !!!"))
//         div.appendChild(h1)
//         h1.style.color = "#FFF"
//         let img = document.createElement("img")
//         img.src = './images/ptichka.webp'
//         div.appendChild(img)
//         img.style.width = '50%'
//         img.style.margin = '0 auto'
//         let btn = document.createElement("button")
//         btn.id = 'messi'
//         btn.appendChild(document.createTextNode("X"))
//         div.appendChild(btn)
//         div.addEventListener("click", () => {
//             div.remove()

//         })
//         console.log(div)
//     })
// }