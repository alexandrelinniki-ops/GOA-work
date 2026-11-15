# 0)Create a class called Student.
# Create two objects: student1 and student2.
# Give each student:
# - A name
# - An age
# - A university
# Print the information of both students.

class Student:
    pass


student1 = Student()
student1.name = "Giorgi"
student1.age = 20
student1.university = "TSU"

student2 = Student()
student2.name = "Nika"
student2.age = 21
student2.university = "Ilia University"

print(student1.name, student1.age, student1.university)
print(student2.name, student2.age, student2.university)


# 1)
# Create a Book class.
# Create three objects: book1, book2, book3.
# Give each book the following attributes:
# - title
# - author
# - pages
# Print the information of each book.

class Book:
    pass

book1 = Book()
book1.title = "Diary of the Wimpy Kid"
book1.author = "Jeff Kinney"
book1.pages = 224

book2 = Book()
book2.title = "Harry Potter"
book2.author = "J.K. Rowling"
book2.pages = 320

book3 = Book()
book3.title = "The Hobbit"
book3.author = "J.R.R. Tolkien"
book3.pages = 310

print(book1.title, book1.author, book1.pages)
print(book2.title, book2.author, book2.pages)
print(book3.title, book3.author, book3.pages)


# 2) შექმენით კლასი სახელად Human, 
# რომელსაც გადასცემთ სახელს, ასაკს, გვარს და დაბადების ქვეყანას, 
# ასევე დაამატეთ ფუნქცია სახელად myInfo, 
# რომელიც გამოიტანს ინფორმაციას ადამიანზე

class Human:
    def __init__(self, name, age, surname, country):
        self.name = name
        self.age = age
        self.surname = surname
        self.country = country
    def myInfo(self):
        print(f"Hi! My name is {self.name} and I am {self.age} years old. My surname is {self.surname} and I was born in {self.country}")

human1 = Human("Giorgi", 20, "Smith", "Georgia")
human1.myInfo()


# 3) შექმენით კლასი სახელად Dog, 
# რომელსაც გადასცემთ სახელს, ჯიშს, ასაკს და ფუნქციას სახელად bark, 
# რომელიც გამოიტანს "bark bark"ს

class Dog:
    def __init__(self, name, breed, age):
        self.name = name
        self.breed = breed
        self.age = age
    def bark(self):
        print("bark bark")

dog1 = Dog("Max", "German Shepherd", 3)

print(dog1.name)
print(dog1.breed)
print(dog1.age)
dog1.bark()


# 4)https://www.codewars.com/kata/55a144eff5124e546400005a/train/python

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        return f"{self.name}s age is {self.age}"




# 5)https://www.codewars.com/kata/55c1d030da313ed05100005d?

import math

class Sphere(object):
    def __init__(self, radius, mass):
        self.radius = radius
        self.mass = mass

    def get_radius(self):
        return self.radius

    def get_mass(self):
        return self.mass

    def get_volume(self):
        return round((4 / 3) * math.pi * self.radius ** 3, 5)

    def get_surface_area(self):
        return round(4 * math.pi * self.radius ** 2, 5)

    def get_density(self):
        return round(self.mass / ((4 / 3) * math.pi * self.radius ** 3), 5)


# 6)https://www.codewars.com/kata/5296455e4fe0cdf2e000059f

def calculate(num1, operation, num2): 
    if operation == "+":
        return num1 + num2
    elif operation == "-":
        return num1 - num2
    elif operation == "*":
        return num1 * num2
    elif operation == "/":
        if num2 == 0:
            return None
        return num1 / num2
    else:
        return None


# 7)https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/python

import math

def solve(s, g):
    if s % g != 0:
        return -1

    a = g
    b = s - g

    if math.gcd(a, b) == g:
        return (a, b)

    return -1