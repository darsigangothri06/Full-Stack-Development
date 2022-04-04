n = int(input("Enter no:of students: "))
D = {}
for i in range(n):
    name = input("Enter name: ")
    marks = int(input("Enter marks: "))
    D[name] = marks
c = 1
while True:
    if c == 1:
        check = "yes"
        c += 1
    else:
        check = input("Do you want to find the record of another student: ")
    if check.lower() == "yes":
        name = input("Enter student name: ")
        print(D.get(name, "Student not found"))
    else:
        print("Thanks for using our application")
        
# No of Lines used: 18
'''     
Lecturer Code

n = int(input("Enter no:of students: "))
D = {}
for i in range(n):
    name = input("Enter name: ")
    marks = int(input("Enter marks: "))
    D[name] = marks
while True:
    name = input("Enter student name: ")
    marks = D.get(name, -1)
    if marks == -1:
        print("Student details not found")
    else:
        print("Name, "D[name], "marks")
    op = input("Do you want another record: ")
    if(op == "no" or op == "n" or op == "NO"):
        print("Thanks for using this application")
        break

No of Lines used: 16
'''