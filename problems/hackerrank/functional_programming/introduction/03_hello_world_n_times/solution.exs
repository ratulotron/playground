defmodule Solution do
  def print_n(n, str) do
    Enum.each(1..n, fn _ -> IO.puts(str) end)
  end
end

IO.gets("")
|> Integer.parse()
|> elem(0)
|> Solution.print_n("Hello World")
