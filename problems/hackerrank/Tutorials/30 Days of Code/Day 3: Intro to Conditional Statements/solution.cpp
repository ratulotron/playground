#include <iostream>
using namespace std;


/*
Given an integer, n, perform the following conditional actions:
    If n is odd, print Weird
    If n is even and in the inclusive range of 2 to 5, print Not Weird
    If n is even and in the inclusive range of 6 to 20, print Weird
    If n is even and greater than 20, print Not Weird
*/
int weird(int n) {
    if ((n % 2) != 0) cout << "Weird" << endl;
    else {
        if ((2 <= n) && (n <= 5)) cout << "Not Weird" << endl;
        if ((6 <= n) && (n <= 20)) cout << "Weird" << endl;
        if (20 < n) cout << "Not Weird" << endl;
    }
    return 0;
}


int main(){
    int N;
    cin >> N;
    weird(N);
    return 0;
}
