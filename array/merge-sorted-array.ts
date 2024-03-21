//Runtime: 84ms
//Memory: 53.34 mb

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) return;
  let currentIndex = m;
  let i = 0;
  mergeNums2(nums1, nums2, currentIndex);
  while (n !== 0) {
    if (i === currentIndex) {
      currentIndex++;
      i = 0;
      n--;
      continue;
    }
    if (nums1[i] > nums1[currentIndex]) {
      let temp = nums1[i];
      nums1[i] = nums1[currentIndex];
      nums1[currentIndex] = temp;
    }
    i++;
  }
}

function mergeNums2(
  nums1: number[],
  nums2: number[],
  startIndex: number
): number[] {
  while (nums2.length !== 0) {
    nums1[startIndex] = nums2[0];
    nums2.shift();
    startIndex++;
  }
  return nums1;
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
