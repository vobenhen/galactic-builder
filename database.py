#Data base file
#So far the script can only read from this file and not update it. That will have to change...


#No formulas in here!!! Cheeky cheeky!

class person ():
    def __init__(self):
        #General
        self.name = ""
        self.id = 0
        self.money = 0
        self.netWorth = 0
        self.salary = 0
        self.income = 0
        self.expenses = 0
        self.netIncome = 0

        #Farms
        self.numberFarms = 0
        self.farmLevel = 1
        self.foodProduced = 0
