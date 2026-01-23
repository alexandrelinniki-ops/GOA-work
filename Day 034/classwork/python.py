# 0) კომენტარებით ახსენით რა არის განსხვავება tuples და listს შორის
# 1) შექმენით tuple სახელად info და შეინახეთ თქვენი ინფორმაცია(მაგ. ("Gurami", "Mentor", "GOA"))
# 2) შექმენით ფუბნქცია სახელად manual_count, რომელსაც გადაეცემა ლისთი და ელემენტი, 
# უნდა გამოიტანოს ელემენტების რაოდენობა ლისთში
# 3) შექმენით ფუნქცია სახელად manual_find, რომელსაც გადაეცემა ლისთი და ელემენტი, 
# უნდა გამოიტანოს ელემენტის ინდექსი ლისთში
# 4) შექმენით tuple ჩვენი ჯგუფის მოსწავლეებით, 
# გამოიყენეთ unpacking პირველი სტუდენტი შეინახოს ცვლადში Student1, 
# მეორე Student2ში ხოლო დანარჩენი ლისთში სახელად Others

# 0)
print("tuples-vis viyenebt prchxilebs () da aris immutable, xolo lististvis - kvadratul prchxilebs [] da aris mutable")

# 1)
info = ("Gurami", "Mentor", "GOA")

print(info)

# 2)
def manual_count(lst, element):
    count = 0
    for i in lst:
        if i == element:
            count += 1
    return count

print(manual_count(["Gurami","Gio","Alex"], "Gio"))

# 3)
def manual_find(lst, element):
    for i in range(len(lst)):
        if lst[i] == element:
            return i
    return -1

print(manual_find(["Gurami","Gio","Alex"], "Gio"))

# 4)
Group_names = ("Vaja","Sandro","Dato","Gaga","Nika","Alexandre","Lazare","Bacho")

Group_name1, Group_name2, *otherGroup_names = Group_names

print(Group_name1)
print(Group_name2)
print(otherGroup_names)
