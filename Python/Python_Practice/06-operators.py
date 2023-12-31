set_one = {10, 'abc', 50, True}
set_two = {'abc', 10, 50, True}

print(set_one == set_two)  # True
print(set_one.__eq__(set_two))  # True

print(set_one is set_two)  # False

print('abc' in set_one)  # True
print(10 in set_two)  # True
print(1000 in set_one)  # False
# # TypeError: unhashable type: 'list'
# print([] in set_one)
