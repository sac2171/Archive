/* Convert Blocking
 * Convert the code to be non blocking using readFile
 */

/* Blocking ReadFile */
var fs = require('fs');
var contents = fs.readFileSync('index.html');
console.log(contents);

fs.readFile('index.html', function(err,contents){
	console.log(contents);	
});