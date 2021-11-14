const adviceLoc = document.querySelector(`.fortune-text`)

async function randAdvice(){
    try {
        console.log(`Random Advice GET successful`);
        const randAdvice = await axios.get(`https://api.adviceslip.com/advice`);
        console.log(randAdvice.data);
        console.log(randAdvice.data.slip.advice);
        adviceLoc.innerText = randAdvice.data.slip.advice;

    } catch (err){
        console.log(`Random Advice GET failed`);
        console.log(err);
    }
}
// randAdvice();

const fortuneCookie = document.querySelector(`.fortune-cookie`)
const fortuneRight = document.querySelector(`.right`)
const fortuneLeft = document.querySelector(`.left`)


fortuneCookie.addEventListener(`click`, () => {
    fortuneRight.classList.add(`right-open`);
    fortuneLeft.classList.add(`left-open`);
    randAdvice();
    fortuneCookie.removeEventListener(`click`);
})

const reset = document.querySelector(`button`)

reset.addEventListener(`click`, () => {
    fortuneRight.classList.remove(`right-open`);
    fortuneLeft.classList.remove(`left-open`);
    adviceLoc.innerText = "";
})