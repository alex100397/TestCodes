import React, { useState } from 'react'

const Vowels = () => {
    const [string, setString] = useState('')
    function countVowels(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u']
        let count = 0;
        const wordSplit = str.split('')
        if (wordSplit.length === 0) return 0;
        wordSplit.map((word) => vowels.includes(word.toLowerCase()) ? count++ : 0);
        return count;   
    }

    const count = countVowels(string);

  return (
    <>
        <div>Vowels</div>
        <input type='text' value={string} onChange={(e) => setString(e.target.value)}/>
        <p>Vowels Count : {count}</p>
    </>
  )
}

export default Vowels