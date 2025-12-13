# 0) ჩამოწერეთ და ახსენით ყველა დღეს ნასწავლი ლისტის ფუნქცია
# 1) ჩამოწერეთ და ახსენით ყველა დღეს ნასწავლი სტრინგის ფუნქცია
# 2) მომხმარებელს შემოატანინეთ თავისი სახელი და გვარი(ერთ ინფუთში) და დააბრუნეთ ისე,
# რომ სახელიც და გვარიც დიდი ასოთი იწყებოდეს
# 3) შექმენით რიცხვების სია, შემდეგ შექმენით ახალი ცვლადი და მასში შეინახეთ ამ სიის დიაპაროზი
# (დიაპაზონი არის უდიდესს გამოკლებული უმცირესი)

# Hard level
# 4)მომხმარებელს შემოატანინეთ სახელი. თუ ეს სახელი უკვე დიდი ასოთი იწყება, 
# მაშინ მთლიანი სახელი გადააქციეთ დიდ ასოებად და დაპრინტეთ, 
# ხოლო თუ პირველი ასო არ არის დიდი, მაშინ გახადეთ იგი დიდი ასო და დააბრუნეთ

# 0) 
print("sum(gamoitans ricxvebis jams),min(abrunebs yvelaze patara ricxvs),max(abrunebs yvelaze did ricxvs),sorted(igivea rogorc sort, magram qmnis axal sias),copy(aketebs siis asls)")

# 1)
print("upper(stringis asoebs adidebs),lower(stringis asoebs apataravebs),capitalize(aqcevs pirvel asos didad, xolo sxvebs patarad),title(igivea rogorc capitalize, magram moqmedebs bevr sityvebtanac),find(stringshi ipovis gadacemul asos),count(itvlis ramdenjeraa ganmeorebuli gadacemuli argumenti stringshi),replace(stingshi shecvlis raime mnishvnelobas),swapcase(gadaaqcevs yvela asos mopirdapire casead)")

# 2)
namelastname = input("Enter your name and lastname: ")

print(namelastname.title())

# 3)
numbers = [1,2,3,4,5,6,7,8]

numbers1 = [max(numbers) - min(numbers)]

print(numbers1)

# 4)
name = input("Enter your name: ")

if name[0] == name[0].upper():
    print(name.upper())
elif name[0] != name[0].upper():
    print(name.capitalize())
