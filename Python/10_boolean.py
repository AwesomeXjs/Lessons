# Логические значения

is_authorized = True
print(is_authorized)
print(type(is_authorized))

# Bool часто используется при проверке правдивости выражения
print(100 > 24)  # True
print(-5 > 2)  # False
print('Dima and Yan' > 'Dima')  # True
print([1, 2, 3] == [1, 2, 3])  # True

# Конвертация любого значения в логическое
print(bool(1))  # True

# Практика
db_is_available = False
print(db_is_available)  # False
print(type(db_is_available))  # class bool

db_is_available = True
print(db_is_available)  # True

print(bool(10))  # True
print(bool('abc'))  # True
print(bool([]))  # False
print(bool([1, 2]))  # True
print(bool(None))  # False
print(bool({}))  # False
