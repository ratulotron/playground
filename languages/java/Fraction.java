import java.util.ArrayList;
import java.util.Collections;

class Fraction extends Number implements Comparable<Fraction> {
    public Integer numerator;
    public Integer denominator;

    public Fraction(Integer numerator, Integer denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    public Fraction(Integer numerator) {
        this.numerator = numerator;
        this.denominator = 1;
    }

    /*********************
     * Getters & Setters *
     *********************/

    public Integer getNumerator() {
        return numerator;
    }

    public void setNumerator(Integer numerator) {
        this.numerator = numerator;
    }

    public Integer getDenominator() {
        return denominator;
    }

    public void setDenominator(Integer denominator) {
        this.denominator = denominator;
    }

    /*************
     * Utilities *
     *************/

    private static Integer gcd(Integer m, Integer n) {
        while (m % n != 0) {
            Integer oldm = m;
            Integer oldn = n;
            m = oldn;
            n = oldm % oldn;
        }
        return n;
    }

    public Fraction add(Fraction otherFrac) {
        Integer newNum = otherFrac.getDenominator() * this.numerator + this.denominator * otherFrac.getNumerator();
        Integer newDen = this.denominator * otherFrac.getDenominator();
        Integer common = gcd(newNum, newDen);
        return new Fraction(newNum / common, newDen / common);
    }

    public Fraction add(Integer other) {
        return add(new Fraction(other));
    }

    public boolean equals(Fraction other) {
        Integer num1 = this.numerator * other.getDenominator();
        Integer num2 = this.denominator * other.getNumerator();

        return num1 == num2;
    }

    /*******************************
     * Overrides & Implementations *
     *******************************/
    /* Number */
    public double doubleValue() {
        return numerator.doubleValue() / denominator.doubleValue();
    }

    public float floatValue() {
        return numerator.floatValue() / denominator.floatValue();
    }

    public int intValue() {
        return numerator.intValue() / denominator.intValue();
    }

    public long longValue() {
        return numerator.longValue() / denominator.longValue();
    }

    /* Comparable */
    public int compareTo(Fraction other) {
        Integer num1 = this.numerator * other.getDenominator();
        Integer num2 = this.denominator * other.getNumerator();

        return num1 - num2;
    }

    /* String */
    public String toString() {
        return numerator.toString() + "/" + denominator.toString();
    }

    /********
     * Main *
     ********/
    public static void main(String[] args) {
        Fraction f1 = new Fraction(1, 2);
        Fraction f2 = new Fraction(2, 3);
        Fraction f3 = new Fraction(1, 4);

        System.out.println("Adding: " + f1.add(1));
        System.out.println("Calling intValue(): " + f1.intValue());
        System.out.println("Calling doubleValue(): " + f1.doubleValue());

        ArrayList<Fraction> myFracs = new ArrayList<Fraction>();
        myFracs.add(f1);
        myFracs.add(f2);
        myFracs.add(f3);
        Collections.sort(myFracs);

        System.out.println("Sorted fractions:");
        for (Fraction f : myFracs) {
            System.out.println(f);
        }
    }

}
