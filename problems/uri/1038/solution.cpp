#include <iostream>
#include <iomanip>


using namespace std;

int main() {
    float table[5] = {4,4.5,5,2,1.5};
    int code, quantity = 0;

    cin >> code >> quantity;
    cout << "Total: R$ " << fixed << setprecision(2) << table[code-1] * quantity << endl;
    return 0;
}
