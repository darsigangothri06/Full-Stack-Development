var pwd = prompt("Enter your password :")
var flag = 0
if (pwd.length > 6) {
    if ((pwd[0] >= 'a' && pwd[0] <= 'z') || (pwd[0] >= 'A' && pwd[0] <= 'Z')) {
        for (var i = 1; i < pwd.length; i++) {
            if (((pwd[i] >= 'a' && pwd[i] <= 'z') || (pwd[i] >= 'A' && pwd[i] <= 'Z') || (pwd[i] >= '0' && pwd[i] <= '9') || pwd[i] == '@') == false) {
                flag++
                break
            }
        }
    } else
        flag++
} else
    flag++

    if (flag == 0)
        document.write("<h1><i>Valid</i></h1>")
    else
        document.write("<h1><i>InValid</i></h1>")