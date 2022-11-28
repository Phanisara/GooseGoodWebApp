import classes from './css/Footer.module.css'

function Footer(){
  return (
    <footer className = {classes.footer}>
        <p className = {classes.paragraph1}>© 2022 Goose Good, Inc. All Rights reserved</p>
        <p className = {classes.paragraph2}>Robotics Studio V: Making the Social Impact, FIBO</p>
    </footer>
  );   
}

export default Footer