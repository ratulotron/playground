defmodule Drop do
  import :math, only: [sqrt: 1]
  # def fall_velocity({planemo, distance}) when distance >= 0 do
  def fall_velocity(where) when elem(where, 1) >= 0 do
    {planemo, distance} = where      
    fall_velocity(planemo, distance)
  end

  defp fall_velocity(:earth, distance) do
    sqrt(2 * 9.8 * distance)
  end

  defp fall_velocity(:moon, distance) do
    sqrt(2 * 1.6 * distance)
  end

  defp fall_velocity(:mars, distance) do
    sqrt(2 * 3.71 * distance)
  end
end
