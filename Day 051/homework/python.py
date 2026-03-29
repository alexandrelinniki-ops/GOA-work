# 1) შექმენი სია რიცხვებით და გამოიყენე map, რომ ყველა რიცხვი გააორმაგო.
# 2) შექმენი სია და გამოიყენე map, რომ ყველა სიტყვა გადაიყვანო დიდი ასოებით.
# 3) შექმენი რიცხვების სია და გამოიყენე filter, რომ სიიდან აირჩიო მხოლოდ ლუწი რიცხვები.
# 4) შექმენი ფუნქცია, რომელიც იღებს ნებისმიერ რაოდენობის რიცხვს *args-ით და აბრუნებს მათ ჯამს.
# 5) შექმენი ფუნქცია, რომელიც იღებს **kwargs-ს და ბეჭდავს ყველა key-ს და value-ს.

# 1)
numbers = [1,2,3,4,5,6,7,8,9,10]
result = []

result = list(map(lambda x: x * 2, numbers))

print(result)

# 2)
names = ["Vaja","Sandro","Daviti","Alexandre"]
result1 = []

result1 = list(map(lambda x: x.upper(), names))

print(result1)

# 3)
nums = [7,5,12,1,20,9,14]
result2 = []

result2 = list(filter(lambda x: x % 2 == 0, nums))

print(result2)

# 4)
def sum_numbers(*args):

    for num in args:
        print(num + num)

sum_numbers(2,4,8,16,32,64,128)

# 5)
def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_kwargs(name="Alex", age=14, country="Georgia")