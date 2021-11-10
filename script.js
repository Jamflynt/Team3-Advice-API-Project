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