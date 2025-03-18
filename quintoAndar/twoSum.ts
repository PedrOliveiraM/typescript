function twoSum(nums: number[], target: number): number[] {
  const numberMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i]
    const diff = target - number

    if (numberMap.has(diff)) return [numberMap.get(diff), i]

    numberMap.set(number, i)
  }

  return []
};