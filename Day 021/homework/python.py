# 0) კომენტარების დახმარებით დაწვრილებით ახსენით დღეს ნასწავლი ლისტის ფუნქციები
# 1) შექმენით სია, შემდეგ ამ სიის პირველი ელემენტი ჩაამატეთ ბოლოში.
# ხოლო საბოლოოდ დაგრჩებათ რომ გაქვთ 2 ერთნაირი ელემენტი, ამის გამო ამოშალეთ პირველი ელემენტი
# 2) ჩვენ გვჭირდება რომ გამოვიყენოთ იგივე სიის სახელი რაც გამოვიყენეთ წინა სავარჯიშოში, 
# ამიტომაც წინა სავარჯიშოს სია მთლიანად გავწმინდოთ, 
# შემდეგ ჩაამატეთ 2 ელემენტი და საბოლოოდ ამ 2 ელემენტს შორის კიდევ 1 ელემენტი
# 3) შექმენით რიცხვების სია.
# თუ ამ სიაში რიცხვი 10 არის მეხუთე ინდექსზე მაშინ ამ სიის ბოლო ელემენტი ამოშალეთ
# ხოლო თუ ამ სიაში რიცხვი 10 არ არის მეხუთე ინდექსზე,
# მაშინ ამ სიის მეხუთე ენდექსზე ჩაამატეთ რიცხვი 10
# 4) შექმენით სია და თქვენი იდეებით ეცადეთ რომ გამოიტენოთ ყველა ნასწავლი სიის ფუნქცია(სულ 9 ცალი გვაქვს ნასწავლი)

# 0)
print("len(sigrzes itvlis), append(amatebs elements), pop(amoshlis), sort(ganlagebit daprintavs), clear(mtlianad amoshlis lists), reverse(piriqit daprintavs lists), index(daprintavs elementis adgils), remove(amoshlis elements) da insert(chaamatebs elements nebismier adgilas)")

# 1)
numbers = [1,2,4,8,16,32,64]
numbers.append(1)
numbers.remove(1)
print(numbers)

# 2)
numbers = [1,2,4,8,16,32,64]
numbers.clear()
numbers.append(1)
numbers.append(2)
numbers.insert(1, 4)
print(numbers)

# 3)
numbers = [1,2,3,4,5,6,7,8,9,10]
if numbers[4] == 10:
    numbers.pop(9)
    print(numbers)
elif numbers[4] != 10:
    numbers.insert(4, 10)
    print(numbers)

# 4)
numbers = [3,5,7,10,20,15,13,21,60,70,67,89]
numbers.append(100)
numbers.pop(4)
numbers.sort()
numbers.reverse()
numbers.remove(13)
numbers.clear()
numbers.insert(0, 6789)
print(len(numbers))
print(numbers.index(6789))