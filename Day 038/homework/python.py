# 1) შექმენით ერთი ლისთი, და გაფილტრეთ ამ ლისთიდან ლუწი რიცხვები list comprehension გამოყენებით

# 2) შექმენით ლისთი, 
# თქვენი დავალებაა რომ ყოველ იტერაციაზე თითოეულ ელემენტის პირველი ასო გაადიდოთ და შეინახო ახალ ლისთში list comprehension გამოყენებით

# 3) შექმენით ერთი ლისთი, სადაც გექნებათ შეტანილი სხვადახვა მონაცემთა ტიპის ელემენტები: 
# სტრინგები, ინტეჯერები, ბულიანი და ფლოათები, 
# თქვენი დავალებაა რომ ლისთში დატოვოთ მხოლოდ ინტეჯერები, სხვა ყველაფერი კი გაფილტრეთ

# 4) დაასრულეთ საკლასოში ჩაგდებული codewars ვისაც არ დაუსრულებია

# 5) გაიარეთ Python Intermidiateს List Comprehension თავი


# 1)
list = [1,2,3,4,5,6,7,8]

num = [x for x in list if x % 2 != 0]

print(num)

# 2)
list1 = ["alex","lile","vaja","gio","gurami"]

names = [x.capitalize() for x in list1]

print(names)

# 3)
list2 = ["Al",2,2.5,True]

mobile_data = [x for x in list2 if type(x) == int]

print(mobile_data)

# 4)
# https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/python

def goose_filter(birds):
    geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    return [x for x in birds if x not in geese]

# 5)

# davaleba shesrulebulia image.png
