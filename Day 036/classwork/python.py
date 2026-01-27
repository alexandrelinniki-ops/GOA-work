# 0) კომენტარებით ახსენით რა არის განსხვავება set და list შორის
# 1) შექმენით setი, რომელშიც შეინახავთ თქვენს სასურველ რიცხვებს, 
# შემდეგ გამოიყენეთ .add და .remove ფუნქცია
# 2) შექმენით dictionary რომელშიც შენახავთ თქვენს შესახებ ინფორმაციას
# 3) ჩამოწერეთ ყველა ნასწავლი ფუნქცია და ახსენით რას აკეთებენ ისინი

# 0)
print("set aris daulagebeli, amitom ar shegvidzlia slicing an index gamoviyenot")
print("list ki aris dalagebuli, amitom shegvidzlia slicing da index gamoviyenot")

# 1)
Set_arr = {1,2,3,4,5,6,7,10}

Set_arr.add(8)
Set_arr.remove(10)

print(Set_arr)

# 2)
Goal_Oriented_Academy = {
    "Mentor": "Gurami",
    "Mentor's asistans": "Gio",
    "My name": "Alexandre"
}

print(Goal_Oriented_Academy)

# 3)
#.keys() abrunebs dictionary-is yvela gasarebs.
#.values() abrunebs dictionary-is yvela mnishvnelobas.
#.get() gadaecema argumentad gasarebi da gvibrunebs shesabamis mnishvnelobas.
#.item() abrunebs dictionary-is yvela wyvils(key-value) tubled.