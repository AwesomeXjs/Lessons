def update_car_info(**car):
    car['is_available'] = True
    return car


print(update_car_info(brand='BMW', price=100000))

# # TypeError: update_car_info() takes 0 positional arguments but 2 were given
# print(update_car_info('BMW', 100000))
