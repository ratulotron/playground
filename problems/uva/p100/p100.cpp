// input n
// print n
// if n = 1 then STOP
//     if n is odd then n <- 3n + 1
//     else n <- n/2
//     GOTO 2

#include <iostream>

using namespace std;


bool is_odd(int number) {
    return number%2 ? true : false; 
}


int cycle_size(int n) {
    int count = 1;  // because n is also included in the count
    while(n!=1) {
        if(is_odd(n)) {
            n = 3 * n + 1;
        } else {
            n = n / 2;
        }
        count++;
    }
    return count;
}


int main() {
    int i = 0, j = 0;
    cin >> i >> j;

    int max_cycle = 0;
    int current_count = 0;
    for(int c = i; c <= j; c++) {
        current_count = cycle_size(c);
        if(current_count > max_cycle) {
            max_cycle = current_count;
        }
    }

    cout << i << " " << j << " " << max_cycle << endl;
    return 0;
}