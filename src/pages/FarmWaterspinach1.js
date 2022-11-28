import {NavLink, Link} from 'react-router-dom'
import classes from './css/Farm.module.css'
import backIcon from './pics/returnIcon.png'
import suggestIcon from './pics/star.png'
import GaugeChart from "react-gauge-chart";

function FarmWaterspinach () {
    const chartStyle = {
      width: '280px',
      margin: '10px 0px 0px -14px',    
      fontFamily: 'Prompt',
      fontWeight: 'bold',
    }

    return (
        <div className = {classes.header}>
            <Link to="/">
                <img className = {classes.logo} src={backIcon} alt='return to home page'/>
            </Link>
            <p className = {classes.head}>แปลงการเกษตรที่ 1</p>
            <nav className = {classes.nav}>
                <ul>
                  <li>
                    <NavLink to = '/farm1/waterspinach' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "rgb(75, 75, 75)" : "#999999", fontWeight:  isActive ? "bold" : "light"}}}>
                        ผักชนิดที่ 1 : ผักบุ้ง
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to = '/farm1/cantonese' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "rgb(75, 75, 75)" : "#999999", fontWeight:  isActive ? "bold" : "light"}}}>
                        ผักชนิดที่ 2 : ผักกวางตุ้ง 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to = '/farm1/spinach' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "rgb(75, 75, 75)" : "#999999", fontWeight:  isActive ? "bold" : "light"}}}>
                        ผักชนิดที่ 3 : ผักโขม
                    </NavLink>
                  </li>
                </ul>
            </nav>

            <div className={classes.allinfo}>
              <div className={classes.info}>
                  <p><span className="bolded">ชื่อผักที่ปลูก :</span>ผักบุ้ง</p>
                  <p><span className="bolded">วันที่เริ่มปลูก :</span>7 พฤศจิกายน 2565</p>
                  <p><span className="bolded">ปริมาณผักที่ปลูก :</span>50 ต้น</p>
              </div>
              <div className={classes.suggest}>
                  <img src={suggestIcon} alt="suggest"></img>
                  <p>คำแนะนำในการปลูกพืช</p>
              </div>
            </div>

            <div className={classes.detail}>
              <p className={classes.detailTopic}>รายละเอียดของค่าที่วัดได้</p>
              <div className={classes.moisSoil}>
                <p>ค่าความชื้นในดิน</p>
                <GaugeChart 
                  style = {chartStyle}
                  id="gauge_soilCan"
                  nrOfLevels={3}
                  colors={["#06753e", "#ffaf47", "#d43535"]}
                  arcWidth={0.3}
                  percent={0.45}
                  textColor={'rgb(49, 49, 49)'}
                  hideText={true}
                />
                <div className={classes.per}>45%</div>
              </div>
              <div className={classes.humidity}>
                <p>ค่าความชื้นในอากาศ</p>
                <GaugeChart 
                    style = {chartStyle}
                    id="gauge_humidCan"
                    nrOfLevels={3}
                    colors={["#06753e", "#ffaf47", "#d43535"]}
                    arcWidth={0.3}
                    percent={0.45}
                    textColor={'rgb(49, 49, 49)'}
                    hideText={true}
                />    
                <div className={classes.per}>45%</div>            
              </div>
              <div className={classes.temp}>
                <p>อุณหภูมิ</p>
                <GaugeChart 
                    style = {chartStyle}
                    id="gauge_tempCan"
                    nrOfLevels={3}
                    colors={["#06753e", "#ffaf47", "#d43535"]}
                    arcWidth={0.3}
                    percent={0.45}
                    textColor={'rgb(49, 49, 49)'}
                    hideText={true}
                />  
                <div className={classes.per}>45%</div>                
              </div>
              <div className={classes.light}>
                <p>ค่าความเข้มของแสงแดด</p>
                <GaugeChart 
                    style = {chartStyle}
                    id="gauge_lightCan"
                    nrOfLevels={3}
                    colors={["#06753e", "#ffaf47", "#d43535"]}
                    arcWidth={0.3}
                    percent={0.45}
                    textColor={'rgb(49, 49, 49)'}
                    hideText={true}
                />
                <div className={classes.per}>45%</div>
              </div>
            </div>

        </div>
    );
}

export default FarmWaterspinach;