# Пример встроенной функции
print("Hello python")
# То что находится между скобками - аргумент функции

# С помощью ключевого слова def можно создавать свои функции


def my_fn(a, b):
    c = a + b
    return c


myName = my_fn(1, 2)
print(myName)

# Примеры всстроенных функций:
# вывести в консоль:
print()

# type() - используется для получения типа обьекта как typeof в js
print(type(myName))
# class int


# id() - возвращает уникальный id переданного ей обьекта. Этот id является адресом в памяти по которому расположен этот обьект
print(id(myName))
# 140704180914680

# len() - возвращает количество элементов в обьекте
print(len('Dima'))
# 4


# sum() - возвращает сумму элементов последовательности (можно задать старт)
x = [1, 5, 6, 2]
print(sum(x, 20))
# 34
u = [1, 7]
print(sum(u))
# 8

# с помощью инпута можно попросить пользователя ввести что то в консоль:
# дойдя до этой строки python остановит выполнение кода до тех пор пока пользователь не введет данные в поле и не нажмет Enter. После этого значение которого пользователь ввел присвоится переменной
# name = input("Enter your name: ")
# print(name.upper())
# print(dir(name))


# round() - используется для округления до ближайшего числа которое задал пользователь, если такое число не задано то округляется до ближайшего целого
a = 21.331
print(round(a))
# 21
print(round(a, 1))
# 21.3

# min() - находит минимальное значение
b = [1, 0, 3, 6]
c = [-2, 3, 6]
print(min(c))
# -2


# max() - находит максимальное значение
print(max(b))
# 6

# int() - возвращает целое число
d = int(23.12)
print(d)
# 23

# чтобы преобразовать дробное число в строке в целое число int можно использовать float
n = int(float("26.7"))
print(n)
# 26

# str() - преобразует любые данные в строку
y = str(23)
print(y)
# 23

# bool() - возвращает булевое значение
print(bool(0))
# false

# dir - с помощью этой функции можно получить название всех атрибутов конкретного обьекта (чтобы вызвать метод обьекта нужно обратится к нему через точечную запись и вызвать его скобочками с аргументом)
# name = 'Dima'
# print(dir(name))
# если вызывать dir() без аргументов ты мы получим все атрибуты текущей зоны видимости
# print(dir())
# print(dir(__builtins__))
# print(name.upper())
# DIMA. Значение переменной name не изменится после вызова методов обьекта name

# print(print)
