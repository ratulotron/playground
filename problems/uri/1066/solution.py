numbers = [int(input()) for x in range(5)]

even = odd = positive = negative = 0

for n in numbers:
    if n%2 == 0:
        even += 1
    else:
        odd += 1

    if n>0:
        positive += 1
    elif n<0:
        negative +=1

print("{} valor(es) par(es)".format(even))
print("{} valor(es) impar(es)".format(odd))
print("{} valor(es) positivo(s)".format(positive))
print("{} valor(es) negativo(s)".format(negative))
