
function clickCookie() {
    let clickAmount = 0;
    const img = document.querySelector('img');

    let lastClick = 0; 
    
    document.getElementById('cookie').onclick = function ClickCounter() {
               
        clickAmount++;
        document.getElementById('clicker__counter').innerText = clickAmount;   
        if (clickAmount % 2 !== 0) {
            img.setAttribute('width', '300')
        }
        else {
            img.setAttribute('width', '200')
        };
        let currentTime = new Date(); 
        console.log(currentTime)     
        speedClick =  (1 / ((currentTime - lastClick) / 1000)).toFixed(2);
        console.log(speedClick)
        document.getElementById('clicker__timer').innerText = speedClick;
        lastClick = currentTime;
    };
}


clickCookie()
