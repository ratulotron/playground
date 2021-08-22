#!/bin/python3

n = int(input().strip())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

positive = 0
negative = 0
zero = 0

for i in arr:
    if i > 0:
        positive += 1
    if i < 0:
        negative += 1
    if i == 0:
        zero += 1

print("{:.6f}".format(positive/n))
print("{:.6f}".format(negative/n))
print("{:.6f}".format(zero/n))
