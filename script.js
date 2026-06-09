let btns = document.querySelectorAll(".btn");
let res = document.querySelector(".result");
btns.forEach(btn => {
    btn.addEventListener("click" , () => {
        if(btn.textContent == "AC"){
            res.value = "";
        }
        else if(btn.textContent == "DEL"){
            let length = res.value.length;
            res.value = res.value.slice(0 , length-1);
        }
        else if(['+','-','*','/','%'].includes(btn.textContent)){
            if(res.value === ""){
                return;
            }
            let lastChar = res.value.slice(-1);

            if(['+','-','*','/','%'].includes(lastChar)){
                return;
            }

            res.value += btn.textContent;
        }
        else if(btn.textContent == "="){
            try{
                res.value = eval(res.value);
            }
            catch{
                res.value = "Error";
            }
        }
        else if(btn.textContent == '.'){
            let parts = res.value.split(/[+\-*/%]/);

            if(parts[parts.length-1].includes('.')){
                return;
            }
            res.value+=btn.textContent;
        }
        else {
            res.value+=btn.textContent;
        }
    })
})