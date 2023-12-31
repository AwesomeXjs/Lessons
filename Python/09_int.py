# Целые числа

friends_qty = 50
print(friends_qty)  # 50
print(type(friends_qty))  # class int


# any_num = int(float(input("Enter any number: ")))
# print(any_num)
# print(type(any_num))

# Возведение в степерь pow. Встроенная функция которая принимает 2 параметра. Первый это начальное число, второй параметр это степерь в которую нужно возвести число
base = 5
power = 3
result = pow(base, power)
print(result)


# В Python допускается разделение длинных чисел подчеркиванием
one_mil = 1_000_000
print(one_mil)

my_year = 1_995
print(my_year)


example_float = '1.6'
print(round(float(example_float)))  # 2
# float - конвертирует строки с числами с десятичной точной в число
# round - округляет это число


# COMPLEX INT (комплексные числа)
# комплексное число состоит из действительной и мнимой части
complex_a = 3 + 5j   # 3 - действительная часть, 5 - мнимая часть
complex_b = 5 + 10j  # 5 - действительная часть, 10 - мнимая часть
sum = complex_a + complex_b
print(sum)  # (8+15j)
