# input n
# print n
# if n = 1 then STOP
#     if n is odd then n <- 3n + 1
#     else n <- n/2
#     GOTO 2


i, j = map(int, input().split())

def find_cycle(x):
    cycle_elements = [x]
    while x != 1:
        if x%2:
            x = 3 * x + 1
        else:
            x = x // 2
        cycle_elements.append(x)
    return len(cycle_elements)

max_cycles = max([find_cycle(n) for n in range(i, j+1)])
print("{} {} {}".format(i, j, max_cycles))
#print (find_cycle(10))
# numbers = []
# n = int(input())

# while True:
