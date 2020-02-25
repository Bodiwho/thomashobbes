var arr = ["tops/people.html",
, 
"tops/food.html","otros/about.html","otros/contact.html"];

function randSite(){
        location.href = "" + arr[Math.floor (Math.random()*arr.length)];
}
