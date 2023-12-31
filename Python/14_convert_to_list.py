# Конвертация в список
greeting = "Hello from Python!"
greeting_list = list(greeting)
# ['H', 'e', 'l', 'l', 'o', ' ', 'f', 'r', 'o', 'm', ' ', 'P', 'y', 't', 'h', 'o', 'n', '!']
print(greeting_list)

# Словари python конвертирует в список записывая только ключи.
my_dict = {'a': 1, 'b': 2}
my_dict_list = list(my_dict)
print(my_dict_list)  # ['a', 'b']
