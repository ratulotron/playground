defmodule Solution do
  def get_number() do
    IO.gets("")
    |> String.trim()
    |> String.to_integer()
  end

  def main() do
    a = get_number()
    b = get_number()
    IO.puts(a + b)
  end
end

Solution.main()
