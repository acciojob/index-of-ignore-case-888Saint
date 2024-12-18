function indexOfIgnoreCase(s1, s2) {
  // If subStr is empty, return 0 as per common behavior
  if (s2.length === 0) return 0;
  
  // Convert both strings to lowercase to ensure case-insensitive comparison
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();
  
  // Use the indexOf method to find the first occurrence of lowerS2 in lowerS1
  const index = lowerS1.indexOf(lowerS2);

  // Return the index if found, or -1 if not found
  return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
