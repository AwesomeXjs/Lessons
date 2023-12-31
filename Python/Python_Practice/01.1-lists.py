my_list = ['abc', 5, 10.5, True, [1]]

print(my_list)

my_list.pop(2)

print(len(my_list))
print(my_list)

my_list.reverse()
print(my_list)

other_list = [True, {'a': 10}]

my_list.extend(other_list)

print(my_list)
print(other_list)
