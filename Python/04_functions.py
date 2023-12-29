# Функции нужны для того чтобы вызывать определенный блок кода многократно

def hello(name="Dima"):
    print("Hello there", name)
    print('Hi there!', name)


hello(123)
hello()


def sum_nums(a, b):
    sum = a + b
    return sum  # как только функция дойдет до return она прекратит свою работу
    print('123')


sums = sum_nums(1, 5)
print(sums)
print(sum_nums(5, 6))
print(sum_nums(sum_nums(5, 6), 50))
