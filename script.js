let selectedOperation = "ADD";

let currentStep = 0;

let steps = [];

let finalResult = 0;

let carryInfo = "";



const inputA =
document.querySelectorAll("#inputA .bit");

const inputB =
document.querySelectorAll("#inputB .bit");



/* GET BINARY */

function getBinary(inputs){

    return Array.from(inputs)
        .map(x => x.value === "1" ? "1" : "0")
        .join("");

}



/* CONVERT */

function decimal(binary){

    return parseInt(binary,2);

}



function fourBit(number){

    return (number & 15)
        .toString(2)
        .padStart(4,"0");

}



/* UPDATE DECIMAL READOUTS FOR A AND B */

function updateInputDecimals(){

    document.getElementById("decimalA")
    .textContent = decimal(getBinary(inputA));

    document.getElementById("decimalB")
    .textContent = decimal(getBinary(inputB));

}



/* CREATE STEPS */

function createSteps(){

    steps = [];

    currentStep = 0;

    carryInfo = "";

    const A =
    getBinary(inputA);

    const B =
    getBinary(inputB);

    const a =
    decimal(A);

    const b =
    decimal(B);



    /* ADD */

    if(selectedOperation === "ADD"){

        let carry = 0;

        let result = "";

        for(let i=3;i>=0;i--){

            const bitA =
            Number(A[i]);

            const bitB =
            Number(B[i]);

            const sum =
            bitA + bitB + carry;

            const resultBit =
            sum % 2;

            const newCarry =
            Math.floor(sum/2);

            result =
            resultBit + result;

            steps.push(
            "Bit "+(4-i)+": "+
            bitA+" + "+bitB+
            " + carry "+carry+
            " = "+sum+
            ". Result bit = "+
            resultBit+
            ", next carry = "+
            newCarry
            );

            carry = newCarry;

        }

        finalResult =
        (a+b)&15;

        carryInfo =
        "Final Carry = "+carry;

    }



    /* SUB */

    else if(selectedOperation === "SUB"){

        let borrow = 0;

        let result = "";

        for(let i=3;i>=0;i--){

            let bitA =
            Number(A[i]);

            let bitB =
            Number(B[i]);

            let value =
            bitA - bitB - borrow;

            let newBorrow = 0;

            if(value < 0){

                value += 2;

                newBorrow = 1;

            }

            result =
            value + result;

            steps.push(
            "Bit "+(4-i)+": "+
            bitA+" − "+bitB+
            " − borrow "+borrow+
            " = "+value+
            ". Result bit = "+
            value+
            ", next borrow = "+
            newBorrow
            );

            borrow =
            newBorrow;

        }

        finalResult =
        (a-b)&15;

        carryInfo =
        "Final Borrow = "+borrow;

    }



    /* MULTIPLY */

    else if(selectedOperation === "MUL"){

        let running = 0;

        for(let i=3;i>=0;i--){

            const bit =
            Number(B[i]);

            if(bit === 1){

                const partial =
                a << (3-i);

                running += partial;

                steps.push(
                "Multiplier bit "+(4-i)+
                " = 1 → Partial product = "+
                fourBit(partial)+
                " → Running total = "+
                running
                );

            }else{

                steps.push(
                "Multiplier bit "+(4-i)+
                " = 0 → Partial product = 0000"
                );

            }

        }

        finalResult =
        (a*b)&15;

        carryInfo =
        "Full product = "+(a*b)+
        " | Lower 4 bits shown";

    }



    /* LOGIC OPERATIONS */

    else{

        let result = "";

        for(let i=0;i<4;i++){

            let x =
            Number(A[i]);

            let y =
            Number(B[i]);

            let r = 0;

            if(selectedOperation==="AND")
                r = x & y;

            if(selectedOperation==="OR")
                r = x | y;

            if(selectedOperation==="XOR")
                r = x ^ y;

            if(selectedOperation==="NAND")
                r = 1-(x&y);

            if(selectedOperation==="NOR")
                r = 1-(x|y);

            if(selectedOperation==="XNOR")
                r = 1-(x^y);

            result += r;

            steps.push(
            "Bit "+(i+1)+": "+
            x+" "+selectedOperation+
            " "+y+
            " = "+r
            );

        }

        finalResult =
        parseInt(result,2);

        carryInfo =
        "Carry = Not applicable";

    }

}



