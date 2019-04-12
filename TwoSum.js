//Brute force

// function twosum(nums, target){

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i+1; j < nums.length; j++) {

//     if(nums[i]+nums[j]===target){
//       return [i,j]
//     }

//   }

// }

// }

//Best Solution
function twosum(nums, target) {
  var map = {};

  for (let i = 0; i < nums.length; i++) {
    var result = target - nums[i]; 
    if (map[result] !== undefined) {   
      return [map[result], i];
    }
    map[nums[i]] = i;
  }
}

console.log(twosum([3,4,3,7], 6));
