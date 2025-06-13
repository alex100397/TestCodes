import React from 'react'
//Capitalize the first letter of each word and rest  with small letters in a string
const Capitalize = () => {
    function capitalizeWords(sentence) {
        const words = sentence.replace(/\s+/g, ' ').trim().split(' ');
        const capitalizeWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        return capitalizeWords.join(' ').trim();
    }
    
    const value = capitalizeWords("   multiple                spaces   ");

  return (
    <div>Capitalize : {value}</div>
  )
}

export default Capitalize