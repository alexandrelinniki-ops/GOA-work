# 0) ჩამოწერეთ ყველა ნასწავლი string ფუნქციები
# 1) მომხმარებელს შემოატანინეთ თავისი სახელი, 
# შესაძლოა რომ მომხმარებელმა თავისი სახელი დაწერა არასწორად
# (თავისი სახელი არ იწყება დიდი ასოთი და როგორც ვიცით ყველა სახელი დიდი ასოთი იწყება), 
# ამიტომაც შეუსწორეთ და ისე დააბრუნეთ
# 2) ჩამოწერეთ დღეს ნასწავლი list ფუნქციები
# 3) მომხმარებელს შემოატანინეთ თავისი სახელი, მეგობარი1ის სახელი და მეგობარი2ის სახელი,
# შემდეგ ეს სახელები შეასწორეთ(ისე როგორც წინა საკლასოში), 
# შემდეგ ეს გასწორებული სახელები ჩაამატეთ სიაში, 
# საბოლოოდ კი შექმენით ახალი დასორტირებული სია და დაპრინტეთ

# 0)
print("len(sigrzes itvlis), append(amatebs elements), pop(amoshlis), sort(ganlagebit daprintavs), clear(mtlianad amoshlis lists), reverse(piriqit daprintavs lists), index(daprintavs elementis adgils), remove(amoshlis elements), insert(chaamatebs elements nebismier adgilas), upper(aqcevs strings didi asoebad), lower(aqcevs strings patara asoebad), capitalize(aqcevs mxolod pirvel asos didad, danarchens asoebs - patarad), title(aqcevs yovel sityvebs ese, rogorc capitalize), find(poulobs stringshi imas, rasac gadavcemt), count(itvlis tu ramdenjeraa gameorebuli stringshi gadacemuli argumenti), replace(stringshi shecvlis raime mnishvnelobas), swapcase(aqcevs yvela asos mopirdapire casead)")

# 1)
name = input("Enter your name: ")

print(name.capitalize())

# 2)
print("sum(gamoitans ricxvebis jams),min(gamoitans yvelaze mcires),max(gamoitans yvelaze dids),sorted(igivea rogorc .sort, ubralod qmnis axal sias),copy(akopirebs siis asos)")

# 3)
name1 = input("Enter your name: ")

name2 = input("Enter your friend's name: ")

name3 = input("Enter your other friend's name: ")

correct1 = name1.capitalize()
correct2 = name2.capitalize()
correct3 = name3.capitalize()

names = [correct1,correct2,correct3]

names1 = sorted(names)

print(names1)