string = list("pyth#on")
start = 0
end = len(string) - 1
while start < end:
    if string[start] == "#":
        start += 1
        continue
    elif string[end] == "#":
        end -= 1
        continue
    string[start], string[end] = string[end], string[start]
    start += 1
    end -= 1
print(''.join(string))