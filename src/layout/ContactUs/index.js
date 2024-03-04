'use client'
import { useState } from 'react';
import styles from './ContactUs.module.scss';

import Modal from '@/components/Modal';

export default function ContacUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false); 

// Validation state
const [validationMsg, setValidationMsg] = useState({
  name: '',
  phone: '',
});

const validateForm = () => {
  let isValid = true;
  let errors = {};

  if (!name.trim()) {
    errors.name = '*Укажите имя';
    isValid = false;
  }
  if (!phone.trim()) {
    errors.phone = '*Укажите телефон';
    isValid = false;
  }
  // Add any other validation you need here

  setValidationMsg(errors);
  return isValid;
};


const handleSubmit = (e) => { 
  e.preventDefault()
  if (!validateForm()) {
    console.log('Validation failed');
    return;
  }
  console.log('Sending')
  let data = {
    name,
    email,
    phone
    // message
  }
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
      setSubmitted(true)
      setShowSuccessModal(true);
      setName('')
      // setEmail('')
      setPhone('')
      //setBody('')
    }
  })
}
  return (
    <div id="#contacts" className={styles.contactUs}>
      <div className="container with-padding">
      <div className={styles.heading}>
          <span>Остались вопросы?</span>
          <h2>Запишитесь на консультацию от ведущего технолога WPG!</h2>
      </div>
        <ul>
          <li>Подберём для вас техническое решение</li>
          <li>Расскажем про сроки поставки</li>
          <li>Озвучим стоимость материалов</li>
          <li>Поделимся опытом решения подобных задач</li>
        </ul>
        <form> 
          <p>
            <input type='text' placeholder='Ваше имя' onChange={(e)=>{setName(e.target.value)}} className={styles.inputField} />
            {validationMsg.name && <span className={styles.errorMsg}>{validationMsg.name}</span>}
          </p>
          <p>
            <input type='tel' placeholder='Ваш телефон' onChange={(e)=>{setPhone(e.target.value)}} className={styles.inputField} />
            {validationMsg.phone && <span className={styles.errorMsg}>{validationMsg.phone}</span>}
          </p>
          <p>
            <input type='submit' value="Отправить запрос" onClick={(e)=>{handleSubmit(e)}} />
          </p>
        </form>
      </div>
      <Modal 
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal} 
      />
    </div>
  );
}
