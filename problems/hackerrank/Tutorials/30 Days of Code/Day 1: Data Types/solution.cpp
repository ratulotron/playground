#include <iostream>
#include <iomanip>
#include <limits>

using namespace std;

int main() {
    int i = 4;
    double d = 4.0;
    string s = "HackerRank ";
    string s2;
    if (getline(cin >> ws, s2)) { // eat whitespace
        getline(cin, s2);
    }
    cout << s2 << endl;

    // Declare second integer, double, and String variables.
    int j = 0;
    double e = 0.0;
    string t = "";

    // Read and save an integer, double, and String to your variables.
    cin >> j;
    cin >> e;
    // cin can't take strings with spaces. On the other hand, when cin.getline() reads from the input, there is a newline character left in the input stream, so it doesn't read your c-string. Use cin.ignore() beore calling getline().
    cin.ignore();
    getline(cin, t);

    // This could have been used instead of the cin.ignore and getline combo
    /*
    if (getline(cin >> ws, s2)) { // eat whitespace
        getline(cin, s2);
    }
    */

    // Print the sum of both integer variables on a new line.
    cout << i + j << endl;
    // Print the sum of the double variables on a new line.
    // When floatfield is set to fixed, floating-point values are written using fixed-point notation: the value is represented with exactly as many digits in the decimal part as specified by the precision field (precision) and with no exponent part.
    cout << fixed << setprecision(1) << d + e << endl;
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    string concatenated = s + t;
    cout << concatenated;

    return 0;
}
