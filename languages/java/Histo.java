import java.io.IOException;
import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;

public class Histo {
    public static void main(String[] args) {
        Scanner data = null;
        ArrayList<Integer> count;
        Integer idx;

        try {
            data = new Scanner(new File("test.dat"));
        } catch (IOException e) {
            System.out.println("Unable to open data file.");
            e.printStackTrace();
            System.exit(0);
        }

        // Initialize array
        count = new ArrayList<Integer>(10);
        for (Integer i = 0; i < 10; i++) {
            count.add(i, 0);
        }

        // Map data to array
        while (data.hasNextInt()) {
            idx = data.nextInt();
            count.set(idx, count.get(idx) + 1);
        }

        idx = 0;
        for (Integer i : count) {
            System.out.println(idx + " occured " + i + " times.");
            idx++;
        }
    }
}
