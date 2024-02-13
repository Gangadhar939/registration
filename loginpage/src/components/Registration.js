import React, { useState } from 'react'
import logo from '../images/logo.png'
import axios from 'axios'

const Registration = () => {

    const [data, setData] = useState({
        name : '',
        mail : '',
        mobile : '',
        experience : '',
        photo : '',
        resume : ''
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data.name+'\n'+data.mobile+'\n'+data.mail+'\n'+data.experience+'\n'+data.photo+'\n'+data.resume)
        console.log(typeof(data.mobile))

        if(data.mobile.length !== 10){
            alert("Invalid mobile Number")
        }else{
            const formData = new FormData();
            formData.append('name',data.name);
            formData.append('mail',data.mail);
            formData.append('mobile',data.mobile);
            formData.append('experience',data.experience);
            formData.append('photo',data.photo);
            formData.append('resume',data.resume);

            axios.post("http://localhost:3001/register", formData)
            .then(result => {
                if(result.data.Status){
                    alert("Registered Successfully")
                }else{
                    alert(result.data.Error)
                }
            }).catch(err => console.log("error"+err))
        }
        
        
    }

  return (
    <div className='container'>
        <div className='reg-form'>
            <div className='heading'>
                <img src={logo} alt="Logo" className='logo'/>
                {/* <h2>SIGN UP</h2> */}
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="name"> <strong>Name : </strong></label>
                    <input type="text"  onChange={(e) => setData({...data, name : e.target.value})} required/>   
                </div>
                <div className='form-group'>
                    <label htmlFor="name"><strong>Email : </strong></label>
                    <input type="email"  required onChange={(e) => setData({...data, mail : e.target.value})}/>   
                </div>
                <div className='form-group'>
                    <label htmlFor="name"> <strong>Mobile Number : </strong></label>
                    <input type="tel" pattern='[0-9]{10}' required onChange={(e) => setData({...data, mobile : e.target.value})}/>   
                </div>
                <div className='form-group'>
                    <label htmlFor="name"><strong>Years of experience in IT : </strong></label>
                    <input type="text"  required onChange={(e) => setData({...data, experience : e.target.value})}/>   
                </div>
                <div className='form-group'>
                    <label htmlFor="name"><strong>Photo : </strong></label>
                    <input type='file' accept='image/*' required onChange={(e) => setData({...data, photo : e.target.files[0]})}/>   
                </div>
                <div className='form-group'>
                    <label htmlFor="name"><strong>Resume : </strong></label>
                    <input type="file" accept='.pdf, .doc, .docx' required onChange={(e) => setData({...data, resume : e.target.files[0]})}/>   
                </div>
                <div className='btn'>
                    <button className='btn-submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Registration
