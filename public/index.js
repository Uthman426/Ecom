window.addEventListener('load', () => {
    const phone = document.querySelector('.phone')
    const fashion = document.querySelector('.fashion')
    const motor = document.querySelector('.MOTORS')
    const furniture =document.querySelector('.FURNITURE')
    // const sport = document.querySelector('.')

    const trend_img = document.querySelector('.trend_img')
    const trend_images = ["./images/sneaker2", "./images/fashionpics2",
        "./images/backpack1","./images/watch3avif"]
    let count = -1;
    function incrementCount() {
        if (count === trend_images.length - 1) {
            count = -1
        }
        count++;
        //console.log(Count: ${count });
        trend_img.src = trend_images[count]
    }

    setInterval(incrementCount, 2000); // increment every 2 second 
    phone.addEventListener('click', async () => {
        window.location= "phone.html"
    })
    fashion.addEventListener('click', async () => {
        window.location= "fashion.html" 
    }) 
    motor.addEventListener('click', async ()=>{
        window.location ="motor.html"
    })                   
})
                     