/* DISPLAY STEP */

function showStep(){

    if(currentStep >= steps.length){

        showFinal();

        return;

    }


    document.getElementById("stepNumber")
    .textContent =
    "STEP "+(currentStep+1)+" / "+steps.length;


    document.getElementById("stepDescription")
    .textContent =
    steps[currentStep];


    currentStep++;


    updateOperationDisplay();

}



/* SHOW FINAL */

function showFinal(){

    document.getElementById("finalResult")
    .textContent =
    fourBit(finalResult);


    document.getElementById("finalDecimal")
    .textContent =
    finalResult;


    document.getElementById("carryResult")
    .textContent =
    carryInfo;


    document.getElementById("stepNumber")
    .textContent =
    "✓ OPERATION COMPLETE";


    document.getElementById("stepDescription")
    .textContent =
    "All calculation steps have been completed.";

    updateOperationDisplay();

}



/* OPERATION DISPLAY */

function updateOperationDisplay(){

    const A =
    getBinary(inputA);

    const B =
    getBinary(inputB);


    let symbol = "+";


    if(selectedOperation==="SUB")
        symbol="−";

    if(selectedOperation==="MUL")
        symbol="×";

    if(selectedOperation==="AND")
        symbol="AND";

    if(selectedOperation==="OR")
        symbol="OR";

    if(selectedOperation==="XOR")
        symbol="XOR";

    if(selectedOperation==="NAND")
        symbol="NAND";

    if(selectedOperation==="NOR")
        symbol="NOR";

    if(selectedOperation==="XNOR")
        symbol="XNOR";


    document.getElementById("operationName")
    .textContent =
    selectedOperation==="MUL"
    ? "MULTIPLY"
    : selectedOperation;


    document.getElementById("binaryDisplay")
    .innerHTML =
    A+
    "<br>"+
    symbol+
    " "+B+
    "<hr>"+
    '<span class="answer">'+
    (currentStep>=steps.length
    ? fourBit(finalResult)
    : "????")+
    "</span>";

}



/* INPUT EVENTS */

function setupInput(inputs){

    inputs.forEach((input,index)=>{

        input.addEventListener("input",()=>{

            input.value =
            input.value
            .replace(/[^01]/g,"")
            .slice(-1);

            updateInputDecimals();

            createSteps();

            resetDisplay();

            if(input.value &&
            index<inputs.length-1){

                inputs[index+1].focus();

            }

        });

    });

}



/* RESET DISPLAY */

function resetDisplay(){

    currentStep = 0;

    document.getElementById("finalResult")
    .textContent="----";

    document.getElementById("finalDecimal")
    .textContent="----";

    document.getElementById("carryResult")
    .textContent="----";

    document.getElementById("stepNumber")
    .textContent="Ready";

    document.getElementById("stepDescription")
    .textContent=
    "Press NEXT STEP to begin the operation.";

    updateOperationDisplay();

}



/* OPERATION BUTTONS */

document.querySelectorAll(".op-btn")
.forEach(button=>{

    button.addEventListener("click",()=>{

        document.querySelectorAll(".op-btn")
        .forEach(b =>
        b.classList.remove("active")
        );

        button.classList.add("active");

        selectedOperation =
        button.dataset.op;

        createSteps();

        resetDisplay();

    });

});



/* NEXT STEP */

document.getElementById("nextBtn")
.addEventListener("click",()=>{

    showStep();

});



/* SHOW ALL */

document.getElementById("allBtn")
.addEventListener("click",()=>{

    while(currentStep < steps.length){

        currentStep++;

    }

    showFinal();

});



/* RESET */

document.getElementById("resetBtn")
.addEventListener("click",()=>{

    inputA[0].value="1";
    inputA[1].value="1";
    inputA[2].value="0";
    inputA[3].value="1";

    inputB[0].value="0";
    inputB[1].value="1";
    inputB[2].value="1";
    inputB[3].value="1";

    selectedOperation="ADD";

    document.querySelectorAll(".op-btn")
    .forEach(b =>
    b.classList.remove("active")
    );

    document.querySelector('[data-op="ADD"]')
    .classList.add("active");

    updateInputDecimals();

    createSteps();

    resetDisplay();

});



/* START */

setupInput(inputA);

setupInput(inputB);

updateInputDecimals();

createSteps();

resetDisplay();
