(defn list-replicate [num lst]
    (flatten (map #(repeat num %) lst)))
