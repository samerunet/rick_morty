#  a = "hello"
# print(a) ##print the value of the variable 'a'

# a = str(1) #a = "1"
# b = int("5") #b = 5
# c = float(4) #c = 4.0
# d = int(5.7) #d = 5

# a = 1
# b = a + 1 #b = 2
# c = b * 3 #c = 6
# d = c - 1 #d = 5
# e = d / 2 #e = 2.5
# f = d ** 2 #exponent: f = 25

# a = "first string"
# b = "second string"
# c = a + " " + b

# a = [1, 5, "some string", True, 5.6]

# a = [
#     [1, 2, 3], #first row
#     [4, 5, 6], #second row
#     [7, 8, 9], #third row
#     [10] #fourth row
# ]

# a = [1, 5, "some string", True, 5.6]
# print(a[0]) #1
# print(a[1]) #5
# print(a[4]) #5.6

# a = [
#     {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
#     },
#     [4, 5, 6],
#     [7, 8, 9],
#     [10]
# ]
# print(a)

# b = {
#   "firstGrade": ["Bobby", "Kyle", "Suzy"],
#   "secondGrade": ["Jennifer", "Jasmine", "Javier"],
#   "thirdGrade": "Nobody, they all failed last year!"
# }
# print(b)

# a = 22
# if a < 10:
#     print("a is less than 10")
# elif a == 10:
#     print("a is 10")
# else:
#     print("a is greater than 10")


# a = 'oh hai!'
# if a == 'oh hai!':
#     print('this works')

# a = 1
# b = 2
# if a == 1 and b == 2:
#   print('y') # will print only when both a==1 AND b==2
# else:
#   print('n') # will print if either condition is false

# if a == 0 and b == 2:
#   print('y') # will print only when both a==1 AND b==2
# else:
#   print('n') # will print if either condition is false

# a = 2
# b = 2
# if a == 1 or b == 2:
#   print('y') # will print when either a==1 OR b==2
# else:
#   print('n') # will print if both conditions are false

# if a == 1 or b == 1:
#   print('y') # will print when either a==1 OR b==2
# else:
#   print('n') # will print if both conditions are false



# user_input = input("Please enter your name: ")
# print("Hello, " + user_input + "!")

# a = 10
# while a < 20:
#     print("the value of a is currently: " + str(a))
#     a += 1

# foods = ['hot dogs', 'beer', 'bald eagles']
# for food in foods:
#     print(food)

# for x in range(0, 3):
#   print(x)


# def greet():
#   print('hi')

# greet()

# def greet(name):
#   print('hi, ' + name)

# greet('bob')


# def add(value1, value2):
#   return value1 + value2

# print(add(1,3))

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

#   def greet(self):
#     print("Hello, my name is " + self.name + ". My age is " + str(self.age))

# me = Person("Hunter", 29)
# me.greet()
# sally = Person("Sally", 53)
# sally.greet()

# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def greet(self):
#         print("Hello, my name is " + self.name + ". My age is " + str(self.age))

#     def work(self):
#         print("Boring...")

# class SuperHero(Person): # tell it to inherit from Person
#     def __init__(self, name, age, powers):
#         super().__init__(name,age) # call Person's __init__()
#         self.powers = powers

#     def greet(self):
#         super().greet() # call Person's greet()
#         self.listPowers()

#     def listPowers(self):
#         for power in self.powers:
#             print(power)

#     def work(self): # override Person's work()
#         print("To action!")

# superman = SuperHero('Clark Kent', 200, ['flight', 'strength', 'invulnerability'])

# superman.greet()
# superman.work()


# class Car:
#     def __init__(self, maker, model, serial):
#         self.maker = maker
#         self.model = model
#         self.serial = serial

# class CarFactory:
#     def __init__(self, name):
#         self.name = name
#         self.cars = []

#     def makeCar(self, model):
#         self.cars.append(Car(self.name, model, len(self.cars)))

#     def listCars(self):
#         for car in self.cars:
#             print(car.maker + " " + car.model + " serial#: " + str(car.serial))

#     def findCar(self, serial):
#         for car in self.cars:
#             if(car.serial == serial):
#                 return car

# toyota = CarFactory('Toyota')
# toyota.makeCar('Prius')
# toyota.makeCar('Rav 4')
# toyota.listCars()
# print(toyota.findCar(1).model)
