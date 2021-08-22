import 'package:letter_counter/letter_counter.dart';

void main(List<String> argv) {
  var inputString = argv.join(' ');
  var letterFrequencies = countLetters(inputString);
  print(letterFrequencies);
}
