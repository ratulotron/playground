#include <iostream>

using namespace std;


int main(int argc, char const* argv[])
{
    float input = 0.0;
    cin >> input;

    if(input>=0.0 && input<=25.0) {
        cout << "Intervalo [0,25]" << endl;
    } else if(input>25.0 && input<=50.0) {
        cout << "Intervalo (25,50]" << endl;
    } else if(input>50.0 && input<=75.0) {
        cout << "Intervalo (50,75]" << endl;
    } else if(input>75.0 && input<=100.0) {
        cout << "Intervalo (75,100]" << endl;
    } else {
        cout << "Fora de intervalo" << endl;
    }
    return 0;
}
