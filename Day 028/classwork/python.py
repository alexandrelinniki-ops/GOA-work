# 0) კომენტარებით ახსენით რა არის default value
# 1) შექმენით ფუნქცია, რომელსაც გადაეცემა 2 რიცხვი, 
# პირველ რიცხვს ჰქონდეს default value 3, ხოლო მეორეს 5. 
# ფუნქციამ უნდა გამოიტანოს ამ ორი რიცხვიდან უდიდესი რიცხვი

# 0)
print("mnishvneloba, romelic shegvidzlia defis saxelis gamodzaxebis gareshe arguments ricxvi, saxeli and sxva rame gadavcet, hqvia default value")

# 1)
def numbers(num2, num1=3):
    return max(num1, num2)
print(numbers(5))