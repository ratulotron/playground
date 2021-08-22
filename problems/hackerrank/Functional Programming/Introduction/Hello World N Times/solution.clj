;; Print "Hello World"  amount of times. The input portion will be handled
;; automatically. You need to write a function with the recommended method
;; signature.

; Number Of Parameters: 1
; Parameters: [n]
; Returns: nil

(defn n-times-hello-world [n]
    (loop [i n]
        (if (> i 0)
            (do
                (println "Hello World")
                (recur (dec i))))))


(n-times-hello-world 3)
