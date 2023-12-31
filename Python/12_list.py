# ================= СПИСКИ ====== LIST

# Список - это упорядоченая последовательность элементов
my_fruits = ['apple', 'banana']
posts_ids = [125, 345, 321, 674]
user_inputs = [True, 'hi!', 10.5]

# Порядок элементов в списке ИМЕЕТ значение. Каждый элемент имеет свой индекс

# Можно получить длинну любого списка с помощью встроенной функции len
print(len(my_fruits))  # 2

# Можно получить определенный элемент по его  ID
print(my_fruits[0])  # apple

# Чтобы получить последний элемент в списке можно обратится к нему как к -1 индексу, предпоследний -2
print(my_fruits[-1])  # banana

# Можно изменить определенный элемент в списке
my_fruits[1] = 333
print(my_fruits)  # ['apple', 333]

# Можно удалить какой то элемент в списке с помощью del
del my_fruits[1]
print(my_fruits)  # ['apple']


# В списке можно хранить словари
my_list_of_dicts = [
    {
        'years': 1,
        'name': 'Dima'
    }, {
        'years': 2,
        'name': 'Alex'
    },
]
print(my_list_of_dicts[0]['name'])  # Dima
print(len(my_list_of_dicts[1]))  # 2


# Можно поместить элементы в список с помощью переменных
my_fruit = 'apple'
your_fruit = 'banana'
her_fruit = 'lime'

all_fruits = [my_fruit, your_fruit, her_fruit]
print(all_fruits)  # ['apple', 'banana', 'lime']
