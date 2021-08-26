defmodule Solution do
  def read_lines() do
    IO.stream(:stdio, :line)
    |> Enum.take_while(&(&1 != "\n"))
    |> Enum.map(&(String.trim(&1) |> String.to_integer()))
  end

  def main() do
    numbers = read_lines()

    :lists.seq(length(numbers) - 1, 0, -1)
    |> Enum.map(fn x -> Enum.at(numbers, x) |> IO.puts() end)
  end
end

Solution.main()
