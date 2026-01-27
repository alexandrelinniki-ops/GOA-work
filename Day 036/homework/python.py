# 0) ახსენით რა განსხვავებაა listსა და setს შორის

# 1) ჩამოწერეთ და ახსენით setის ფუნქციები

# 2) რა არის dictionary?

# 3) ჩამოოწერეთ და ახსენით dictionaryს ფუნქციები

# 4) შექმენით set და dictionary, შემდეგ კი გამოიყენეთ მათზე 2-2 ნებისმიერი ფუნქცია

# 0)
print("set aris daulagebeli, amitom ar shegvidzlia gamoviyenot index da slicing. dublikat elementebs ar sheidzleba sheicavdes.")
print("list ki shegvidzlia index da slicing gamoviyenot, radgan aris dalagebuli. dublikat elementebs sheidzleba sheicavdes.")

# 1)
# .add() - amatebs elements setis boloshi
# .remove() - amoslis frchxilebshi mititebul elements setidan 
# .clear() - amoshlis yvela elements setidan
# .union() - aertianebs setebs
# .difference() - gamoitans mxolod im elementebs, romelic mxolod pirvel setshia da ara meoreshi

# 2)
print("dictionary aris ert-erti monacemta tipi, romelic inaxavs informacias cyvilebad (key, value)")

# 3)
#.keys() abrunebs dictionary-is yvela gasarebs.
#.values() abrunebs dictionary-is yvela mnishvnelobas.
#.get() gadaecema argumentad gasarebi da gvibrunebs shesabamis mnishvnelobas.
#.item() abrunebs dictionary-is yvela wyvils(key-value) tubled.

# 4)
set = {1,2,4,8,16,10}
set.add(32)
set.remove(1)

print(set)

Me = {
    "Firstname": "Alexandre",
    "Lastname": "Linniki",
    "age": 13,
    "grade": 7
}

print(Me.keys())
print(Me.values())
