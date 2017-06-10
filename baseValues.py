#Stores base values like farm values and upgrade cost

#No formulas in here!

class basic ():
    def __init__(self):
        #Mines
        #self.steelMineValue = 1341
        #self.noobMineValue = 985
        self.mineValues = {
        	'steel' : 100,
        	'hydrogen' : 50,
        	'titanium' : 250,
            'yellow crystal': 1000,
            'white crystal': 500,
            'diamond': 750,
            'silicon': 50,
            'copper': 100,
            'noobidium': 1,
            'helium': 100
        }

        self.factoryValues = {
            'Car' : 30000, #10 steel, 1 silicon,
            'xPhone' : 1000, #2 titianium, 1 copper, 2 silicon (Possible weapon license)
            'AppyLyinx' : 10000, #5 titianium, 3 copper, 3 silicon, 1 noobidium
            'Toilet' : 50, #10 noobidium
            'Pii Fighter' : 100000, #50 steel, 20 titianium, 10 hydrogen, 1 white crystal, weapon lisence core, fighter license
            '4d Printer' : 200000 #10 steel, 10 copper, 10 silicon, 1 white crystal, 1 yellow crystal
        }
        
        self.j10exs = {
        	'name' : 'J-10 Explorer Series',
        	'desc' : 'This ship is the peak of Benion engineering Being 5.3km long it is the largest ship in the galaxy. This Ship was designed to take out any opposing fleet that went against them and so they added a long range weapon put hungers on it and also put a range of long range weapons on the hull. The only problem is that it is extremely slow.',
        	'cost' : 40000000000,
        	'class' : 'Super Weapon'
        }
        
        self.j9exs = {
        	'name' : 'J-9 Explorer Series',
        	'desc' : 'The most expensive tank there is in the Explorer Series often used as command ships.',
        	'class' : 'tank',
        	'cost' : 20000000000
        }
        
        self.j8exs = {
        	'name' : 'J-8 Explorer Series',
        	'desc' : 'Basically the J-9 Explorer tank but with half health.',
        	'cost' : 1000000000,
        	'class' : 'tank'
        }
        
        self.j7exs = {
        	'name' : 'J-7 Explorer Series',
        	'desc' : 'J-7 is a ship that carries lots of ships and brings them to combat.',
        	'cost' : 500000000,
        	'class' : 'fighter carrier'
        }
        
        self.j6exs = {
        	'name' : 'J-6 Explorer Series',
        	'desc' : 'Long range gun ship designed to take out ememy tanks.',
        	'cost' : 250000000,
        	'class' : 'anti tank'
        }
        
        self.shipDesc = {
        	'j10exs' : self.j10exs,
        	'j9exs' : self.j9exs,
        	'j8exs' : self.j8exs,
        	'j7exs' : self.j7exs,
        	'j6exs' : self.j6exs
        } #This ship is the peak of Benion engineering Being 5.3km long it is the largest ship in the galaxy. This Ship was designed to take out any opposing fleet that went against them and so they added a long range weapon put hungers on it and also put a range of long range weapons on the hull. The only problem is that it is extremely slow.

        self.factoryRecipies = {
            'Car'    :  {
                'steel' : 10,
                'silicon' : 1
            },

            'xPhone' : {
                'titanium' : 2,
                'copper' : 1,
                'silicon' : 2
            },

            'AppyLyinx' : {
                'titanium' : 10,
                'copper' : 8,
                'silicon' : 8,
                'noobidium' : 5
            },

            'Toilet' : {
                'noobidium' : 10
            },

            'Pii Fighter' : {
                'steel' : 200,
                'titanium' : 100,
                'hydrogen' : 20,
                'white crystal' : 1
            },

            '4d Printer' : {
                'steel' : 10,
                'copper' : 10,
                'silicon' : 10,
                'white crystal' : 2,
                'yellow crystal' : 1
            }

        }

        #Farms
        self.population = 200
