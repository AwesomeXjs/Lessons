def route_info(route):
    if ('distance' in route) and (type(route['distance']) == int):
        return f"Distance to your destination is {route['distance']}"

    if ('speed' in route) and ('time' in route):
        return f"Distance to your destination is {route['speed'] * route['time']}"

    return "No distance info is available"

# def route_info(route):
#     if ('distance' in route) and (type(route['distance']) == int):
#         route_info = f"Distance to your destination is {route['distance']}"
#     elif ('speed' in route) and ('time' in route):
#         route_info = f"Distance to your destination is {route['speed'] * route['time']}"
#     else:
#         route_info = "No distance info is available"
#     return route_info


print(route_info({'distance': 15}))
# Distance to your destination is 15

print(route_info({'speed': 20, 'time': 3}))
# Distance to your destination is 60

print(route_info({'my_speed': 30}))
# No distance info is available
