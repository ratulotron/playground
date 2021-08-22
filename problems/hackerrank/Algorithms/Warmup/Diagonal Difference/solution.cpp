#include <iostream>
#include <vector>

using namespace std;


int main() {
    int n;
    cin >> n;

    vector<int> row(n, 0);
    vector<vector <int>> matrix(n, row);

    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }

    // Diagonal sum - left to right
    int first_sum = 0;
    for (int i = 0; i < n; i++) {
        first_sum += matrix[i][i];
    }

    // Diagonal sum - right to left
    int second_sum = 0;
    for(int i = 0, j = n-1; i < n; i++, j--) {
        second_sum += matrix[i][j];
    }

    cout << abs(first_sum - second_sum);

    return 0;
}