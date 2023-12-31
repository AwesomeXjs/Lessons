# def filter_list(list_to_filter, value_type):
#     def check_element_type(elem):
#         return type(elem) is value_type

#     return list(filter(check_element_type, list_to_filter))

def filter_list(list_to_filter, value_type):
    return list(filter(lambda elem: type(elem) is value_type, list_to_filter))


print(filter_list([35, True, 'abc', 10], int))
print(filter_list([35, True, 'abc', 10], str))
print(filter_list([35, True, 'abc', 10], bool))
