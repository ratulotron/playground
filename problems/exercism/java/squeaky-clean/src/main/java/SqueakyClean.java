class SqueakyClean {
    static String clean(String identifier) {
        identifier = identifier.replace(" ", "_");

        char[] chars = identifier.toCharArray();
        StringBuilder builder = new StringBuilder();
        Boolean makeUpper = false;
        for (char c : chars) {
            if (!Character.isAlphabetic(c)) {
                continue;
            }

            if (Character.isISOControl(c)) {
                builder.append("CTRL");
            }

            if (makeUpper) {
                c = Character.toUpperCase(c);
                System.out.println(c);
            }
            if (c == '-') {
                makeUpper = true;
            }
            builder.append(c);
        }

        // // Replace " " -> "_"
        // identifier = identifier.replace(" ", "_");
        // // Replace "\0" -> "CTRL"
        // identifier = identifier.replace("\0", "CTRL");
        // dashIndex = identifier.indexOf("-");
        // identifier.[dashIndex+1] = identifier[dashIndex+1].toCharArray().

        // Replace kebab-case -> camelCase
        System.out.println(builder.toString());
        return builder.toString();
    }
}
