# Take inputs
meal_cost = float(input())
tip_percent = float(input())
tax_percent = float(input())

# Calculate
tip = meal_cost * tip_percent / 100
tax = meal_cost * tax_percent / 100
total = round(meal_cost + tip + tax)

# Print
print("The total meal cost is {} dollars.".format(total))
