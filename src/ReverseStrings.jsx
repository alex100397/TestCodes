import React, { useState } from 'react'

const ReverseStrings = () => {
  const [string, setString] = useState('')
    const reverseStringOrder = (string) => {
        const words = string.split(' ');
        const reverseWords = words.map((word) => word.split('').reverse('').join(''));
        return reverseWords.join(' ');
    }

    const forReverseFn = (string) => {
      let newWord = '';
      for(let i =string.length - 1; i>=0; i--){
        newWord += string[i];
      }
      return newWord;
    }

    const stringRev = reverseStringOrder(string);
    const stringRevWithoutOrder = string.split('').reverse().join('');
    const stringRevWithFor = forReverseFn(string);
  return (
    <>
    <div>ReverseStrings</div>
    <input type='text' value={string} onChange={(e) => setString(e.target.value)} />
    <p>Original String : {string}</p>
    <p>Reversed String : {stringRevWithoutOrder}</p>
    <p>Reversed String with Order : {stringRev}</p>
    <p>Reversed String with for : {stringRevWithFor}</p>
    </>
  )
}

export default ReverseStrings