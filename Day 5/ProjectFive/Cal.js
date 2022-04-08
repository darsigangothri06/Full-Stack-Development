var num = Number(prompt("Enter a number: "))
c = 1
while(c * c != num && c * c < num)
    c += 1
if(c * c == num) document.write("1")
else document.write("-1")