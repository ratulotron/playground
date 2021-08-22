#convenience functions
defmodule Combined do

  import Drop
  import Convert
  def height_to_mph(meters) do  #takes meters, returns miles per hour
    # Convert.mps_to_mph(Drop.fall_velocity(meters))
    # Drop.fall_velocity(meters)
    fall_velocity(meters)
    |> mps_to_mph
    # |> Convert.mps_to_mph
  end
end