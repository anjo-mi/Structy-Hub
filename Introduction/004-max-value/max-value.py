def max_value(nums):
  max = float('-inf');

  for num in nums:
    if num > max:
      max = num

  return max



print(max_value([10, 5, 40, 40.3]), 40.3)