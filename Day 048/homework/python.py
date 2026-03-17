# 1) დაწერე ფუნქცია, რომელიც იღებს სტრინგს და აბრუნებს ახალ სტრინგს, სადაც ყველა მეორე სიმბოლო დიდ ასოდ არის გადაყვანილი
# 2) შექმენი ფუნქცია, რომელიც იღებს რიცხვების სიას და აბრუნებს ახალ სიას, სადაც თითოეული ელემენტი გამრავლებულია თავის ინდექსზე
# 3) დაწერე ფუნქცია, რომელიც იღებს სიას და აბრუნებს მხოლოდ იმ ელემენტებს, რომლებიც მარცხენა და მარჯვენა მეზობელზე დიდია
# 4) შექმენი ფუნქცია, რომელიც იღებს სტრინგს და აბრუნებს dictionary-ს, სადაც გასაღები არის სიტყვა, ხოლო მნიშვნელობა — ამ სიტყვის სიგრძე
# 5) დაწერე ფუნქცია, რომელიც იღებს რიცხვს n და აბრუნებს სიას, სადაც არის ყველა რიცხვი 1-დან n-მდე, მაგრამ 3-ის ჯერადები ჩანაცვლებულია სიტყვით "Three"

# 1)
def newstring(s):
    result = ""
    for i in range(len(s)):
        if i % 2 == 1: 
            result += s[i].upper()
        else:
            result += s[i]
    return result

# 2)
def multiply_by_index(lst):
    result = []
    for i in range(len(lst)):
        result.append(lst[i] * i)
    return result

# 3)
def bigger_than_neighbors(lst):
    result = []
    for i in range(1, len(lst) - 1):  
        if lst[i] > lst[i - 1] and lst[i] > lst[i + 1]:
            result.append(lst[i])
    return result

# 4)
def word_lengths(text):
    words = text.split()
    result = {}
    for word in words:
        result[word] = len(word)
    return result

# 5)
def replace_multiples_of_three(n):
    result = []
    for i in range(1, n + 1):
        if i % 3 == 0:
            result.append("Three")
        else:
            result.append(i)
    return result
