defmodule Solution do
  def read() do
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
    [n | numbers] = read()

    Enum.map(numbers, fn x -> print_if_greater(x, n) end)
  end
end

Solution.main()
