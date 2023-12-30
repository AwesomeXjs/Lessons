# каждая строка это экземпляр класса Str
# Строка - последовательность символов

my_name = 'Dima'
print(my_name)  # Dima

# Двойные кавычки используют обычно для многословных строк
greeting = "Hello from Python!"
print(greeting)

print(id(greeting))
print(type(greeting))

info_mst = """
This is 
a very long 
string
"""

print(info_mst)
print(type(info_mst))
print(id(info_mst))


# Методы доступные для строк
# len - длина последовательности
print(len(info_mst))  # 30
print(info_mst[1])  # T
print(info_mst[3:])  # is is a very long string

# capitalize - ставит вначале заглавную букву
print(my_name.capitalize())

# Практика
my_comment = "This is my short comment"
print(len(my_comment))
print(my_comment.replace('short', 'long'))  # замена слов в строке
print(my_comment.count('s'))  # подсчет символов в строке # 3
print(my_comment[0])  # обращение по индексу # T
print(my_comment[:10])  # получим все символы до 10го индекса
print(my_comment[1:])  # получим все символы от первого индекса
