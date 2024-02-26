'use client'
import { useState } from 'react';
import styles from './ContactUs.module.scss';

export default function ContacUs() {
  const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [message, setMessage] = useState('')
const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e) => { 
  e.preventDefault()
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
          <input type='text' placeholder='Ваше имя' onChange={(e)=>{setName(e.target.value)}} className={styles.inputField} />
          <input type='tel' placeholder='Ваш телефон' onChange={(e)=>{setPhone(e.target.value)}} className={styles.inputField} />
          <input type='submit' value="Отправить запрос" onClick={(e)=>{handleSubmit(e)}} />
        </form>
      </div>
    </div>
  );
}
