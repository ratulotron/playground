import 'package:test/test.dart';
import 'package:letter_counter/letter_counter.dart';

void main() {
  test("I can count letter frequencies in a sentence", () {
    expect(countLetters(""), "");
    expect(countLetters(""), "A2,D1,E2,I1,M1,O1,R1,S2,T1,W1");
  });
}
