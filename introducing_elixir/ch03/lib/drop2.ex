defmodule Drop2 do
  import :math, only: [sqrt: 1]

  def fall_velocity(_, distance) when distance >= 0 do
    sqrt(2 * 9.8 * distance)
  end
end
