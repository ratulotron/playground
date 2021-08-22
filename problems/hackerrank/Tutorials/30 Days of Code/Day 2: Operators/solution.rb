# Take inputs
meal_cost = gets.to_f
tip_percent = gets.to_f
tax_percent = gets.to_f

# Calculate
tip = meal_cost * tip_percent / 100
tax = meal_cost * tax_percent / 100
total = (meal_cost + tip + tax).round

# Print
puts "The total meal cost is #{total} dollars."
