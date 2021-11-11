async function randAdvice(){
    try {
        console.log(`Random Advice GET successful`);
        const randAdvice = await axios.get(`https://api.adviceslip.com/advice`);
        console.log(randAdvice.data);
        console.log(randAdvice.data.slip.advice); 

    } catch (err){
        console.log(`Random Advice GET failed`);
        console.log(err);
    }
}
randAdvice();

const fortuneCookie = document.querySelector(`.fortune-cookie`)
const fortuneRight = document.querySelector(`.right`)
const fortuneLeft = document.querySelector(`.left`)


fortuneCookie.addEventListener(`click`, () => {
    fortuneRight.classList.toggle(`right-open`);
    fortuneLeft.classList.toggle(`left-open`);
})