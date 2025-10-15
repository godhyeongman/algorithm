from re import L


def twoSum(nums, target):
  n = len(nums)
  print(nums[4])
  for i in range(n-1):
    for j in range(i+  1, n):
      if nums[i] + nums[j] is target:
        return True  
  return False 
   
print(twoSum([1,2,3,4,5],9))