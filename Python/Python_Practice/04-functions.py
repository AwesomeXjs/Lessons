def merge_lists_to_dict(list_one, list_two):
    return dict(zip(list_one, list_two))


res_one = merge_lists_to_dict(['a', 'b', 'c'], [10, True, []])
print(res_one)

res_two = merge_lists_to_dict(['abc'], [{}, True, 100])
print(res_two)

res_three = merge_lists_to_dict(['a', True, 100], ['abc'])
print(res_three)
