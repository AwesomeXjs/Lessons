# Копирование списков
my_cars = ['Audi', 'BMW']
# Копирование по ссылке
copy_of_cars = my_cars
copy_of_cars.append('Toyota')
# При таком копировании списка мутируется изначальный список
print(my_cars)
print(id(my_cars) == id(copy_of_cars))  # True


# Копирование не по ссылке
# ----------- ВАРИАНТ 1 (SLICE)
# Можно использовать "обрезание"(slice) списка но без указывания рейнджа обрезки
copy_of_cars_two = my_cars[:]
my_cars.append('Yo')
print(copy_of_cars_two)  # ['Audi', 'BMW', 'Toyota']
print(my_cars)  # ['Audi', 'BMW', 'Toyota', 'Yo']


# ----------- ВАРИАНТ 2 (copy)
# Копирование с помощью метода списка copy()
copy_of_cats_three = my_cars.copy()
my_cars.append('lol')
print(copy_of_cats_three)  # ['Audi', 'BMW', 'Toyota', 'Yo']
print(my_cars)  # ['Audi', 'BMW', 'Toyota', 'Yo', 'lol']
print(id(copy_of_cats_three) == id(my_cars))  # False

# ------------- ВАРИАНТ 3 (list)
# Копирование с помощью встроенной функции list
copy_of_cars_four = list(my_cars)
my_cars.append('another car')
print(copy_of_cars_four)  # ['Audi', 'BMW', 'Toyota', 'Yo', 'lol']
print(my_cars)  # ['Audi', 'BMW', 'Toyota', 'Yo', 'lol', 'another car']
