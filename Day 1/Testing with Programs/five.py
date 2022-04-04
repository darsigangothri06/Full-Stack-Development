String = "Abhishek:43848,Mayur:3749,Friends:3949,Yeah:7878"
Data = String.split(',')
res = ['X'] * len(Data)
ind = 0
for i in Data:
    X = i.split(":")
    flag = 0
    maxLen = len(X[0])
    sortedCode = sorted(X[1], reverse = True)
    for p in sortedCode:
        if maxLen >= int(p):
            res[ind] = X[0][int(p) - 1]
            break
    ind += 1
print(''.join(res))