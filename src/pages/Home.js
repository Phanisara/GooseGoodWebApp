import { Link } from 'react-router-dom'
import classes from './css/Home.module.css'
import cantonese from './pics/cantonese.png'
import spinach from './pics/spinach.png'
import waterspinach from './pics/waterspinach.png'

function HomePage () {
    return (
        <div>
            <h1 >SAFETist Farm</h1>
            <div>
                <Link to = '/farm1/waterspinach'>
                    <img src={waterspinach} alt = 'waterspinach' className={classes.waterspinach1}/>           
                </Link>
                <Link to = '/farm1/cantonese'>
                    <img src={cantonese} alt = 'cantonese' className={classes.cantonese1}/>      
                </Link>
                <Link to = '/farm1/spinach'>
                    <img src={spinach} alt = 'spinach' className={classes.spinach1}/> 
                </Link>
                <ul className= {classes.box1}></ul>
                <ul className= {classes.circle1}></ul>
                <ul className= {classes.circle2}></ul>
                <ul className= {classes.circle3}></ul>
                <p className = {classes.agricount1}>แปลงการเกษตรที่ 1</p>
                <p className = {classes.plantname1}>ผักบุ้ง ผักกวางตุ้ง ผักโขม</p>
            </div>
            
            <div>
                <img src={waterspinach} alt = 'waterspinach' className= {classes.waterspinach2}/>
                <img src={cantonese} alt = 'cantonese' className= {classes.cantonese2}/>
                <img src={spinach} alt = 'spinach' className= {classes.spinach2}/>
                <ul className= {classes.box2}></ul>
                <ul className= {classes.circle4}></ul>
                <ul className= {classes.circle5}></ul>
                <ul className= {classes.circle6}></ul>
                <p className = {classes.agricount2}>แปลงการเกษตรที่ 2</p>
                <p className = {classes.plantname2}>ผักบุ้ง ผักกวางตุ้ง ผักโขม</p>
            </div>
            
        </div>
    );
}

export default HomePage;