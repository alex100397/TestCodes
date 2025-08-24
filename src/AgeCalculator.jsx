import { useState } from "react";

function AgeCalculator() {
  const [date, setDate] = useState('')
  const [age, setAge] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const calculateAge = () => {
    if(!date) {
        setErrorMsg('Please select a date')
        setAge('')
        return;
    }
    const today = new Date();
    const birthdate = new Date(date);
    console.log(birthdate)
    console.log(birthdate.getFullYear(), 'year');
    console.log(birthdate.getMonth()+1, 'month');
    console.log(birthdate.getDate(), 'date');
    const years = today.getFullYear() - birthdate.getFullYear();
    const months = today.getMonth() - birthdate.getMonth();
    const days = today.getDate() - birthdate.getDate();
    // const age = `${years} year  ${months} month  ${days} day`;
    if (days < 0) {
      months -= 1;
      // Get days in previous month
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }
    if(year < 0 || month < 0 || day < 0){
        setErrorMsg('Birthdate cannot be in the future')
    } else {
        setErrorMsg('')
        setAge(age);
    }
    console.log(age, 'age');
  }
  return (
    <div className="conatiner">
      <h2 className="title">Age Calculator</h2>
      <label data-testid='label-birthdate' className="label">Enter/Select a birthdate: </label>
      <input onChange={(e) => setDate(e.target.value)} data-testid='input-birthdate' id="birthdate" type="date" className="input-date" />
      <button data-testid='btn-calculate' className="btn-calc" onClick={calculateAge}>Calculate Age</button>
      <p data-testid='error-msg' className="error-msg">{errorMsg}</p>
      <p className="age-result">{age}</p>
    </div>
  );
}

export default AgeCalculator;
