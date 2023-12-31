# Python - динамический ЯП

# при статической дипизации мы должны указывать тип переменной
# int b = 10
# при повторном присвоении переменной b другого типа мы получим ошибку

# в Python можно присваивать значения разных типов одной и той же переменной
a = 'abc'
a = 10
print(a)  # 10
a = True
print(a)  # True
a = 'Bogdan'

# Нужно самому следить чтобы не было конфликтов в типах, например чтобы не присвоить переменной функции новое значение


# ================= ТИПЫ И СТРУКТУРЫ ДАННЫХ
# В PYTHON отсутствуют примитивные типы
# В python все обьекты.
# В python существуют изменяемые и не изменяемые обьекты. Например список можно изменять. Mutable - изменяемые обьекты. Immutable - неизменяемые обьекты

# ТИПЫ НЕИЗМЕНЯЕМЫХ ОБЕЬКТОВ:
# 1. string
# 2. boolean
# 3. int
# 4. float(число с десятичной точкой)
# 5. tuple (кортеж)
# 6. NoneType

# ТИПЫ ИЗМЕНЯМЫХ ОБЬЕКТОВ
# 1. list
# 2. dict
# 3. set (набор) (отличается от листа что в наборе могут быть только уникальные элементы)
# 4. user-defined classes (пользовательские классы)


# ==== Переменные и обьекты
# переменная - это ссылка на обьект в памяти


# встроенная функция ID - позволяет получить уникальный ID обьекта который указывает на адресс обьекта в памяти
print(id(a))  # 2918519232944

my_name = 'Dima'
your_name = my_name
print(id(my_name))
print(id(your_name))
myID = id(my_name)
yourID = id(your_name)
print(myID == yourID)  # True