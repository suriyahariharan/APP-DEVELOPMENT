import React from 'react'
import "./Help.css"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
const Help = () => {
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7f3edff8-6b73-4842-b32c-0b9220e6961a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData 
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Submitted Successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(() => {
        navigate("/");
      });
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Try again'
      })
      
    }
  };
  return (
     <section className="help">
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className='field' placeholder='Enter your name' name="name"required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className="field" placeholder="Enter your email address" name="email" list="emailDomains" required />
          <datalist id="emailDomains">
            <option value="@gmail.com" />
            <option value="@outlook.com" />
            <option value="@yahoo.com" />
            <option value="@icloud.com" />
            <option value="@hotmail.com" />
            <option value="@example.com" />
          </datalist>
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea name='message'  className="field mess" placeholder='Enter your message' required></textarea>
        </div>
        <button className='buttons' type='submit'>Send Message</button>
      </form>
    </section>
  )
}

export default Help