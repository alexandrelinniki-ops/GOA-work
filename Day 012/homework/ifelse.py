print("if aris qiwordi, romelic tus nishnavs da shegvidzlia chavwerot informcia, romelicaa True an False")
print("elif aris qivordi, romelic else ifs nishnavs da shegvidzlia chavwerot nebismieri informacia")
print("else aris qivordi, romelic sxva rames nishnavs da iwereba ifis gansxvavebit sxva informacia")

print("gamoiyeneba, roca erti pirobaa")
print("gamoiyeneba, roca ramdenime gansxvavebul pirobis shemowmebaa")

print("break infinite loops taviseburad acherebs, anu tu True aris piroba, mxolod ertxel gamoitans prints, tu False - ar gamoitans prints")

age = int(input("Enter your age:"))

if age < 13:
    print("child")
elif age < 20:
    print("teenager")
else:
    print("adult")

score = int(input("Enter your score:"))

if score >= 90 and score <= 100:
    print("A")
elif score >= 80 and score <= 89:
    print("B")
elif score >= 70 and score <= 79:
    print("C")
elif score >= 60 and score <= 69:
    print("D")
else:
    print ("F")