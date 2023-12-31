my_img = ('1920', '1080', 5)

# info = f"{my_img[0]}x{my_img[1]}" if len(
#     my_img) == 2 else "Incorrect image formatting"

if len(my_img) == 2:
    info = f"{my_img[0]}x{my_img[1]}"
else:
    info = "Incorrect image formatting"

print(info)
