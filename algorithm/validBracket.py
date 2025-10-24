from collections import deque


def validBracket(str):
    dq = deque(str)
    strDict = {"(": 0, "{": 0, "[": 0}

    while len(dq) > 0:
        poped = dq.popleft()

        if poped == "(":
            strDict["("] += 1
        if poped == ")":
            strDict["("] -= 1
            if strDict["("] < 0:
                return False

        if poped == "{":
            strDict["{"] += 1
        if poped == "}":
            strDict["{"] -= 1
            if strDict["{"] < 0:
                return False

        if poped == "[":
            strDict["["] += 1
        if poped == "]":
            strDict["["] -= 1
            if strDict["["] < 0:
                return False

    for key in strDict.keys():
        if strDict[key] > 0:
            return False
    return True


print(validBracket("([)]"))
