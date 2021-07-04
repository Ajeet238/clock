setInterval(() =>{

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let hRotation = h*30 + m/2;
    let mRotation = 6*m;
    let sRotation = 6*s;
    hourHand.style.transform = `rotate(${hRotation}deg)`;    
    minuteHand.style.transform = `rotate(${mRotation}deg)`;    
    secondHand.style.transform = `rotate(${sRotation}deg)`;    

    }, 1000);

