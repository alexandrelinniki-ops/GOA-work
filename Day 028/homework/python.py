# 1)https://www.codewars.com/kata/59441520102eaa25260000bf

# 2)https://www.codewars.com/kata/5a023c426975981341000014

# 3)https://www.codewars.com/kata/5ab6538b379d20ad880000ab

# 4)https://www.codewars.com/kata/583710ccaa6717322c000105

# 1) დაწერეთ ფუნქცია, რომელიც ყოველთვის 5-ს აბრუნებს
# მარტივად ჟღერს, არა? უბრალოდ გაითვალისწინეთ, რომ შემდეგი სიმბოლოებიდან არცერთის გამოყენება არ შეგიძლიათ: 0123456789*+-/
# წარმატებებს გისურვებთ :)

def five():
    return len("abcde")
print(five())

# 2) მოცემულია სამკუთხედის ორი შიდა კუთხე (გრადუსებში).
# დაწერეთ ფუნქცია, რომელიც დააბრუნებს მესამე რიცხვს.
# შენიშვნა: შემოწმდება მხოლოდ დადებითი მთელი რიცხვები.

def third_angle(a, b):
    return 180 - (a + b)
print(third_angle(60, 60))
print(third_angle(80, 40))
print(third_angle(70, 30))

# 3) მოცემულია ოთხკუთხა პოლიგონის სიგრძე და სიგანე. 
# პოლიგონი შეიძლება იყოს მართკუთხედი ან კვადრატი.
# თუ ის კვადრატია, დააბრუნეთ მისი ფართობი. თუ ის მართკუთხედია, დააბრუნეთ მისი პერიმეტრი.

def polygon(width, lenght):
    if width == lenght:
        return width * lenght
    else:
        return (width + lenght) * 2
print(polygon(60, 60))
print(polygon(50, 40))
print(polygon(20, 60))

# 4) ეს კატა ეხება მოცემული რიცხვის რვაზე გამრავლებას, 
# თუ ის ლუწი რიცხვია, და ცხრაზე, წინააღმდეგ შემთხვევაში.

def kata(num1):
    if num1 % 2 == 0 and num1 % 9 == 0:
        return num1 * 8
    else:
        return num1
print(kata(12))
print(kata(27))
print(kata(18))
print(kata(5))

