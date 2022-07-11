function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

function binaryTodecimal(b){
    var noone = document.getElementById("noone").value;
     var temp= parseInt(noone);
      var n = temp.toString().length- 1;
   var result1 = 0;
  for (i = 0; i<temp.toString().length; i++){
  var digit = temp.toString().charAt(i);
  result1 = result1 + (digit * Math.pow(2, n));
    n--;
  }
 var b=reverseString(result1.toString());
 return b;

}
function decimalTobinary(b){
    var a = '';
     var temp= parseInt(b);
        
        while (temp != 0){
        var division=temp%2;
        temp= parseInt(temp/2);
        a = a + division;
        }
        var b=a;
        return b;
        console.log(b);
}
function decimalTooctal(b){
    var a = '';
    var temp= parseInt(b);
      while (temp != 0){
        var division=temp%8;
        temp= parseInt(temp/8);
        a = a + division;
        }
        var b=a;
        return b;
}
function decimaltohexa(b){
  var a='';
   var hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
      var temp= parseInt(b);
         while(temp != 0){
  var division=temp%16;
      temp= parseInt(temp/16);
      a=a+hex[division]; 
    }
        var b=a;
        return b;
}
function octalTodecimal(b){
  var result1 = 0;
  var temp= parseInt(b);
  var n = temp.toString().length- 1;
  for (i = 0; i<temp.toString().length; i++){
    var digit = temp.toString().charAt(i);
    result1 = result1 + (digit * Math.pow(8, n));
    n--; 
  }
 a=reverseString(result1.toString());
        var b=a;
        return b;
}
function hexaTodecimal(b){
var digits = '0123456789ABCDEF';  
var hex=b.toString();
var hex = hex.toUpperCase();  
var val = 0;  
for (i = 0; i < hex.toString().length; i++)  
{  
var c = hex.charAt(i);  
var d = parseInt(digits.indexOf(c));  
val = 16*val + d;  
} 
console.log(val);
var b=reverseString(val.toString());
return b; 

}


function myConverter() {

  var noone = document.getElementById("noone").value;
  var x = document.getElementById("mySelect").selectedIndex;
  var y = document.getElementById("mySelect2").selectedIndex;
  var temp= parseInt(noone);
  var a = '';
 var hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
 var n = temp.toString().length- 1;
   var result1 = 0;
  alert(document.getElementsByTagName("option")[x].value);


if((document.getElementsByTagName("option")[y].value)=="binary"){
  if((document.getElementsByTagName("option")[x].value)=="decimal"){
  for (i = 0; i<temp.toString().length; i++){
    var digit = temp.toString().charAt(i);
    result1 = result1 + (digit * Math.pow(2, n));
    n--; 
  }
 a=reverseString(result1.toString());
}
  else if((document.getElementsByTagName("option")[x].value)=="octal"){
 var d= binaryTodecimal(temp);
 a= decimalTooctal(reverseString(d.toString()));
}
else if((document.getElementsByTagName("option")[x].value)=="hexadecimal"){
 var d= binaryTodecimal(temp);
 a= decimaltohexa(reverseString(d.toString()));
}

}
// binary loop ended
if((document.getElementsByTagName("option")[y].value)=="octal"){
  if((document.getElementsByTagName("option")[x].value)=="decimal"){
    var b = temp;
a=octalTodecimal(b);
}
  else if((document.getElementsByTagName("option")[x].value)=="binary"){
  var b=octalTodecimal(temp);
 a= decimalTobinary(reverseString(b.toString()));
 console.log(a);
}
else if((document.getElementsByTagName("option")[x].value)=="hexadecimal"){
  var b=octalTodecimal(temp);
 a= decimaltohexa(reverseString(b.toString()));
}

}
// octal loop ended
if((document.getElementsByTagName("option")[y].value)=="hexadecimal"){
  if((document.getElementsByTagName("option")[x].value)=="decimal"){
    var b = noone;
a=hexaTodecimal(b);
}
  else if((document.getElementsByTagName("option")[x].value)=="binary"){
  var b=hexaTodecimal(noone);
  a=decimalTobinary(reverseString(b.toString()));
}
else if((document.getElementsByTagName("option")[x].value)=="octal"){
  var b=hexaTodecimal(noone);
 a= decimalTooctal(reverseString(b.toString()));
}

}
// hexadecimal loop ended



if((document.getElementsByTagName("option")[y].value)=="decimal"){
  if((document.getElementsByTagName("option")[x].value)=="binary")
        {
        while (temp != 0){
        var division=temp%2;
        temp= parseInt(temp/2);
        a = a + division;
        }
        }


  else if((document.getElementsByTagName("option")[x].value)=="octal"){
    while (temp != 0){
        var division=temp%8;
        temp= parseInt(temp/8);
        a = a + division;
        }
}
else if((document.getElementsByTagName("option")[x].value)=="hexadecimal"){
         while(temp != 0){
  var division=temp%16;
      temp= parseInt(temp/16);
      a=a+hex[division]; 
    }
}
}

if((document.getElementsByTagName("option")[x].value)==document.getElementsByTagName("option")[y].value){
  a=temp;
       document.getElementById("result2").innerHTML= a;
        }
        else{
                 
       document.getElementById("result").innerHTML= a;
        }
}
