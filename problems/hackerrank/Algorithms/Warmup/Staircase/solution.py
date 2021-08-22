#!/bin/python3

n = int(input().strip())
stars = 1
line = ""
for l in range(n):
    for space in range(n - stars):
        print(' ', end="")
    for star in range(stars):
        print('#', end="")
    print()
    stars += 1
