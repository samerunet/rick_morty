

user = {
    'username': '',
    'wallet': 0,
    'tools': 'teeth'
}

user['username'] = str(input("What is your name??  "))

print()
print(f"Welcome to Landscaper v3.5 {user['username']}")
print()

tool = [
    {'name': 'teeth', 'price': 0, 'earn': 1},
    {'name': 'rusty scissors', 'price': 5, 'earn': 5},
    {'name': 'push lawnmower', 'price': 25, 'earn': 50},
    {'name': 'battery powered lawnmower', 'price': 250, 'earn': 100},
    {'name': 'team of starving students', 'price': 500, 'earn': 250}
]

def dailyChoice():
    print()
    dailyChoice = str(input("Do you want to go sleep and work tomorrow or do you want to quit? "))
    print()
    if dailyChoice.upper() == 'YES' or "SLEEP":
        checkWallet()
        game()




def checkWallet():
    if user['wallet'] >= 1000 and user['tools'] == 'team of starving students':
        print()
        print('Game has finished, please wait until v5.0 will be released using Django')

    if user['wallet'] == 500 and user['tools'] == 'battery powered lawnmower':
        print()
        upgrade = str(input('Would you like to upgrade to a team of starving students? '))
        print()
       
        if  upgrade.upper() == 'YES':
            user['wallet'] -= tool[4]['price']
            user['tools'] = 'team of starving students'
            print("You have upgraded to Team of starving students")
            print()
    if user['wallet'] == 250 and user['tools'] == 'push lawnmower':
        upgrade = input('Would you like to upgrade to a battery powered lawnmower? ')
        print()
        if  upgrade.upper() == 'YES':
            user['wallet'] -= tool[3]['price']
            user['tools'] = 'battery powered lawnmower'
            print("You have upgraded to battery powered lawnmower")
            print()


    if user['wallet'] == 25 and user['tools'] == 'rusty scissors':
        upgrade = input('Would you like to upgrade to push lawnmower? ')
        print()
        if  upgrade.upper() == 'YES':
            user['wallet'] -= tool[2]['price']
            user['tools'] = 'push lawnmower'
            print("You have upgraded to push lawnmower")
            print()

    if user['wallet'] == 5 and user['tools'] == 'teeth':
        upgrade = input('Would you like to upgrade to rusty scissor? ')
        
        if upgrade.upper() == 'YES':
            user['wallet'] -= tool[1]['price']
            user['tools'] = 'rusty scissors'
            print("You have upgraded to rusty scissor")
            print()






def game():  
    if user['tools'] == 'team of starving students':
        user['wallet'] += tool[4]['earn']
        print('You team cut grass. Your balance is now: $' + str(user['wallet']))
        print()
        dailyChoice()
    if user['tools'] == 'battery powered lawnmower':
        user['wallet'] += tool[3]['earn']
        print('You used your battery powered lawnmower. Your balance is now: $' + str(user['wallet']))
        print()
        dailyChoice()
    if user['tools'] == 'push lawnmower':
        user['wallet'] += tool[2]['earn']
        print('You used your push lawnmower. Your balance is now: $' + str(user['wallet']))
        print()
        dailyChoice()
    if user['tools'] == 'rusty scissors':
        user['wallet'] += tool[1]['earn']
        print('You used your rusty scissors. Your balance is now: $' + str(user['wallet']))
        print()
        dailyChoice()

    if user['tools'] == 'teeth':
        user['wallet'] += tool[0]['earn']
        print()
        print('You used your teeth. Your balance is now: $' + str(user['wallet']))
        print()
        dailyChoice()


def initializeGame():
    userPicked = str(input("Would you like to start the game? "))
    
    if userPicked.upper() == str('YES'):
        game()
    else: return

initializeGame()