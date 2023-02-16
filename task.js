
/* function clickCookie() {
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
} */


function clickCookie() {
    let clickAmount = 0;
    let clickToDisplay = document.getElementById('clicker__counter');
    let img = document.querySelector('img');
    let lastClick = 0; 
    document.getElementById('cookie').onclick = function ClickCounter() {               
        clickAmount++;
        clickToDisplay.textContent = clickAmount; 
        img.width = clickToDisplay.textContent % 2 ? 250 : 200;
        let currentTime = new Date();
        speedClick =  (1 / ((currentTime - lastClick) / 1000)).toFixed(2);
        document.getElementById('clicker__timer').innerText = speedClick;
        lastClick = currentTime;
    }
}


clickCookie()
