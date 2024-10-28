// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
function displayTriangle() {
    const maxRows = 4; //triangle display to the console with  max rows set to 4
  
    for (let i = 1; i <= maxRows; i++) {
      console.log('#'.repeat(i));
    } // Increments i until it is less than or equal to maxRows, then repeats the "#" 4 times (represented by "i")
  
    for (let i = maxRows - 1; i >= 1; i--) {
      console.log('#'.repeat(i));
    }
    
displayTriangle(); You

// Outputs a triangle of hashtags to the console