import { NavLink, Link } from 'react-router-dom'
import classes from './css/MainNavigation.module.css'

function MainNavigation() {
    return(
        <div className = {classes.header}>
            <Link to = '/' className = {classes.logo}>GOOSE GOOD</Link>
            <nav className = {classes.nav}>
                <ul>
                  <li>
                    <NavLink to = '/' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "rgb(35, 47, 35)" : "white"}}}>
                      หน้าแรก
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to = '/information' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "rgb(35, 47, 35)" : "white"}}}>
                      ข้อมูลการเกษตร
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to = '/manual' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "rgb(35, 47, 35)" : "white"}}}>
                      คู่มือการใช้งาน
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to = '/setting' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "rgb(35, 47, 35)" : "white"}}}>
                      การตั้งค่า
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to = '/contact' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "rgb(35, 47, 35)" : "white"}}}>
                      ติดต่อเรา
                    </NavLink>
                  </li>
                </ul>
            </nav>
        </div>
    );
}

export default MainNavigation;