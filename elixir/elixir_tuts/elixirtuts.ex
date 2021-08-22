defmodule M do
    def main do
        data_stuff()
    end

    def data_stuff do
        my_int = 123
        IO.puts "Integer #{is_integer(my_int)}"
        IO.puts "Atom #{is_atom(:Dhaka)}"
    end

    def balance(initial, spending) do
        # interest(discount(initial, 10), 0.1)
        discount(initial, 10)
        |> interest(0.1)
    end

    def discount(total, amount) do

    end

    def interest(total, rate) do
        
    end
end