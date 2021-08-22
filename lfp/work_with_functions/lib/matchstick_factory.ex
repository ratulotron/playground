defmodule MatchstickFactory do
  def boxes(amount) do
    big = div(amount, 50)
    amount_after_big = rem(amount, 50)
    medium = div(amount_after_big, 20)
    amount_after_medium = rem(amount_after_big, 20)
    small = div(amount_after_medium, 5)
    amount_after_small = rem(amount_after_medium, 5)
    %{big: big, medium: medium, remaining_matchsticks: amount_after_small, small: small}
  end
end
