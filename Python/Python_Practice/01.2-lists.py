first_list = [10, True, 'abc']
second_list = [[1, 2], {'b': True}]

merged_list = first_list + second_list
print(merged_list)

other_merged_list = first_list.__add__(second_list)
print(other_merged_list)

print(first_list)
print(second_list)
