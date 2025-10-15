def twoPointer(nums, target):
  nums.sort()

  end = len(nums) - 1
  start = 0
  isSame = False

  while not isSame:
    sum = nums[end] + nums[start]
 
    if sum is target:
      return True
    
    if sum > target:
      end -= 1

    if sum < target:
      start += 1

    if start >= end | end <= start:
      isSame = True
  
  return False

print(twoPointer([2,1,5,7], 5))

