my_dict = {}


# def input_fnx():
#     key = input('Введите название ключа: ')
#     value = input('Введите значение для этого ключа: ')
#     return [key, value]


# first_key = input_fnx()
# second_key = input_fnx()
# third_key = input_fnx()

# my_list = dict([first_key, second_key, third_key])
# print(my_list)

# my_list['another_key'] = 'Yana'
# print(my_list)

first_key = input('Введите имя для первого ключа: ')
first_key_value = input(
    'Введите значение для первого ключа это должно быть число: ')
my_dict[first_key] = int(first_key_value)

second_key = input('Введите имя для второго ключа: ')
second_key_value = input(
    'Введите значение для второго ключа это должно быть число: ')
my_dict[second_key] = int(second_key_value)

third_key = input('Введите имя для третьего ключа: ')
third_key_value = input(
    'Введите значение для третьего ключа это должно быть число: ')
my_dict[third_key] = int(third_key_value)

print(my_dict)
