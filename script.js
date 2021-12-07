let butts = document.getElementsByClassName("buttons");
let text = document.querySelector('input[name="inp"]');
text.value = "";
Array.prototype.forEach.call(butts, (but,i) =>{
    but.addEventListener("click",() => {
        if (but.textContent == "Enter"){
            result = eval(text.value);
            text.value = result.toPrecision(3);
        }else if (but.textContent == "(-1)"){
            text.value = "-" + text.value;
        }else if (but.textContent == "C"){
            text.value = "";
        } else {
        text.value += but.textContent;
        }
    });
    
});
