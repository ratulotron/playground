defmodule Solution do
  def read_lines() do
    IO.stream(:stdio, :line)
    |> Enum.take_while(&(&1 != "\n"))
    |> Enum.map(&(String.trim(&1) |> String.to_integer()))
  end

  def print_if_greater(x, n) do
    if x < n do
      IO.puts(x)
    end
  end

  def main() do
    [n | numbers] = read_lines()

    Enum.map(numbers, &print_if_greater(&1, n))
  end
end

Solution.main()
