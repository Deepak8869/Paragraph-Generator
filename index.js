const input = document.getElementById("numberOfWords");
const container = document.querySelector(".container");



const generateWords = () =>{
    const letters = "ABCDEFHIJKLMNOPQRSTUVWXYZ";

    let text = "";

    for(let i =0;i<numberOfWords;i++){
        const random = (Math.random()*(letters.length-1)).toFixed(0);
        text += letters[random];
    }


    return text;
};
let numberOfWords;
const generatePara = () =>{
    numberOfWords =  Number(input.value);



    const para  = document.createElement("p");

    let data = "";
   for(let i =0;i<numberOfWords;i++){
    data += generateWords((Math.random()*15).toFixed(0));
    data += " ";
   }
   
    para.innerText = data;
    para.setAttribute("class","paras");

    container.append(para);
}

