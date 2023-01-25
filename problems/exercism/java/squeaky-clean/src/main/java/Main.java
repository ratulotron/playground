class Main {
    public static void main(String[] args) {
        String text = SqueakyClean.clean("sdas\0asd");
        System.out.println(text);
    }
}
