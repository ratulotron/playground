#include <iostream>
#include <cmath>

using namespace std;

float bhaskara(bool negative, float a, float b, float c) {
    float d = sqrt(b*b - 4 * a * c);
    float negate = negative ? -1.0 : 1.0;
    float result = (-b - negate * d)/(2.0 * a);
    return result;
}

int main() {
    float A, B, C;
    cin >> A >> B >> C;
    if ((B*B - 4 * A * C) > 0) {
        cout << "R1 = " << bhaskara(1, A, B, C) << endl;
        cout << "R2 = " << bhaskara(0, A, B, C) << endl;
    } else {
        cout << "Impossivel calcular" << endl;
    }

    return 0;
}
