#!/bin/python3

# Input
n = int(input().strip())
a = []
for a_i in range(n):
    a_t = [int(a_temp) for a_temp in input().strip().split(' ')]
    a.append(a_t)

#Slicing diagonals
primary_diagonal = 0
for i in range(n):
    primary_diagonal += a[i][i]

secondary_diagonal = 0
for i in range(n):
    secondary_diagonal += a[i][len(a[i])-i-1]

print(abs(primary_diagonal - secondary_diagonal))
