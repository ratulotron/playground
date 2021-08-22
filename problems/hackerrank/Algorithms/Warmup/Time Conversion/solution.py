#!/bin/python3

time = input().strip()
hours = int(time[:2])
rest = time[2:-2]

new_time = ''


def one_two(hour):
    if len(str(hour)) == 1:
        return "0" + str(hour)

# print(time[-2:])

if time[-2:] == "PM":
    if hours < 12:
        hours += 12
    new_time = str(hours) + rest
else:
    if hours == 12:
        hours = "00"
    elif hours < 12:
        hours = one_two(hours)
    new_time = str(hours) + rest

print(new_time)
