def longestCommonPrefix (strs: list[str]):
    min_str = min(strs, key=len)
    char_arr = [list(s) for s in strs]

    answer = ''

    for idx, char in enumerate(min_str):
        should_append = True


        for arr_char in char_arr:
            if arr_char[idx] != char:
                should_append = False
                break

        if should_append:
            answer += char
        else:
            break

    return answer





test = longestCommonPrefix(['ab', 'a'])
print(test)