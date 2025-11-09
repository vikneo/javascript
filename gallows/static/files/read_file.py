"""
Списки русских слов
https://github.com/Harrix/Russian-Nouns/blob/main/dist/russian_nouns.txt
"""

import os
from pathlib import Path

from random import choice

file_path = Path(__file__).parent
file_name = 'russian_nouns.txt'
write_file_name = 'words.txt'

path_to_read_file = os.path.join(file_path, file_name)
path_to_write_file = Path(os.path.join(file_path, write_file_name))

def write_to_file(file_name, method):
    try:
        if not file_name.exists():
            with open(path_to_read_file, 'r', encoding="utf8") as file:
                for f in file.readlines():
                    if 8 <= len(f) < 9  and "-" not in f:
                        with open(file_name, method, encoding="utf8") as write_file:
                            write_file.write(f"{f}")
        else:
            raise FileExistsError("Файл уже существует")
    except Exception as err:
        print(err)


def sorting_words():
    words_list = []

    try:
        with open(path_to_write_file, "r", encoding="utf8") as file:
            for word in file.readlines():
                words_list.append(word.split()[0])
    except Exception as err:
        print(err)

    return words_list


def action():
    random_list = []
    words_list = sorting_words()
    
    for _ in range(50):
        random_list.append(choice(words_list))
    
    return random_list


if __name__ == "__main__":
    try:
        write_to_file(path_to_write_file, "a")
        print(action())
    except Exception as err:
        print(err)