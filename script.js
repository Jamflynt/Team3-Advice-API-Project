// async function randAdvice(){
//     try {
//         console.log(`Random Advice GET successful`);
//         const randAdvice = await axios.get(`https://api.adviceslip.com/advice`);
//         console.log(randAdvice.data);
//         console.log(randAdvice.data.slip.advice); 

//     } catch (err){
//         console.log(`Random Advice GET failed`);
//         console.log(err);
//     }
// }
// randAdvice();



// Victoria's Code 

let img = document.querySelector(`img`);
let btn1 = document.querySelector(`#btn1`);
let btn2 = document.querySelector(`#btn2`);const p1 = document.createElement('p');

// Changing the image to the broken cookie when the "Click For Your Fortune" button is clicked
btn1.addEventListener(`click`, () => {
    img.src = `Images/Broken Fortune Cookie.jpeg`;

    // Adding the fortune/advice from the API to the broken cookie image
    async function randAdvice(){
        try {
            // Getting the advice from the API
            console.log(`Random Advice GET successful`);
            const randAdvice = await axios.get(`https://api.adviceslip.com/advice`);
            console.log(randAdvice.data);
            console.log(randAdvice.data.slip.advice); 
    
            const fortune = document.querySelector(`#fortune`);

        // Displaying the advice on the webpage
        const p1 = document.createElement(`p`);
        p1.innerText = (randAdvice.data.slip.advice);
        fortune.append(p1);

        } catch (err){
            console.log(`Random Advice GET failed`);
            console.log(err);
        }
    }
    randAdvice();
})

// Changing the image to the unbroken cookie when the "Click For a New Cookie" button is clicked
btn2.addEventListener(`click`, () => {
    img.src = `Images/Unbroken Fortune Cookie .jpeg`;

    // Removing the advice when the "Click For a New Cookie" is clicked
    document.getElementById("fortune").innerText = "";
})


// NOTE: If you click the "Click For Your Fortune" button is clicked multiple times without clicking the "Click For a New Cookie" it will just add a new fortune to the web page.  It only clears the fortune if the "Click For a New Cookie" button is clicked