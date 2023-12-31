# Конвертация типов

# Python не выполняет неявную конвертацию типов значений

# Встроеные функции для явной конвертации

str()
float()
tuple()
int()
list()
set()

# Мы получим ошибку потому что Python не выполняет неявную конвертацию. Он ожидает строку для конкатенации
# print('10' + 5)

print(5 + int('10'))
print('10' + str(5))

float_num = 1
float_num = 4.5
print(float_num + float_num)

# Что происходит под капотом при сложении. Python вызывает магический метод __add__
print(float_num.__add__(float_num))  # NotImplemented
# Если результат NotImplemented то Python вызывает метод __radd__ (right add) и пытается добавить к правой части левую. На уровне класса float реализован функционал добавление int к float.
print(float_num.__radd__(float_num))


print(True + 8)  # 9
print(False + 8)  # 8

# Магические методы вызываются неявно при использовании тех или иных операторов

float_num = 50
float_num = 7.5
print(float_num * float_num)  # 375.0
print(float_num.__mul__(float_num))  # NotImplemented
print(float_num.__rmul__(float_num))  # 375.0


float_num = 50
str_val = 'abc'
print(float_num * str_val)  # Python умножил строку на 50 раз
print(str_val.__rmul__(float_num))


# Магические методы это методы определенные на уровне того или иного класса. Их не следует вызывать напрямую. Это внутренние методы класса

print(dir(bool))
hi = True
print(bool.__doc__)
