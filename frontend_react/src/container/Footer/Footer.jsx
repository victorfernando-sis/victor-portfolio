import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setformData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)


  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setformData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:victorfernando.sis@gmail.com' className='p-text'>victorfernando.sis@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +353 83 4287808' className='p-text'>+353 83 428 7808</a>
        </div>
      </div>
      {!isFormSubmitted ?(

        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type="text" name="name" placeholder='Your Name' value={name} onChange={handleChangeInput}></input>
          </div>
          <div className='app__flex'>
            <input className='p-text' type="email" name="email" placeholder='Your Email' value={email} onChange={handleChangeInput}></input>
          </div>
          <div>
            <textarea className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput} />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sendind...' : 'Send Message'}</button>
        </div>)
        :
        (<div>
          <h3 className='head-text'>Thank you for getting in touch.</h3>
        </div>)
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)