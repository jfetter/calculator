 

function weirdSplitter(num){
    num = num.toString().split();
    console.log("num before map" + num) 
    item = parseInt(item);


 var mappedDigits = num.map(function(item, index, all){
        if (item === 0 )
        {
            item = item; 
        }
        else 
        {
            item = parseInt(item)
        } 

        if (item % 2 === 0 && all[index -1] % 2 === 0){
            item.toString();
            item += "*" ;
            console.log("even num is now" + num)
        }
        else if (item % 2 ===1 && all[index -1] % 2 === 1){
            item.toString();
            item += "-";
            console.log("odd num is now" + num)
        }
        
 return item; 


return mappedDigits.join("")}
}
weirdSplitter(783945234000);


return nums.reduce(function(result, num, i, array)){
    result += "*"
}