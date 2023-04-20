import React from "react";
import {useState} from "react";
import "./Dashboard.css";
import dashboard from "./images/dashboard.png";
import transaction from "./images/transaction.png";
import schedule from "./images/schedule.png";
import user from "./images/user.png";
import setting from "./images/setting.png";
import Card from "./components/Card";
import revenue from "./images/dollar.png";
import tags from "./images/tags.png";
import like from "./images/like.png";
import users from "./images/userss.png";
import bell from "./images/bell.png";
import profile from "./images/charan.jpg";
import sidewhite from "./images/sidewhite.png";
import sideblack from "./images/sideblack.png";
import Linechart from "./components/Linechart";
import PieChart from "./components/Piechart";

const userdata = [
    {
        bgcolor: "#DDEFE0",
        title: "Total Revenues",
        data: "$2,129,430",
        icons: <img className="icon fav" src={revenue}></img>
    },
    {
        bgcolor: "#F4ECDD",
        title: "Total Transactions",
        data: "1,520",
        icons: <img className="icon fav" src={tags}></img>
    },
    {
        bgcolor: "#EFDADA",
        title: "Total Likes",
        data: "9,721",
        icons: <img className="icon fav" src={like}></img>
    },
    {
        bgcolor: "#DEE0EF",
        title: "Total Users",
        data: "892",
        icons: <img className="icon fav" src={users}></img>
    }
]

const Dashboard = () => {
    const [drop, setDrop] = useState(false);

    const onclickhandler = () => {
        setDrop(!drop);
    }
    return (
        <div className="page-body">
    {drop ? <div className="page-body-div">
                <div className="div1-sub1">
                    <h1 className="div1-sub1-h1"><button type="dropdown" className="dropdown" onClick={onclickhandler}><img className="icon sidebar" src={sidewhite}></img></button>Board.</h1>
                    <ul className="div1-sub1-ul">
                        <li className="div1-sub1-li def"><img className="icon" src={dashboard}></img>Dashboard</li>
                        <li className="div1-sub1-li"><img className="icon" src={transaction}></img>Transactions</li>
                        <li className="div1-sub1-li"><img className="icon" src={schedule}></img>Schedules</li>
                        <li className="div1-sub1-li"><img className="icon" src={user}></img>Users</li>
                        <li className="div1-sub1-li"><img className="icon" src={setting}></img>Settings</li>

                    </ul>
                </div>
                <div className="div1-sub2">
                    <p className="div1-sub2-bottom">Help</p>
                    <p className="div1-sub2-bottom1">Contact us</p>
                </div>
            </div>:``}
      { !drop ? <div className="page-body-div1">
                <div className="div1-sub1">
                    <h1 className="div1-sub1-h1"><button type="dropdown" className="dropdown" onClick={onclickhandler}><img className="icon sidebar" src={sidewhite}></img></button>Board.</h1>
                    <ul className="div1-sub1-ul">
                        <li className="div1-sub1-li def"><img className="icon" src={dashboard}></img>Dashboard</li>
                        <li className="div1-sub1-li"><img className="icon" src={transaction}></img>Transactions</li>
                        <li className="div1-sub1-li"><img className="icon" src={schedule}></img>Schedules</li>
                        <li className="div1-sub1-li"><img className="icon" src={user}></img>Users</li>
                        <li className="div1-sub1-li"><img className="icon" src={setting}></img>Settings</li>

                    </ul>
                </div>
                <div className="div1-sub2">
                    <p className="div1-sub2-bottom">Help</p>
                    <p className="div1-sub2-bottom1">Contact us</p>
                </div>
            </div> :``}
     {!drop ? <div className="page-body-div2">
                <div className="dash-header">
                    <div style={{display:"flex"}}>
                    <button type="dropdown" className="dropdown" onClick={onclickhandler}><img className="icon sidebar div2body" src={sideblack}></img></button>
                    <h1 className="dash-header-h1">Dashboard</h1>
                    </div>
                    <div style={{display:"flex",marginRight:"0.4rem"}}>
                    <input className="search" type="text " placeholder="&nbsp;Search..." />
                    <img className="icon bell" src={bell}></img>
                    <img className="icon bell profile" src={profile}></img>
                    </div>

                </div>
                <div className="dash-user">
                    <Card bgcolor={userdata[0].bgcolor} title={userdata[0].title} data={userdata[0].data} icons={userdata[0].icons}/>
                    <Card bgcolor={userdata[1].bgcolor} title={userdata[1].title} data={userdata[1].data} icons={userdata[1].icons}/>
                    <Card bgcolor={userdata[2].bgcolor} title={userdata[2].title} data={userdata[2].data} icons={userdata[2].icons}/>
                    <Card bgcolor={userdata[3].bgcolor} title={userdata[3].title} data={userdata[3].data} icons={userdata[3].icons}/>
                </div>
                <div className="chart">
                    <div className="chart-sub1">
                    <Linechart/>
                    </div>
                </div>
                <div className="dash-bottom">
                    <div className="dash-bottom-sub">
                    <PieChart/>
                    </div>
                    <div className="dash-bottom-sub">
                        <div className="bottom-card">
                            <div className="bottom-card-sub1">
                                <h1 className="bottom-card-sub1-h1">Today's schedule</h1>
                                <p className="bottom-card-sub1-p">See All</p>
                            </div>
                            <div className="bottom-card-sub2">
                                <div className="bottom-card-sub2-div">
                                Meeting with suppliers from Kuta Bali
                                </div>
                                <div className="bottom-card-sub2-div1">
                                14.00-15.00
                            </div>
                            <div className="bottom-card-sub2-div1">
                            at Sunset Road, Kuta, Bali
                                </div>
                            </div>
                            <div className="bottom-card-sub3">
                                <div className="bottom-card-sub2-div">
                                Meeting with suppliers from Kuta Bali
                                </div>
                                <div className="bottom-card-sub2-div1">
                                14.00-15.00
                            </div>
                            <div className="bottom-card-sub2-div1">
                            at Sunset Road, Kuta, Bali
                                </div>
                            </div>

                        </div>
                    
                    </div>
                </div>
            </div> :``}

        </div>
    )
}

export default Dashboard;