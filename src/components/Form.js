import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  })

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;
    if(event.target.type === "checkbox"){
      value = event.target.checkbox;
    }

    setFormData({...formData, [name]: value,});
  }


  return (
    <form>
      <label>First Name</label>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <label>Last Name</label>
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <label>Admin</label>
      <input type="checkbox" name="admin" onChange={handleChange} value={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
