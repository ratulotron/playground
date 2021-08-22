def is_leap_year(year):
    if (year%4) or (year%100) or (year%400):
        return True
    return False