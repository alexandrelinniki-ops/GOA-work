# 0) ახსენით რა არის tuple
# 1) გააკეთეთ tuple სახელად names, შეინახეთ მასში სახელები, შემდეგ კი დაპრინტეთ ბოლოს წინა სახელი
# 2) შექმენით tuple სადაც შეინახავთ მომხმარებლის სახელს, გვარს და ასაკს. 
# შემდეგ კი შეინახეთ თითოეული name, lastname და age ცვლადში და დაპრინტეთ
# 3) შექმენით tuple სადაც შეინახავთ აკადემიის სახელს, ჯგუფის სახელს, 
# და სიას სადაც იქნება თქვენი ჯგუფელების სახელები, შეინახეთ ისინი ცალკე ცვლადებში და დაპრინტეთ
# 4) შექმენით ფუნქცია სახელად manual_min რომელსაც გადაეცემა რიცხვების სია და უნდა დააბრუნოს ამ სიიდან ყველაზე პატარა

# 0)
print("tuple aris immutable data type, romelic inaxavs chvens informacias")

# 1)
names = ("Gurami", "Mentor", "GOA")

First_name, Second_name, Third_name = names

print(Second_name)

# 2)
Firstname = input("Enter your Firstname: ")
Lastname = input("Enter your Lastname: ")
Age = int(input("Enter your Age: "))

guest_registration = (Firstname, Lastname, Age)

print(guest_registration)

# 3)
Academy_name = "Goal oriented academy"
Group_name = "Group 83"
Group_members = ["Vaja","Sandro","Dato","Gaga","Nika","Alexandre","Lazare","Bacho"]

Computer_programme = (Academy_name, Group_name, Group_members)

print(Computer_programme)

# 4)
def manual_min(numbers):
    smallest = numbers[0]

    for num in numbers:
        if num < smallest:
            smallest = num

    return smallest
