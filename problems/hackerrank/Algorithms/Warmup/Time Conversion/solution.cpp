#include <bits/stdc++.h>

using namespace std;


string timeConversion(string s) {

    string ampm = s.substr(8, 2);
    stringstream hourify(s.substr(0, 2));
    int hours = 0;
    hourify >> hours;

    if(ampm == "AM"){
        if (hours == 12) {
            return "00" + s.substr(2, 6);
        }
        return s.substr(0, 8);
    }
    if (hours == 12) {
        return s.substr(0, 8);
    }
    return to_string(hours + 12) + s.substr(2, 6);

}

int main()
{
    string s;
    cin >> s;

    string result = timeConversion(s);

    cout << result << "\n";

    return 0;
}
