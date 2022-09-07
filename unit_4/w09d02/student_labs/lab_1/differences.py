# 1 

# name = input("what is your name? ")

# def getName():
#     print(name)

# getName()

#2 

# def reverseIt(): 
#     string = "a man, a plan, a canal, frenemies"
#     reverse = string[::-1]
#     print(reverse)

# reverseIt()

# 3

# def swapEm():
#     a = 10
#     b = 30
#     temp = 0

#     temp = b 
#     b = a
#     a = temp
#     print(f"a is now  {a} ", f"and b is now  {b}")

# swapEm()

# 4 
# list = [2, 6]
# def multiplyArray (ls):
#     total = 1
#     for item in ls:
#             total *= item
#     print(total)

# multiplyArray(list)

# array = [1,2,3,4,5,6]
# def multiplyArray():
#     if len(array) == 0:
#         return 1
#     total = 0
#     for item in array:
#         total += item
#     print(total)

# multiplyArray()







# 5 
# num = 30
# def fizzbuzz ():
#     if num % 3 == 0 and num % 5 == 0:
#         print("fizzbuzz");
#     elif num % 3 ==0:
#         print("fizz")
#     elif num % 5 == 0:
#         print("buzz");
#     else:
#         print("archer");

# fizzbuzz()



# 6 

# def fib(number):
#     if number <= 1:
#         return number
#     return fib(number - 1) + fib(number - 2) 


# number = int(input("which fibonacci number do you want?"))
# print( fib(number), 'is the fibonacci number at position', number)





#7

# array = [1,2,3,4,5,6,7,8]
# def searchArray(value):
   
#     for x in array:
#         if x == value:
#           return True  
#         else:
#             return x - 1
    

# searchArray(5)

toCheck = str(input("Enter word to check for Palindrome"))
def isPalindrome():
    check = ""
    check == toCheck[::-1]
    if toCheck == check:
        print("yes")
    else:
        print("no")

isPalindrome()


