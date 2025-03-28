function BinarySearch(array: number[], target: number, l:number = 0, r:number | null = null){
  if (r  == null) {
    r = array.length - 1;
  } 

  while (l<r){
    let mid = Math.floor((l+r)/2);

    if(array[mid] == target) return mid;

    if(array[mid] < target){
       l = mid + 1;
    }else{
        r = mid;
    }
  }
  return -1
}


function exponentialSearch(array: number[], target: number){
  if(array[0] == target) return 0;

  let l = 0;
  let r = 1;

  while(r <= array.length && array[r] < target){
    r*=2;
  }

  if(array[r] == target) return r;

  return BinarySearch(array, target, Math.floor(r/2), Math.min(r, array.length-1))
}


console.log(exponentialSearch([1,2,3,4,5,6,7,8,9,10], 3)) 
