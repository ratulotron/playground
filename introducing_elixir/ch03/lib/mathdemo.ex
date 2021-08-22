defmodule MathDemo do
  
  def abs(n) when n < 0 do
    -n  
  end

  def abs(n) when n == 0 do
    0
  end

  def abs(n) when n > 0 do
    n
  end

end