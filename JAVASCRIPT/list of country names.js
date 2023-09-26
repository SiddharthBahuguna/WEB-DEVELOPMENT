function findLongestCountryName(countryList) {
    let longestName = "";
    
    for (let i = 0; i < countryList.length; i++) {
      if (countryList[i].length > longestName.length) {
        longestName = countryList[i];
      }
    }
    
    return longestName;
  }
  
  const country = ["Australia", "Germany", "United States of America"];
  const longestCountry = findLongestCountryName(country);
  console.log(longestCountry); 
  