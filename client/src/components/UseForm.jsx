import React, { useState } from "react";

const UseForm = (initialFieldValues,setcurrentId) => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = ()=>{
      setValues(initialFieldValues)
      setErrors({})
      setcurrentId(0)
  }
  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm
  };
};

export default UseForm;
