#include <iostream>

using namespace std;


int main() {
    int alice_ratings[3];
    int bob_ratings[3];

    int alice_points = 0;
    int bob_points = 0;

    // Take input for Alice
    for(int i = 0; i < 3; i++)
       cin >> alice_ratings[i];

    // Take input for Bob
    for(int i = 0; i < 3; i++)
       cin >> bob_ratings[i];

    // Comparison
    for (int i = 0; i < 3; i++)
        if (alice_ratings[i] > bob_ratings[i])
            alice_points += 1;
        else if (alice_ratings[i] < bob_ratings[i])
            bob_points += 1;

    cout << alice_points << " " << bob_points << endl;

    return 0;
}


