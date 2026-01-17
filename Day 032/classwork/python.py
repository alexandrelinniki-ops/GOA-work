# 0)
def is_divisible(n,x,y):
    return n % x == 0 and n % y == 0

# 1)
def better_than_average(class_points, your_points):
    average = sum(class_points) / len(class_points)
    return your_points > average

