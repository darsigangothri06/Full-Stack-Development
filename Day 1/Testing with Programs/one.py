'''
Find the Nth term of the series
0,0,7,6,14,12,21,18,28,24...

input: 9
output: 28

input: 15
output: 49
'''

n = int(input("Enter: "))
k = n //2
if n % 2 == 0:
    print(6 * k)
else:
    print(7 * k)
print("Sequence is: ")
L = []
for i in range(100 + 1):
    k = i // 2
    if i % 2 == 0:
        L.append(6 * k)
    else:
        L.append(7*k)
print(L)