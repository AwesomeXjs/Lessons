from pathlib import Path

files_dir = Path('files')
files_dir.mkdir(exist_ok=True)

first_file = files_dir / 'first.txt'
second_file = files_dir / 'second.txt'

with open(first_file, 'w') as f:
    f.write("First line \n")
    f.write("Second line \n")

with open(second_file, 'w') as f:
    lines = [
        "    First line in the second file",
        "    Second line in the second file",
        "Last line in the second file   "
    ]
    for line in lines:
        f.write(line + '\n')

with open(first_file) as f:
    print(f.read())

with open(second_file) as f:
    # OPTION 1
    for line in f:
        print(line.strip())

    # # OPTION 2
    # while True:
    #     line = f.readline()
    #     if not line:
    #         break
    #     print(line.strip())

first_file.unlink()
second_file.unlink()

files_dir.rmdir()
