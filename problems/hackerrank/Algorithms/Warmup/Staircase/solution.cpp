#include <bits/stdc++.h>

using namespace std;


// Complete the staircase function below.
void staircase(int n) {
    int stairs = 0;
    int spaces = 0;

    for(int i = 0; i < n; i++) {
        stairs = i + 1;
        spaces = n - stairs;
        for(int c = 0; c < spaces; c++)
            cout << " ";
        for(int c = 0; c < stairs; c++)
            cout << "#";
        cout << endl;
    }
}


int main()
{
    int n;
    cin >> n;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    staircase(n);

    return 0;
}