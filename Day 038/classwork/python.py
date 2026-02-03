# 1) შექმენით ერთი list, სადაც გექნებაც მოცემული ინტეჯერი რიცხვები მოცემული 1 დან 12მდე, 
# თქვენი დავალებაა რომ გააორმაგოთ თითოეული რიცხვი თითოეულ იტერაციაზე

# 2) list comprehension დროს დაატრიალეთ for loop და დააგენერირეთ რიცხვები 0 დან 20 მდე

# 3) შექმენით ერთი ლისთი ხილზე, და გაფილტრეთ იმ ხილის სახელები რომლებიც არ იწყება "A" ზე

# 4) შექმენით ერთი ინტეჯერების list სადაც გექნებათ მოცემული რიცხვები 1 დან 20 მდე, 
# თქვენი დავალებაა რომ გაფილტროთ კენტი რიცხვები list comprehension გამოყენებით

# 5)https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/python


# 1)
list = [1,2,3,4,5,6,7,8,9,10,11,12]

nums = [x*2 for x in list]

print(nums)

# 2)
num = [x for x in range(21)]

print(num)

# 3)
list_num1 = ["Apple","Orange","Banana","Watermelon"]

fruits = [x for x in list_num1 if x[0] == "A"]

print(fruits)

# 4)
list_num2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

int = [x for x in list_num2 if x % 2 == 0]

print(int)

# 5)
