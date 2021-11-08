async function randAdvice(){
    try {
        console.log(`Random Advice GET successful`);
        const randAdvice = await axios.get(`https://api.adviceslip.com/advice`);
        console.log(randAdvice.data);
        const div1 = document.querySelector(`.advice`);
        div1.innerText = randAdvice.data.slip.advice;

    } catch (err){
        console.log(`Random Advice GET failed`);
        console.log(err);
    }
}
randAdvice();