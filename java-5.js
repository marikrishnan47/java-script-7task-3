  // Print the record for the employee whose name is John using find method
// Print the  record for the employee whose name is John index position using findIndex method
  
  
 const employees = [
 { name: "David Carlson", age: 30 },
 { name1: "John Cena", age: 34 },
 { name2: "Mike Sheridan", age: 25 },
 { name3: "John Carte", age: 50 }
];

let empfilter= employees.filter(function( value){
	 return value.name;
	 
});
let empfind= employees.find(function( value){
	 return value.name1;
	 
});
let empfindindex= employees.findIndex(function( value){
	 return value.name1;
	 
});
console.log(empfilter)
console.log(empfind)
console.log(empfindindex)
  
  