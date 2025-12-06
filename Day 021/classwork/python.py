# 0) კომენტარებით ჩამოწერეთ ყველა ნასწავლი ლისტის ფუნქცია(ძველიც და ახალიც) და მიუწერეთ ახსნა
# 1) შექმენით რიცხვების სია, ბოლოში ჩაამატეთ ახალი რიცხვი და ამოაკელით პირველი რიცხვი, 
# შემდეგ კი დაალაგეთ კლებადობის მიხედვით
# 2) შექმენით სია, ჩაამატეთ ამ სიის ბოლოს რაიმე მნიშვნელობა,
# შემდეგ ამ სიიდან წაშალეთ ყველაფერი და ჩაამატეთ რაიმე 3 მნიშვნელობა
# 0) 
print("len(sigrzes itvlis), append(amatebs elements), pop(amoshlis), sort(ganlagebit daprintavs), clear(mtlianad amoshlis lists), reverse(piriqit daprintavs lists), index(daprintavs elementis adgils), remove(amoshlis elements) da insert(chaamatebs elements nebismier adgilas)")

# 1)
numbers = [1, 2, 4, 8, 16, 32, 64]
numbers.append(128)
numbers.remove(1)
numbers.sort()
numbers.reverse()
print(numbers)

# 2)
names = ["Vaja","Dato","Nika","Gaga","Alex"]
names.append("Gio")
names.clear()
names.append("Lazare")
names.append("Tato")
names.append("Ilia")
print(names)