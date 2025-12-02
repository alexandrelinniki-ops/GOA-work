print("finqcia aris elementis bloki, romelic shegvidzlia gamoviyenot elementebis raodenobashi, damatebashi, amoshlashi da sxvebshi")

print("len, append da pop aris listis funqciebi")
print("len aris funqcia, romelic gamoiyeneba elementebis raodenobashi")
print(".append aris funqcia, romelic gamoiyeneba elementis/elementebis damatebashi")
print(".pop aris funqcia, romelic gamoiyeneba elementis/elementebis amoshlashi")

numbers = [1, 2, 3, 4, 5]

print(numbers[::-1])

names = ["Alex","Vaja","Daviti","Ilia"]

names.pop(-1)
names.append("Lazare")

print(names)

colors = ["red","yellow","blue","orange","green","purple"]

if len(colors) > 4:
    colors.append("Magenta")
elif len(colors) < 4:
    colors.pop(-1)

print(colors)

fruits = ["apple","orange","banana","watermelon"]

fruit = input("Enter your favourite fruit:")

if fruit == "apple":
    fruits.pop(0)
    print(fruits)
elif fruit == "orange":
    fruits.pop(1)
    print(fruits)
elif fruit == "banana":
    fruits.pop(2)
    print(fruits)
elif fruit == "watermelon":
    fruits.pop(3)
    print(fruits)
else:
    fruits.append(fruit)
    print(fruits)