from turtle import *

#we want to paint a house

#step 1: draw a square

width(7)
color("blue")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door

forward(70)
left(90)
color("yellow")
forward(100)
right(90)

forward(60)
right(90)

forward(100)

penup()
goto(200, 200)
pendown()

color("red")
right(135)

forward(140)
left(90)

forward(140)

penup()
goto(150,150)
pendown()

color("cyan")
left(45)

forward(50)
left(90)

forward(50)
left(90)

forward(50)
left(90)

forward(50)

penup()
goto(50,150)
pendown()

forward(50)
left(90)

forward(50)
left(90)

forward(50)
left(90)

forward(50)


exitonclick()