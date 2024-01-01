# Словарь - набор элементов ключ:значение

my_motorbike = {
    'brand': 'Ducati',
    'price': 25000,
    'engine_vol': 1.2,
}

# Порядок элементов в словаре не имеет значения

your_motorbike = {
    'price': 25000,
    'engine_vol': 1.2,
    'brand': 'Ducati',
}

print(my_motorbike == your_motorbike)  # True

# Получение значения ключа
print(my_motorbike['brand'])  # Ducati
print(your_motorbike['engine_vol'])  # 1.2

# Изменение значения ключа
my_motorbike['brand'] = 'Toyota'
print(my_motorbike['brand'])  # Toyota

# Добавление ключа в словарь
my_motorbike['is_new'] = True
# {'brand': 'Toyota', 'price': 25000, 'engine_vol': 1.2, 'is_new': True}
print(my_motorbike)

# Для удаления элементов служит оператор del

del my_motorbike['is_new']
print(my_motorbike)  # {'brand': 'Toyota', 'price': 25000, 'engine_vol': 1.2}


# ---- ИСПОЛЬЗОВАНИЕ ПЕРЕМЕННЫХ В СЛОВАРЯХ
# просто вносим название ключа в переменную и получаем доступ к ключу через переменную
key_name = 'brand'
print(my_motorbike[key_name])  # Toyota

new_brand = 'BWM'
another_brand = 'new_brand'
my_motorbike[another_brand] = new_brand
print(my_motorbike)  # Добавили ключ 'new_brand': 'BWM'


# Можно хранить словари в словарях
my_motorbike['another_dict'] = {
    'my_name': 'Dima'
}
print(my_motorbike['another_dict']['my_name'])  # Dima


# Длину словаря можно получить с помощью len
print(len(my_motorbike))  # 5
del my_motorbike['brand']
print(len(my_motorbike))  # 4


# ---------------- МЕТОД GET.
# GET самый предпочтительный метод получения ключа в словаре. Во избежания ошибок как показано на примере ниже
# print(my_motorbike['model'])  # KeyError: 'model'
# при обращении через get ошибки не будет а метод вернет просто None
print(my_motorbike.get('model'))  # None
# Можно указать второй параметр в методе get, тогда при отсутствии ключа метод get вернет второй параметр (параметр по умолчанию)
print(my_motorbike.get('model', 'Audi'))  # 'Audi'
print(my_motorbike.get('price', 20))  # 25000
