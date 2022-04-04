# *Classes and Objects*

* Class is logical entity
* Object is a real time entity

### Class contains variables, methods, constructors
* Variables are of three types:
  
    1. Instance variables
    2. Static variables
    3. Local variables
* Methods are of three types:
    1. Instance Methods
    2. Static Methods
    3. Class Methods
* Constructors are two types:
    1. Default Constructor
    2. Zero argument Constructor
    3. Parameterized Constructor
   
* Instant variables have a seperated memory
* Static variables have a common memory
* We can replace instant variables

```python
class Test:
    def __init__(self):
        pass
    # Constructor

    def m1(self):
        self.b = 20

    # The method which contains @classmethod decorator is a class method
    @classmethod
    def m2(cls):
        pass
    # classmethod decorator has arguement cls

    # static method decorator
    @staticmethod
    def m3():
        pass
    # It has zero args
```

## Instance varibales

* Inside constructor by using `self` variable
* Whenever an object is created, constructor invokes automatically

* `object.__dict__` is used to print all the variables with the values
* If the variable of one object is deleted, the variables of remaining objects remains same.

## Static Variables

* We can declare static variables inside the class.
* We can access the static variables with the class name
* To create static variable in constructor, we can use `classname.var = value` inside `def __init__`
* We should not call the instance method with class name
* We can create static variable inside class method by using `cls.variable = value`

* We can declare the static variables
    * Within the class directly but from outside of `any method`
    * Inside constructor by using `class name`
    * Inside instances by using `class name`
    * Inside classmethods by using `class name` or `cls`
    * Inside static method by using `class name`

```python
class Test:
    x = 99
    def __init__(self):
        Test.a = 11
    
    def m1(self):
        Test.b = 22

    @classmethod
    def m2(cls):
        Test.c = 33
        cls.d = 14
    
    @staticvariable
    def m3():
        Test.e = 55

print(Test.__dict__)
t = Test()
print(Test.__dict__)
t.m1()
print(Test.__dict__)
Test.m2()
print(Test.__dict__)
Test.m3()
```

## Constructors

* Default constructor is provided by  `Python Virtual Machine`

## Passing members from one class to another

```python
class Employee:
    def __init__(self, name, age, sal):
        self.name = name
        self.age = age
        self.sal = sal

    def display(self):
        print("Name {}".format(self.name))
        print("Age {}".format(self.age))
        print("Sal {}".format(self.sal))

class Test:
    def modify(self, emp):
        emp.sal += 10000
        emp.display()
e = Employee("gangothri", 18, 15000)
t = Test()
t.modify(e)
```

* Class methods are most rarely used in python



## Inheritance

* IS - A (Inheritance)
* HAS - A (Composition and Aggregation)

<h3> Difference b/w IS-A and HAS-A
</h3>

Extending the existing functionality ------ IS - A

Just Using the functionality ---- HAS - A

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def display(self):
        print(self.name, self.age)
        
class Employee(Person):
    def __init__(self, name, age, eid, sal, car):
        super().__init__(name, age)
        self.eid = eid
        self.sal = sal
        # using the car object in Employee
        self.car = car
    def display(self):
        super().display()
        print(self.eid, self.sal)
        #calling the display in car
        self.car.display()
        
# Employee is using Car
class Car:
    def __init__(self, model, color):
        self.model = model
        self.color = color
    def display(self):
        print("Car details: ", self.model, self.color)
        
cob = Car("scoda", "black")
eob = Employee("gangothri", 18, 306, 250000, cob)
eob.display()
```

<h4>
    EMPLOYEE ---> PERSON = IS - A RELATIONSHIP
</h4>    

<h4>
CAR ----> EMPLOYEE = HAS - A RELATIONSHIP
</h4>

## Composition vs Aggregation

#### Composition

`Without existing one object, there is no chance of existence of another object`

* This type of strong relationship b/w the objects is called `Composition`
* Eg: University contains several Departments and without existing university object there is no chance of existing Department object. Hence University and Department objects are strongly associated and this strong association is nothing but Composition.

#### Aggregation

`Without existing one object, there may be a chance of existing another object`

* This type of weak association is nothing but Aggregation
* Without existing Department still there may be a chance of existing Professor. Hence, Department and Professor objects are weakly associated, which is nothing but Aggregation

```python
class Student:
    cname = "KITS"
    def __init__(self, name):
        self.name = name

print(Student.cname)  # We can Access the cname with the class name
# This is weak relationship b/w cname and object --- Aggregation
print(Student.name) # we cannot access the name without creating an object, we have to create an object.
# This is strong relation b/w name and object --- Composition
```

## Inheritance

There are 6 types of inheritance

* Single
* Multiple
* Multi Level
* Hierarchical
* Hybrid
* Cyclic

**We can achieve Code re-usability by inheritance**

### Hybrid Inheritance

```python
class A:
    def m1(self):
        print("A class m1 method")
class B:
   def m1(self):
        print("B class m1 method")
class C:
    def m1(self):
        print("C class m1 method")
class X(A, B):
    def m1(self):
        print("X class m1 method")
class Y(B, c):
    def m1(self):
        print("Y class m1 method")
class P(X, Y, C):
    def m1(self):
        print("P class m1 method")

p = P()
p.m1()
```

### Cyclic Inheritance

* Cyclic does not support any programming language

```python
class A(B):
    pass
class B(A):
    pass
```

#### Every operator have its respective `Magic Methods`

## Method Overloading

* Python does not support Method Overloading

```python
class Test:
    def m1(self, a, b):
        print(a + b)
    def m1(self, a, b, c):
        print(a + b + c)
t = Test()
t.m1(10,20)  # Error - Missing one positional argument
```

## Constructor Overloading

```python
class Student:
    def __init__(self, name, age, marks):
        self.name = name
        self.age = age
        self.marks = marks
    # Overloading Lessthan constructor
    def __lt__(self, x):
        return self.marks , x.marks
    # Overloading greater than constructor
    def __gt__(self, other):
        return self.age > other.age
    
s1 = Student("ravi", 21, 78)
s2 = Student("kumar", 20, 90)
x = input("Enter the comparision option(age/marks): ")
if x == "age":
    print(s1 > s2)
else:
    print(s1 < s2)
```

```python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        
    # Overloading Multiply Operator
    def __mul__(self, other):
        return self.salary * other.days
    
class TimeSheet:
    def __init__(self, name, days):
        self.name = name
        self.days = days
    def __mul__(self, other):
        pass
e = Employee("gangothri", 10000)
t = TimeSheet("gangothri", 15)
print("Monthly Salary: ", e * t) # 10000 * 15
print("This month salary: ", t * e) # None
```

