#include <cmath>
#include <iostream>
using namespace std;


float total_cost(float meal_cost, float tip_percent, float tax_percent) {
    float tip = meal_cost * tip_percent / 100;
    float tax = meal_cost * tax_percent / 100;
    return meal_cost + tip + tax;
}


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    float meal_cost;
    float tip_percent;
    float tax_percent;

    cin >> meal_cost;
    cin >> tip_percent;
    cin >> tax_percent;
    float cost = total_cost(meal_cost, tip_percent, tax_percent);
    cout << "The total meal cost is " << round(cost) << " dollars.";


    return 0;
}
