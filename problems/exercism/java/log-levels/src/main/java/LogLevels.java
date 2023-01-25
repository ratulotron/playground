public class LogLevels {
    public static String message(String logLine) {
        String text = logLine.split(": *")[1];
        return text.strip();
    }

    public static String logLevel(String logLine) {
        String error_string = logLine.split(": *")[0].replace("[", "").replace("]", "");
        return error_string.toLowerCase().strip();
    }

    public static String reformat(String logLine) {
        String text = message(logLine);
        String level = logLevel(logLine);
        return text + " (" + level + ")";
    }
}
