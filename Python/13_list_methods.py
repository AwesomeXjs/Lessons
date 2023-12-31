# =============== МЕТОДЫ СПИСКОВ

# ------------------------ APPEND --------------------
# append - доавляет элемент в конец списка
happy_smiles = []
happy_smiles.append(':)')
happy_smiles.append(':=)')
print(happy_smiles)  # [':)', ':=)']

# ---------------  POP ------------
# pop - удаление элемента из списка
# при вызове без аргумента удаляет последний элемент списка. При указании индекса в параметре удаляет элемент по индексу
# Также POP возвращает удаленный элемент и к нему можно получить доступ через переменную
happy_smiles.pop()
print(happy_smiles)  # [':)']
happy_smiles.append('Yo')

del_el = happy_smiles.pop(0)
print(del_el)  # :)


# -------------------------- SORT -------------
# SORT - позволяет сортировать список
# без аргументов SORT сортирует список по возрастанию
# в аргументе можно указать параметр и его значение, например чтобы отсортировать список  по убыванию
my_post_ids = [1, 5, 6, 8, 2, 4]
my_post_ids.sort()
print(my_post_ids)  # [1, 2, 4, 5, 6, 8]
my_post_ids.sort(reverse=True)
print(my_post_ids)  # [8, 6, 5, 4, 2, 1]


# ----------------- ВСТРОЕННЫЕ ФУНКЦИИ PYTHON С МАССИВАМИ
rating = [1.2, 4, 6, 7]
print(max(rating))  # 7
print(min(rating))  # 1.2
print(sum(rating))  # 18.2
print(sum(rating) / len(rating))  # 4.55

# Можно обьединить два списка с помощью плюса
rating_two = [10, 11, 12, 13]
all_ratings = rating + rating_two
print(all_ratings)  # [1.2, 4, 6, 7, 10, 11, 12, 13]

# Можно обрезать список. При обрезке изначальный список не мутируется а создается новый обьект
from_index_one = all_ratings[1:]
print(from_index_one)  # [4, 6, 7, 10, 11, 12, 13]
to_index_last = all_ratings[:-1]
print(to_index_last)  # [1.2, 4, 6, 7, 10, 11, 12]
from_index_two_to_pastlast = all_ratings[2:-2]
print(from_index_two_to_pastlast)  # [6, 7, 10, 11]

# -------------- insert
# insert позволяет добавить элемент перед определенным индексом
indx = [1, 2, 3, 4]
indx.insert(1, 8)
print(indx)  # [1, 8, 2, 3, 4]

# CLEAR - очищает список, вызывается без параметров
indx.clear()
print(indx)  # []

# ------------------ EXTEND
# Extend расширяет список добавляя элементы другой последовательности
indx.extend('abc')
print(indx)  # ['a', 'b', 'c']
