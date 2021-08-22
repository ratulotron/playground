# Taking inputs
cases = int(input())
phonebook = {}
for c in range(cases):
    i = input().strip().split(' ')
    phonebook[i[0]] = i[1]

# for name in names:
for c in range(cases):
    name = input().strip()
    try:
        print(name + "=" + str(phonebook[name]))
    except:
        print("Not found")
