defmodule Solution do
  def read_lines() do
    IO.stream(:stdio, :line)
    |> Enum.take_while(&(&1 != "\n"))
    |> Enum.map(&(String.trim(&1) |> String.to_integer()))
  end

  def list_length(numbers, previous_length \\ 0)

  def list_length([], previous_length) do
    {[], previous_length}
  end

  def list_length(numbers, previous_length) do
    [_ | rest] = numbers
    list_length(rest, previous_length + 1)
  end

  def main() do
    {_, length_of_list} =
      read_lines()
      |> list_length()

    IO.puts(length_of_list)
  end
end

Solution.main()
