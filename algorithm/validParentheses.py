def valid_parentheses(strs: str):
    list_str = list(strs)
    tmp = []

    for s in list_str:
        if len(tmp) == 0:
            tmp.append(s)
            continue

        lastS = tmp[-1]
        if lastS == '(' and s == ')':
            tmp.pop()
            continue

        if lastS == '{' and s == '}':
            tmp.pop()
            continue

        if lastS == '[' and s == ']':
            tmp.pop()
            continue

        if s in [']', '}' , ')']:
            return False

        tmp.append(s)

    if tmp.__len__() == 0:
        return True
    return False

res = valid_parentheses('([])')
print(res)