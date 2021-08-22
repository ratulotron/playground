Map<String, int> _countLetters(String input) {
  var output = <String, int>{};

  for (var i = 0; i < input.length; i++) {
    var char = input[i].toUpperCase();
    if (char.codeUnitAt(0) >= 65 && char.codeUnitAt(0) <= 90)
      output.update(char, (i) => i + 1, ifAbsent: () => 1);
  }

  return output;
}

String _format(Map<String, int> frequencies) {
  var output = <String>[];
  frequencies.forEach((letter, frequency) {
    output.add(letter + frequency.toString());
  });
  output.sort();
  return output.join(',');
}

String countLetters(String input) {
  return _format(_countLetters(input));
}
