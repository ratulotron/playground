n = int(input().strip())

binary = ""
while True:
    if n == 1:
        binary = '1' + binary
        break
    elif n%2 == 1:
        binary = '1' + binary
    else:
        binary = '0' + binary
    n //= 2

ones = binary.split('0')
max_no_of_ones = len(max(ones))
print(max_no_of_ones)
