var age1 = prompt("Enter age1: ");
var age2 = prompt("Enter age2: ");
diff = age1 - age2
if(diff < 0)
{
    diff = 0 - diff;
}
document.write("DIff is: " + diff);