# Практика по спискам
my_nums = [10, 50, 0, 5, 5, 100]
other_nums = my_nums.copy()
my_nums.append(3)
other_nums.clear()
print(my_nums, other_nums)  # [10, 50, 0, 5, 5, 100, 3] []


many_elements_list = [True, [1, 2], 1, 'abc', {'a': 1}]
many_elements_list.pop(2)
print(len(many_elements_list))


many_elements_list.reverse()

one_more_list = [1, 2]
many_elements_list.extend(one_more_list)
print(many_elements_list)

# Задача 2
one_list = [1, 2]
two_list = [3, 4]
all_lists = one_list + two_list
print(all_lists)
print(one_list.__add__(two_list))
