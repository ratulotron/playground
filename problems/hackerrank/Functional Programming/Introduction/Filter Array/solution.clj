(defn filter-array [delim lst]
    (filter #(< % delim) lst))
