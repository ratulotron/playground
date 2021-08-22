defmodule Drop do
  def fall_velocity(planemo, distance) when distance >= 0 do 
    gravity = case planemo do
      # The sign -> reads 'yields'
      :earth  -> 9.8
      :moon   -> 1.6
      :mars   -> 3.71
      # _       -> :nada
    end
    
    velocity = :math.sqrt(2 * gravity * distance)
    
    if velocity > 20 do
      IO.puts("Look out below!")
    else
      IO.puts("Reasonable...")
    end

    cond do
      velocity == 0 -> :stable
      velocity < 5 -> :slow
      velocity >= 5 and velocity < 10 -> :moving
      velocity >= 10 and velocity < 20 -> :fast
      velocity >= 20 -> :speedy    
    end
  end
end


defmodule Recursion do
  def countdown(from) when from > 0 do
    IO.inspect(from)
    countdown(from-1)
  end

  def countdown(from) do
    IO.puts("blastoff!!")
  end
end