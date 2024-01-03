# Методы наборов
# Методы наборов наследуются от класса SET

# --------------- ADD
# с помощью add можно добавить новый элемент
one_set = {1, 2, 3}
one_set.add(4)
print(one_set)  # {1, 2, 3, 4}

# -------------- UNION
# с помощью union можно обьеденять наборы
# если какие то элементы обоих наборов(множеств) пересекаются - то они останутся только в единичном экземпляре
two_set = {6, 7, 8}
# можно использовать оператор | вместо метода
all_sets = one_set.union(two_set)
print(all_sets)  # {1, 2, 3, 4, 6, 7, 8}

# ------------------- INTERSECTION
# с помощью intersection можно находить пересечение двух наборов
three_set = {2, 3, 4, 5}
inter_set = one_set.intersection(three_set)
# можно использовать оператор & вместо метода
print(inter_set)  # {2, 3, 4}

# ------------------ ISSUBSET
# С помощью issubset можно проверить находятся ли элементы первого набора во втором. Находится ли множество a в множестве b
first_set = {1, 2, 3}
second_set = {0, 2, 1, 4, 3}
res = first_set.issubset(second_set)
print(res)  # True

# ---------------- ISSUPERSET
# с помощью issuperset можно проверить аналогично issubset находятся ли элементы второго множества в первом
res = second_set.issuperset(first_set)
print(res)  # True

# ------------------ DIFFERENCE
# метод difference показывает разницу между множествами
# можно использовать минус вместо метода
res = second_set.difference(first_set)
print(res)  # {0, 4}

# ---------------- DISCARD
# метод discard удаляет элемент из набора и мутирует изначальный набор
res.discard(4)
print(res)  # {0}

# ------------------REMOVE
# метод remove удаляет элемент, показывает ошибку если мы удаляем несуществующий элемент
second_set.remove(0)

# ---------------- COPY
# копирует набор и не мутирует изначальный.
copy_set = res.copy()
print(copy_set)  # {0}

# Практика
my_set = {'abc', 'd', 'f', 'y'}
other_set = {'a', 'f', 'd'}
print(my_set.intersection(other_set))  # {'d', 'f'}
print(other_set.intersection(my_set))  # {'d', 'f'}
# при передаче в intersection строки - Python будет посимвольно сравнивать а не целой строкой
print(other_set.intersection('abcd'))  # {'a', 'd'}

print(other_set.union(my_set))  # {'a', 'f', 'abc', 'd', 'y'}

other_set = {'f', 'd'}
print(other_set.issubset(my_set))  # True
print(my_set.issuperset(other_set))  # True


# Симметричная разница в наборах
print(my_set.symmetric_difference(other_set))  # {'abc', 'y'}
print((my_set & other_set) - (my_set | other_set))

# ПРАКТИКА ПО НАБОРАМ
my_new_set = {1, 5, 10, 2}
my_new_set.add(9)
print(my_new_set)

my_new_other_set = {1, 20, 45, 5, 2}
result = my_new_other_set.intersection(my_new_set)
print(result)
print(list(result))
