def ommition(string, ommit):
    if len(ommit)==0:
        return string
    new_string = string.replace(ommit.pop(), '')
    return ommition(new_string, ommit)

def is_isogram(string):
    ommit = [' ', '-', '.', ',']

    new_string = ommition(string, ommit).lower()
    if len(new_string) == len(set(new_string)):
        return True
    return False