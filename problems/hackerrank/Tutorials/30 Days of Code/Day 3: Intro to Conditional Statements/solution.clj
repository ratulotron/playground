(use '[clojure.string :only (split triml)])

; Given an integer, n, perform the following conditional actions:
;    If n is odd, print Weird
;    If n is even and in the inclusive range of 2 to 5, print Not Weird
;    If n is even and in the inclusive range of 6 to 20, print Weird
;    If n is even and greater than 20, print Not Weird
(defn weird? [n]
    "Checks whether weird or not"
    (cond
        (odd? n) true
        (and (even? n) (<= 2 n 5)) false
        (and (even? n) (<= 6 n 20)) true
        (and (even? n) (< 20 n)) false))


(defn print-weird [n]
    "Just prints weird or not"
    (if (weird? n) (println "Weird")
        (println "Not Weird")))


(let [
      N_t (read-line)
      N (Integer/parseInt N_t)
    ]
    (print-weird N)
)
