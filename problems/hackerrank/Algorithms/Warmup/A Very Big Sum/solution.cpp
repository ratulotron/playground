#include <iostream>

using namespace std;


int main() {
    long n;
    cin >> n;

    long sum = 0;
    int input = 0;
    for (int i = 0; i < n; i++) {
        cin >> input;
        sum += input;
    }

    cout << sum;

    return 0;
}


