# Кортеж - упорядоченая последовательность элементов
# Кортежи изменять нельзя

my_tuple = (1, 'apple', 'banana')
print(len(my_tuple))  # 3

print(my_tuple[1])

# Кортеж словарей
# В кортеже словарей можно изменять значения ключей словарей
dict_tuple = (
    {
        'name': 'Dima',
        'years': 27
    },
    {
        'name': 'Vlad',
        'years': 29
    },
)

dict_tuple[1]['name'] = 'Yan'
print(dict_tuple)

# Использование переменных
first_fruit = 'apple'
second_fruit = 'banana'
third_fruit = 'lime'

fruit_tuple = (first_fruit, second_fruit, third_fruit)
print(fruit_tuple)  # ('apple', 'banana', 'lime')


if ((len(fruit_tuple) - 1) >= 2):
    print(fruit_tuple[2])

# Можно соединить 2 кортежа. тогда вызывается магический метод __add__
# Изначальные кортежи не изменяются
another_tuple = (1, 2, 3)
all_tuples = fruit_tuple + another_tuple
print(all_tuples)

# Методы. У кортежей есть 2 метода. COUNT и INDEX
# Count - считает количество введенных элементов
# Index - ищет индекс по введенному элементу. Если есть несколько одинаковых элементов то вернет индекс первого элемента

print(all_tuples.count(1))  # 1
print(all_tuples.count('apple'))  # 1
print(all_tuples.index('apple'))  # 0


# В кортеж можно добавить элемент конвертировав его в список а потом обратно в кортеж. Тогда создастся новый кортеж с нужными данными

my_tuple_list = list(all_tuples)
print(my_tuple_list)
my_tuple_list.append('new element in tuple')
print(my_tuple_list)
another_tuple = tuple(my_tuple_list)
# ('apple', 'banana', 'lime', 1, 2, 3, 'new element in tuple')
print(another_tuple)
print(all_tuples)


# ПРАКТИКА
new_tuple = (1, 2, 3, 2, 5, 6, 3, 2, 3,)
first_index_of_two = new_tuple.index(2)
print(first_index_of_two)  # 1
second_index_of_two = new_tuple.index(2, first_index_of_two + 1)
print(second_index_of_two)  # 3
third_index_of_two = new_tuple.index(2, second_index_of_two + 1)
print(third_index_of_two)  # 7

list_of_indexes = []
index = 0

for e in new_tuple:
    if e == 2:
        index = new_tuple.index(2, index + 1)
        list_of_indexes.append(index)


print(list_of_indexes)
