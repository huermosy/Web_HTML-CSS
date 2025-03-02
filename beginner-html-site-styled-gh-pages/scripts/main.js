/***
const myHeading = document.querySelector("h1");     // 文档对象（DOM)API
myHeading.textContent = "Hello World!";
let myVar = "haha";
if ("haha" === myVar)       // 这里一开始写成  = 了， 所以加载渲染错误
{
    alert("字符串正确");
}
else
{
    alert("字符串错误");
}

function add(num1, num2){
    let result = num1 + num2;
    return result;
}
alert(add(3,4));

document.querySelector("html").addEventListener("click", function(){
    alert("别戳我， 我怕疼！");         // 网页事件
});

document.querySelector("html").addEventListener("click", () => {
    alert("别戳我， 我怕疼！");         // 网页事件 lambda表达式
});
*/


const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/firefox-icon.png") {
            myImage.setAttribute("src", "images/firefox2.png");
        } else {
            myImage.setAttribute("src", "images/firefox-icon.png");
        }
};

let myBtn = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `your input: ${myName}`;
}

if(!localStorage.getItem("name"))
{
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `okk，${storedName}`;
}

myBtn.onclick = function(){
    const myName = prompt("Please enter u name.");

    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName}`;
    }
}