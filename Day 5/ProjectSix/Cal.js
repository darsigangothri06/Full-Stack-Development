var dividend = Number(prompt("Enter dividend: "))
var divisor = Number(prompt("enter divisor: "))
var quotient = 0
var flag = 0
if(divisor < 0)
{
    divisor = -divisor
    flag = 1
}
while(dividend >= divisor)
{
    dividend -= divisor
    if(flag) quotient -= 1
    else quotient += 1
}
if(flag == 1)
    dividend = -dividend
document.write("Quotient is: " + quotient + "<br>Remainder is: " + dividend)