rite first method
function sleep_in(weekday,vacation) {
    if(weekday == false || vacation == true){
        var sleep = true;
    } else {
        sleep = false;
    }
    return sleep;
}

//write second method
function monkey_trouble(a_smile, b_smile) {

    if(a_smile == false && b_smile == false || a_smile == true && b_smile == true ){
        var trouble = true;
    } else {
        trouble = false;
    }
    return trouble;
}

function string_times(str,n) {
    var str2 = "";
    for (var i = 0; i < n; i++) {
        str2 += str;
    }
    return str2;
}

function front_times(frt,n){
    var array = "";
    for (var i = 0; i < n; i++){
        array += frt.substring(0,3);
    }
    return array;
}

function string_bits(str){
    var array = "";
    for (var i = 0; i < str.length; i=i+2){
        if(i %2 == 0){
            array += str.substring(i,i+1)
        }
    }
    return array;
}

function caughtSpeeding(speed,bday){
    if(bday){
        speed = speed - 5;

    }
    if(speed <= 60 ){
        return 0;
    }
    if(speed >= 61 && speed <= 80) {
        return 1;
    }
    if(speed >= 81) {
        return 2;
    }
    {
        return false;
    }

}

function fizz_buzz(x){

    if( x % 5 == 0 && x % 3 == 0 ){
        return ("FizzBuzz");
    }

    if( x % 3 == 0  ){
        return ("Fizz");
    }
    if( x % 5 == 0 ){
        return ("Buzz");
    }

    return  (x+ "!");

}

function teaParty(tea,candy){

    if ( tea < 5 || candy < 5){
        return 0;
    }
    if(tea * 2 <= candy || candy * 2 <= tea) {
        return 2;
    }

    if(tea >= 5 && candy >= 5){
        return 1;
    }

}

function blackjack(num1,num2){
    if(num1 <= 21 || num2 <= 21){
        if(num1 > num2 && num1 <=21){
            return num1;
        } else
            if(num2 <= 21){
            return num2;
            } else
                return num1
    }
    if(num1 > 21 || num2 > 21){
        return 0;
    }
}

function loneSum(a,b,c){
    var sum = a + b + c;
    if(a != b && b !=c && c != a){
        return sum;
    }
    if(a == b && b == c){
        return 0;
    }
    if(a == c){
        return b;
    }
    if(a == b){
        return c;
    }
    if(b == c){
        return a;
    }

}

function firstLast6(array) {
    var length = array.length
    var first = array[0]
    var last = array[array.length - 1]
    return (first == 6 || last == 6);
}

function has23(array){
    var length = array.length
    var first = array[0]
    var last = array[array.length - 1]
    if(first == 2 || last == 2){
        return true;
    }
    if(first == 3 || last == 3){
        return true;
    } else
        return false;
}

--function fix23(string){

}

function countYZ(string){
    var count = 0;
    var first = string.substring(i,i + 1);
    var last = string.substring(i + 1, i + 2);
    for(var i = 0; i < string.length; i++){

        if(string[i] == "y" || string[i] == "z" || string[i] == "Y" || string[i] == "Z"){
            if(i == string.length - 1){
                count++;
            }else if(string[i+1] == " "){
                count++;
            }
        }

    }
    return count;
}

function endOther(string1,string2){
    var bob = string1.toLowerCase();
    var bob2 = string2.toLowerCase();
    var joe = bob.length;
    var joe2 = bob2.length;
    var mama = bob.substring(joe - joe2);
    var mama2 = bob2.substring(joe2 - joe);
  if(mama == mama2){
      return true;
  } else
      return false;

}

function starOut(string){
    var zero = "";
    var mark = string.length;
    for(var i = 0; i < mark; i++){
        var bob = string.substring(i,i+1);
        var joe = string.substring(i-1,i);
        var mama = string.substring(i+1,i+2);
        if (joe !== "*" && bob !== "*" && mama !== "*"){
            zero += bob;
        }
    }
    return zero;
}

function getSandwhich(string){

}




//add 2-10 below here...

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(dude,2);
    document.getElementById("output").innerHTML += front_times(brothers,4);
    document.getElementById("output").innerHTML += string_bits(hello);
    document.getElementById("output").innerHTML += caughtSpeeding(65,true);
    document.getElementById("output").innerHTML += teaParty(5,10);
    document.getElementById("output").innerHTML += blackjack(19,21);
    document.getElementById("output").innerHTML += loneSum(1,2,3);
    document.getElementById("output").innerHTML += firstLast6(1,4,2,6);
    document.getElementById("output").innerHTML += has23(3,5);
    document.getElementById("output").innerHTML += countYZ("heavy");
    document.getElementById("output").innerHTML += endOther("AbC", "HiaBc");
    document.getElementById("output").innerHTML += starOut("ab*cd");


}


