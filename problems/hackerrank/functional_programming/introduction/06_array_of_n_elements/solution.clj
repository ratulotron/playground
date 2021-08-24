(defn n-elements [n]
  (range 1  (inc n)))

(let [lines (line-seq (java.io.BufferedReader. *in*))]
  (println (n-elements (Integer. (first lines)))))