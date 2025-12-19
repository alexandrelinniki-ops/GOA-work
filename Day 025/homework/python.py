# 0) ჩამოწერეთ და ახსენით რას შვება დღეს ახსნილი 2 სტრინგის ფუნქცია
# 1) დაწერეთ რამდენი არგუმენტის მიღება შეუძლია range() და განიხილეთ ყველა
# 2) დაწერეთ შეიძლება თუ არა რომ for loopით გადავუაროთ listებს და stringებს? თუ კი მაშინ როგორ?
# 3) შექმენით სია, 
# შემდეგ ამ სიას გადაუარეთ for loopით და სხვა სიაში ჩაამატეთ მხოლოდ ისეთი ელემენტები,
# რომლებიც იწყება 'ა'ზე
# 4) მომხმარებელს შემოატანინეთ სახელი, 
# შემდეგ ამ სახელს გადაუარეთ for loopით და ყველა ასო დიდ ასოებად გადააქციეთ(.upper არ გამოიყენოთ)

# 0)
print("isupper gamoitans trues tu yvela aso didia da falses - sxva shemtxvevashi")
print("islower gamoitans trues tu yvela aso pataraa da falses - sxva shemtxvevashi")

# 1)
print("range() funqcias sheudzlia miiros 3 argumenti: 1 ricxvit(range(5)), 2 ricxvit(range(6,7)), 3 ricxvit(range(8,9,10))")

# 2)
print("ki, shegvidzlia")

name = "alexandre"
number = 5

for i in name:
    print(i)
for i in name:
    print(i)

# 3)
names = ["alex","lile","nao","levani","maia","vova","alley",]
names1 = []

for i in names:
    if i[0] == "a":
        names1.append(i)
print(names1)

# 4)
name = input("Enter your name: ")
name1 = ""

for i in name:
    name1 = name1 + i.upper()
print(name1)
