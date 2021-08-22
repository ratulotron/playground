from timeit import default_timer
from concurrent import futures
from random import random
from time import sleep
nums = list(map((lambda x: int(random()* 5)), [0] * 10)) # random.randrange(range(1, 100), 10000)

def using_loop(nums):  
  print("Time using for loop:")
  start = default_timer()
  results = []
  for n in nums:
    sleep(n)
  end = default_timer()
  print(end - start)
  print()

def using_map(nums):
  print("Time using for map:")
  start = default_timer()
  results = list(map(sleep, nums))
  end = default_timer()
  print(end - start)
  print()


def using_futures(nums):
  print("Time using for future:")
  start = default_timer()
  with futures.ThreadPoolExecutor() as executor:
      results = executor.map(sleep, nums)
  end = default_timer()
  print(end - start)
  print()

using_loop(nums)
using_map(nums)
using_futures(nums)
# print(nums[:10])