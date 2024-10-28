// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
function Grid() {
    const size = 8; // Set the dimensions of the grid to 8x8
    
    for (let row = 0; row < size; row++) {
        let rowStr = ''; // Initialize an empty string for each row
        
        for (let col = 0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                rowStr += '#'; // Add a '#' for even sum of row and column indices
            } else {
                rowStr += ' '; // Add a space for odd sum of row and column indices
            
        }
        
        console.log(rowStr); // Output the row to the console
    }
    Grid(); // Outputs the patterned grid to the console

