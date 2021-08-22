defmodule Alch do
    def read_my_file(filename) do
        File.read(filename)
    end

    def mapping({_, value}) do
        IO.puts value
    end
end
