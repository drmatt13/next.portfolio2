from os import listdir
from os.path import isfile, join

apps = listdir('./apps')
notes = listdir('./cards')
cards = []
for x in notes:
    cards.append(listdir('./cards/' + str(x)))
