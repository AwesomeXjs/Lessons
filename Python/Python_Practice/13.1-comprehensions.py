my_motorbike = {
    'brand': 'bmw',
    'country': 'germany',
    'owner': 'bogdan'
}

bike = {k: v.upper() for k, v in my_motorbike.items()}

print(bike)
print(my_motorbike)
