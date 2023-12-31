def dict_to_list(dict_to_convert):
    list_for_convertion = []
    for k, v in dict_to_convert.items():
        if type(v) == int:
            v *= 2
        list_for_convertion.append((k, v))
    return list_for_convertion


print(dict_to_list({'a': 5, 'b': [], 'c': 100}))
