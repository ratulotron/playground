#include <iostream>
using namespace std;


string separator(string str)
{
    int length = str.length();
    string even_letters = "";
    string odds_letters = "";
    for (int i = 0; i < length; ++i)
    {
        if ((i % 2) == 0)
        {
            even_letters += str[i];
        }
        else
        {
            odds_letters += str[i];
        }
    }

    return even_letters + " " + odds_letters;
}

int main(){
    int testcases;
    cin >> testcases;
    for(int i=0; i < testcases; i++) {
        string test;
        cin >> test;
        cout << separator(test) << endl;
    }

    return 0;
}

