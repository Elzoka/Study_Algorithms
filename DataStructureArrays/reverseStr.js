function reverse1(str){
    return str.split("").reverse().join("");
}

const reverse2 = str => [...str].reverse().join("");

function reverse3(str){
    if(!str || str.length < 0 || typeof str !== "string"){
        return "invalid inputs";
    }

    let lastIndex = str.length - 1;
    let reversedStr = "";
    for(let i = lastIndex; i >= 0; i--){
        reversedStr += str[i];
    }

    return reversedStr;
}

console.log(reverse2("hello world"));