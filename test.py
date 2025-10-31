def select_tool(pos, number):
    coords_tools = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    numbers_tools = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]

    idx_tools = [i for i in range(len(numbers_tools)) if number == numbers_tools[i]]
    coord_tool = [coords_tools[i] for i in idx_tools]

    new_dict = {}

    if len(coord_tool) > 1:
        for target in coord_tool:
            step = target - pos
            if step < 0:
                new_dict.update(left=step)
            else:
                new_dict.update(right=step)

        action = f"Влево на {new_dict['left']} шага" if abs(new_dict["left"]) < abs(new_dict["right"]) else f"Вправо на {new_dict['right']} шага"
        print(action)


select_tool(4, 8)
