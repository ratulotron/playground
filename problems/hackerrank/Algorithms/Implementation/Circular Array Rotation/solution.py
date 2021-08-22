#!/bin/python3

# n = no. of items
# k = no. of rotations
# q = no. of queries
n,k,q = input().strip().split(' ')
n,k,q = [int(n),int(k),int(q)]
# input items
a = [int(a_temp) for a_temp in input().strip().split(' ')]

# if k == n, then after the rotation the list returns to the original one
# so we set the no. of rotation to the remainder of k and n
# if k == n the remainder is 0
# meaning no rotation is needed
k %= n
# rotation
a = a[-k:] + a[:-k]


for a0 in range(q):
    m = int(input().strip())
    print(a[m])
