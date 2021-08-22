(use '[clojure.string :only (split triml)])

(defn mult-table [n]
    (loop [i 1]
        (if (<= i 10)
            (do
                (println (str n " x " i " = " (* n i)))
                (recur (inc i))))))

(let [
    n_t (read-line)
    n (Integer/parseInt n_t)
    ]
    (mult-table n))
