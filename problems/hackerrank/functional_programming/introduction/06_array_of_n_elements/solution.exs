defmodule Solution do
  def read() do
    IO.gets("")
    |> String.trim()
    |> String.to_integer()
  end

  def make_list(n) do
    Enum.map(1..n, & &1)
  end

  def main() do
    read()
    |> make_list()
    |> inspect()
    |> IO.write()
  end
end

Solution.main()
