#include <iostream>
#include <vector>

using namespace std;


int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++)
        cin >> arr[i];

    double positive_count = 0,
        negative_count = 0,
        zero_count = 0;

    for(int i = 0; i < n; i++) {
        if(arr[i] < 0)
            negative_count += 1;
        else if(arr[i] > 0)
            positive_count += 1;
        else
            zero_count += 1;
    }
    cout << showpoint;
    cout << positive_count/n << endl << negative_count/n << endl << zero_count/n;
    return 0;
}