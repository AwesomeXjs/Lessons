# Практика по словарям
my_disk = {}
print(id(my_disk))
print(type(my_disk))

my_disk['brand'] = "Samsung"
my_disk['price'] = 80
print(my_disk)

# popitem - удаляет элемент из словаря и возвращает его в виде кортежа. Не рекомендуется использовать
print(my_disk.popitem())  # ('price', 80)
print(my_disk)  # {'brand': 'Samsung'}

print(my_disk.get('type', '1tb'))  # 1tb

# Копирование словаря
second_disk = my_disk.copy()
print(second_disk)
print(id(second_disk) == id(my_disk))  # False
second_disk['another_key'] = 'SSD'
print(second_disk)  # {'brand': 'Samsung', 'another_key': 'SSD'}
print(my_disk)  # {'brand': 'Samsung'}

# Конвертация других значений в словарь
my_list = [['first', 1], ['second', 2], ['third', 3]]
my_dict = dict(my_list)
print(my_dict)

# Из строки нельзя создать словарь
