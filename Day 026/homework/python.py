# 0) რა არის ფუნქცია?
# 1) ახსენით როგორ შეგვიძლია შევქმნათ ფუნქციები
# 2) ახსენით რა არის არგუმენტი?
# 3) შექმენით ფუნქცია რომელსაც აქვს 2 არგუმენტი num1 და num2, 
# თუ პირველი რიცხვი მეორეზე იყოფა უნაშთოდ მაშინ დააბრუნეთ მათი ნამრავლი, 
# ხოლო თუ ნაშთი რჩება მაშინ მათი ჯამი 
# 4) შექმენით ფუნქცია რომელსაც გადაეცემა 2 არგუმენტი width და height, 
# ეს არგუმენტები არის ოთკუთხედის გვერდები, 
# თუ ეს ოთხკუთხედი არის კვადრატი მაშინ დააბრუნე მისი ფართობი, 
# ხოლო თუ არის მართკუთხედი მაშინ დააბრუნე პერიმეტრი

# 0)
print("funqcia aris bloki, romelic shegvidzlia misi sashualebut gansxvavebulad davprintod sxvadasxva kodebi")

# 1)
print("funqciebi sheidzleba def-is saxit shevqmnat")

# 2)
print("argumentia aris mnishvneloba, romelic shegvidzlia gamoviyenot mxolod funqciis shignit")

# 3)
def numbers(num1, num2):
    if num1 % num2 == 0:
        return (num1 // num2)
    elif num1 % num2 != 0:
        return (num1 + num2)
print(numbers(10,3))

# 4)
def index(width, height):
    if width == height:
        return (width * height)
    elif width != height:
        return ((width * 2) + (height * 2))
print(index(50,25))
