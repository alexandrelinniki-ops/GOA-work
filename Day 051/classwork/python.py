# 1) ახსენით რას აკეთებენ map და filter და რა განსხვავებაა მათ შორის
# 2) გაფილტრეთ numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] სია და შეინახეთ მხოლოდ კენტი რიცხვები 
# 3) map-ით გადაუარეთ numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] სიას და გამოიტანეთ ყველა რიცხვის კვადრატი
# 4) შექმენით სახელების სია და filter-ით შეინახეთ მხოლოდ ის სახელები რომლებიც იწყება ა ასოთი
# 5) შექმენით ფუნქცია food_ranking რომელსაც გადაეცემა ერთი default არგუმენტი (category) და არგსები (საჭმელები), 
# ასევე ჰქონდეს counter და გამოიტანოს შედეგი ასეთი ფორმატით
# (default): (counter) (args)
# მაგალითად -- food: 1 khinkali ....
# 6) შექმენით ფუნქცია car_builder გადაეცით არგუმენტი kwargs სახით დაპრინტეთ შედეგი ასეთი ფორმატით
# (key): (value)
 
# 1)
# map და filter ორივე არის ფუნქციები, რომლებიც გამოიყენება სიებთან მუშაობისას Python-ში. 
# ისინი გვეხმარება სიაში არსებული ელემენტების დამუშავებაში.
# map → ცვლის ელემენტებს
# filter → არჩევს ელემენტებს პირობის მიხედვით

# 2)
numbers = [1,2,3,4,5,6,7,8,9]
result  = []

result = list(filter(lambda x: x % 2 != 0, numbers))

print(result)

# 3)
nums = [1,2,3,4,5,6,7,8,9]
results = []

squares = list(map(lambda x: x**2, nums))

print(squares)

# 4)
names = ["Alexandre","Vaja","Sandro","Gaga","Nika","Lazare","Andria","Dato"]
eis = []

eis = list(filter(lambda x: x[0] == "A", names))

print(eis)

# 5)
def food_ranking(category, *foods):
    counter = 1
    
    for food in foods:
        print(f"{category}: {counter} {food}")
        counter += 1


food_ranking("food", "khinkali", "shawrma", "pizza")

# 6)
def car_builder(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

car_builder(brand="BMW", model="M5", color="black", popular=True)