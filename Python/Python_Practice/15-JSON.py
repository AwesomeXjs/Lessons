import json

my_dict = {
    'a': 10,
    'b': {
        'c': [1, 2, 3]
    },
    'd': (1, 2, 3)
}

converted_dict = json.dumps(my_dict, indent=4)
print(converted_dict)
print(type(converted_dict))

converted_json = json.loads(converted_dict)
print(converted_json)
