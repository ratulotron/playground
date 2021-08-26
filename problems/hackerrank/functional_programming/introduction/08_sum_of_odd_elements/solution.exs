require Integer

defmodule Solution do
  def read_lines() do
    IO.stream(:stdio, :line)
    |> Enum.take_while(&(&1 != "\n"))
    |> Enum.map(&(String.trim(&1) |> String.to_integer()))
  end

  def main() do
    read_lines()
    |> Enum.reduce(0, fn
      n, acc when Integer.is_odd(n) == true -> n + acc
      _, acc -> acc
    end)
    |> IO.inspect()
  end
end

Solution.main()
