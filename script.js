const allNumbers = document.querySelectorAll(".num");

const valueHolder = document.querySelector(".valueHolder");
valueHolder.setAttribute("value","0");


for(let i = 0;i < allNumbers.length;i++){
    allNumbers[i].addEventListener("click",(e) => {
        let numValue = allNumbers[i].getAttribute("value");
        valueHolder.setAttribute("value",numValue);
    });
}

const operators = document.querySelectorAll(".operator");

for(let k = 0;k < operators.length;k++){
    operators[k].addEventListener("click",(e) => {
        var operatorType = operators[k].getAttribute("value");
        
//        switch(operatorType){
//            case "+":
//                
//                break;
//        }
    })
}