var arr = ["tops/books.html",
, 
"tops/food.html"];

function randSite(){
        location.href = "" + arr[Math.floor (Math.random()*arr.length)];
}
