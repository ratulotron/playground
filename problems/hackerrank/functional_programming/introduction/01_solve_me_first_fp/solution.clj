(defn solve-me-first [x y]
  (+ x y))


(defn read-num []
  (Integer/parseInt (read-line)))


(let [a (read-num)
      b (read-num)]
  (println (solve-me-first a b)))
