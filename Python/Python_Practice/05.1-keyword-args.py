def merge_lists_to_dict(list_one, list_two):
    return dict(zip(list_one, list_two))


res_one = merge_lists_to_dict(
    list_one=['a', 'b', 'c'], list_two=[10, True, []])
print(res_one)

res_two = merge_lists_to_dict(list_two=[{}, True, 100], list_one=['abc'])
print(res_two)

res_three = merge_lists_to_dict(['a', True, 100], list_two=['abc'])
print(res_three)

# # Error - SyntaxError: positional argument follows keyword argument
# res_three = merge_lists_to_dict(list_two=['abc'], ['a', True, 100])
# print(res_three)
