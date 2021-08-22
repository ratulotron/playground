#!/bin/python3

import sys


def score(alice, bob):
    alice_score = 0
    bob_score = 0
    for i in [0,1,2]:
        if alice[i] > bob[i]:
            alice_score += 1
        elif alice[i] < bob[i]:
            bob_score += 1

    return [alice_score, bob_score]


# Input
a0,a1,a2 = input().strip().split(' ')
a0,a1,a2 = [int(a0),int(a1),int(a2)]
b0,b1,b2 = input().strip().split(' ')
b0,b1,b2 = [int(b0),int(b1),int(b2)]

[print(n, end=' ') for n in score([a0,a1,a2], [b0,b1,b2])]
