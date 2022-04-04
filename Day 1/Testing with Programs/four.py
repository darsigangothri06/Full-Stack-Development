class Book:
    def __init__(self, pages):
        self.pages = pages
    def __add__(self, others):
        return Book(self.pages + others.pages)
    def __str__(self):
        return "Total pages: {}".format(self.pages)
ob1 = Book(20)
ob2 = Book(10)
ob3 = Book(100)
print(ob1 + ob2 + ob3)