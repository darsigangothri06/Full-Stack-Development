var age1 = Number(prompt("Enter number: "));
var mult = Number(prompt("Enter a number to multiply: "));
flag = mult < 0;
res = 0;
if(mult < 0)
    mult = 0 - mult;
for(var i = 0; i < mult; i++)
    res += age1;
if (flag == true)
    res = 0 - res;
document.write("<br>Mul is: " + res)