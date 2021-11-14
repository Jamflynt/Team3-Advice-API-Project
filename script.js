// Random piece of advice
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

// Lucky Numbers
const luckyNum = document.querySelector(`.lucky-numbers`)
const ranNum1 = Math.floor(Math.random()*100)+1;
const ranNum2 = Math.floor(Math.random()*100)+1;
const ranNum3 = Math.floor(Math.random()*100)+1;
const ranNum4 = Math.floor(Math.random()*100)+1;
const yourNums = `Your Lucky Numbers: ${ranNum1}, ${ranNum2}, ${ranNum3}, ${ranNum4}`;
function yourLuckyNums(){
    setTimeout(() => {
        luckyNum.innerText = yourNums;
    }, 440)
}

// Run event listener
const fortuneCookie = document.querySelector(`.fortune-cookie`)
const fortuneRight = document.querySelector(`.right`)
const fortuneLeft = document.querySelector(`.left`)
fortuneCookie.addEventListener(`click`, () => {
    fortuneRight.classList.add(`right-open`);
    fortuneLeft.classList.add(`left-open`);
    randAdvice();
    yourLuckyNums();
})


// Reset Fortune
const reset = document.querySelector(`button`)
reset.addEventListener(`click`, () => {
    fortuneRight.classList.remove(`right-open`);
    fortuneLeft.classList.remove(`left-open`);
    adviceLoc.innerText = "";
    luckyNum.innerText = "";
})

