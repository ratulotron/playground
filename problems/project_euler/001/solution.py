def multiples(limit):
  sum = 0
  for i in range(1, limit):
    if (i % 3 == 0) or (i % 5 == 0):
      sum += i
  return sum


def mult_rec(i):
  if i == 0:
    return i
  elif (i % 3 == 0) or (i % 5 == 0):
    return i + mult_rec(i - 1)
  else:
    return mult_rec(i - 1)


print(mult_rec(9))
# print(multiples(1000))
