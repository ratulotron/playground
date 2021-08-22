table = [0,4,4.5,5,2,1.5]

code, price = map(int, raw_input().split(' '))

print("{0:.2f}".format(table[code] * price))
