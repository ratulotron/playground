defmodule Drop do
  @moduledoc """
  Functions calculating velocities achieved by objects dropped in a vacuum.

  from *Introducing Elixir*.
  """

  @vsn 0.1

  @doc """
  Calculates the velocity of an object falling on Earth as if it were in a vacuum
  (no air resistance). The distance is the height from which the object falls, 
  specified in meters, and the function returns a velocity in meters per second.
  """
  @spec fall_velocity(number()) :: number()
  def fall_velocity(distance, gravity \\ 9.8) do  
    import :math, only: [sqrt: 1]   # Meaning import only sqrt from :math
  
    sqrt(2 * gravity * distance)    # Meaning gravity has default value 
                                    # set to 9.8
    
  end
end
