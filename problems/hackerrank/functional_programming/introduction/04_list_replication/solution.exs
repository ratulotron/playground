defmodule Solution do
  def read() do
    IO.gets("")
    |> String.trim()
    |> String.to_integer()
  end

  def print(s, n) do
    Enum.each(1..s, fn _ -> IO.puts(n) end)
  end

  def main() do
    s = read()
    x = Enum.map(1..s, fn _ -> read() end)

    Enum.each(x, fn number -> print(s, number) end)
  end
end

# Solution.main()
