# 0) კომენტარებით ახსენით, რა არის ფუნქციები და რატომ ვიყენებთ მათ
# 1) შექმენით ფუნქცია სახელად "Printer", 
# რომელიც გამოიტანს თქვენს სასურველ ტექსტს 3ჯერ. გამოიძახეთ ეს ფუნქცია 5ჯერ#
# 2) კომენტარებით ახსენით რა არის არგუმენტი
# 3) შექმენით ფუნქცია სახელად sum, რომელსაც გადაეცემა ორი არგუმენტი და გამოიტანს მათ ჯამს
# 4) შექმენით ფუნქცია სახელად difference, რომელსაც გადაეცემა სამი რიცხვი, 
# შემდეგ გამოიტანეთ ამ სამი რიცხვიდან ყველაზე დიდი და ყველაზე პატარა რიცხვი

# 0)
print("funqcia aris bloki, romelic shegvidzlia misi sashualebut gansxvavebulad davprintod sxvadasxva kodebi")

# 1)
def Printer():
    print("Hello there")
    print("How are you?")
    print("Whats your name?")

Printer()
Printer()
Printer()
Printer()
Printer()

# 2)
print("argumentia aris mnishvneloba, romelic shegvidzlia gamoviyenot mxolod funqciis shignit")

# 3)
num = 24
num1 = 25

def sum():
    print((num) + (num1))
sum()

print(sum())

# 4)
def difference(a, b, c):
    return max(a, b, c), min(a, b, c)

print(difference(15,10,20))
