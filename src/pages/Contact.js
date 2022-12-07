import classes from './css/Contact.module.css'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function ContactPage () {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_whatthegoose",
          "template_whatthegoose",
          form.current,
          "ut-AJOgm9DPzPMpr9"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    return (
     <React.Fragment>
        <h1>ติดต่อเรา</h1>
        <section>
          <div className='grid grid-cols-2'>
              <div>
                    <iframe style = {{width: "500px", height: "330px"}} title="FIBO" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Institute of field robotics&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <p className = {classes.name}>Goose Good, Inc</p>
                    <div className = {classes.detail}>
                        <p>Institute of Fields Robotics.</p>
                        <p>126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กทม. 10140</p>
                        <p>เบอร์โทร: 08x-xxxxxxx</p>
                        <p>Fax: 0xxxxxxxxx</p>
                    </div>
              </div>
    
              {/* page 2 */}
              <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>ชื่อ - นามสกุลผู้ติดต่อ</label>
                        <input type="text" name="fullname" />
                        <label>อีเมล์</label>
                        <input type="email" name="email" />
                        <label>เบอร์โทรศัพท์ที่ติดต่อได้</label>
                        <input type="tel" name="phone" />
                        <label>ข้อความที่ต้องการติดต่อ</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
              </div>
          </div>
        </section>
      </React.Fragment>

    );
}

export default ContactPage;