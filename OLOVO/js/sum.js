var element = document.getElementsById('mySelect').selectedIndex;

var price = 650;
if(element == '1' || element == 1){
    document.getElementById("price").innerHTML = price;
}
else if(element == '2' || element == 2){
    price += price;
    document.getElementById("price").innerHTML = price;
   
}
else if(element == '3' || element == 3){
    price += price * 2;
    document.getElementById("price").innerHTML = price;
   
}
else if(element == '4' || element == 4){
    price += price * 4;
    document.getElementById("price").innerHTML = price;
   
}