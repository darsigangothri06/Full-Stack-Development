var name = prompt("Enter your password: ")
var flag = 0
if (!(name[0] >= 'a' && name[0] <= 'z') && !(name[0] >= 'A' && name[0] <= 'Z'))
    document.write("NO")
else if (name.length < 7)
    document.write("NO")
else {
    for (var i = 1; i < name.length; i++) {
        if (name[i] >= '0' && name[i] <= '9')
            continue
        else if ((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z'))
            continue
        else if (name[i] == '@')
            continue
        else {
            flag = 1
            break
        }
    }
    if (flag == 1)
        document.write("NO")
    else document.write("YES")
}