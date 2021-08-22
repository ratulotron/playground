#!/bin/ruby

N = gets.strip.to_i

if N % 2 != 0
    puts("Weird")
else
    if 2 <= N and N <= 5
        puts("Not Weird")
    end
    if 6 <= N and N <= 20
        puts("Weird")
    end
    if 20 < N
        puts("Not Weird")
    end
end
