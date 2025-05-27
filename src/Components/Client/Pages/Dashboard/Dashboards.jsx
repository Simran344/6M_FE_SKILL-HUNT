import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Header from "../../Layout/Header";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer,Cell } from "recharts";
import "./Dashboard.css"
import { AppBar, Toolbar, Typography, IconButton, Grid, Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { Work, Assignment, People } from "@mui/icons-material";
import PageTitle from "../../Layout/PageTitle";



const data = [
    { month: 'Jan', active: 50, assigned: 30 },
    { month: 'Feb', active: 65, assigned: 45 },
    { month: 'Mar', active: 80, assigned: 60 },
    { month: 'Apr', active: 90, assigned: 75 },
];
const developerData = [
    { category: "Total Devs", count: 2500, color: "#8884d8" },
    { category: "Assigned Devs", count: 1000, color: "#82ca9d"},
];

const iconMap = {
    "Active Projects": <Work style={{ color: "white" }} />,
    "Number of Projects": <Assignment style={{ color: "white" }} />,
    "Developer": <People style={{ color: "white" }} />,
    "Assigned Developer": <People style={{ color: "white" }} />
};


export default function Dashboards() {
   
  return (
      <>
     


      <PageTitle children="Dashboard"/>
      <div style={{ padding: "20px" }} className="mt-2">
        
        {/*<Grid container className="d-flex justify-content-evenly">
  {["Active Projects", "Number of Projects", "Developer", "Assigned Developer"].map(
    (title, index) => (
      <Grid item xs={2.2} key={index}>
        <Card style={{ backgroundColor: "#61dafbaa", padding: "15px", textAlign: "center" }} className="cards">
          <CardContent>
         
            <Avatar style={{ backgroundColor: "#2c3e50", margin: "auto" }}>
              {iconMap[title]}
            </Avatar>
            <Typography variant="h6" style={{ color: "#2c3e50", fontWeight: "bold", marginTop: "10px" }}>
              {title}
            </Typography>
            <Typography variant="h4" style={{ marginTop: "10px", color: "#3498db" }}>
              {title === "Active Projects" ? "300" : 
               title === "Number of Projects" ? "1,200" : 
               title === "Developer" ? "2,500" : "1,000"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  )}
        </Grid>*/}
        <div className="container-fluid about  py-5" >
        <div className="container py-5">
          <div className="row g-5 align-items-center">
          <div className="col-lg-6 col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="about-img">
                <img
                  src="/assets/img/about-3.png"
                  className="img-fluid w-100 rounded-top bg-light"
                  alt="Image"
                />
                <img
                  src="/assets/img/about-2.jpg"
                  className="img-fluid w-100 rounded-bottom"
                  alt="Image"
                />
              </div>
            </div>
          <div
              className="col-lg-6 col-xl-7 wow fadeInRight"
              data-wow-delay="0.3s"
            > 
               <h4 className="text-primary ms-2">Dashboard</h4>
              <h1 className="display-5 mb-4">
                The most useful website in worldwide.
              </h1>
              <p className="text ps-4 mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
                atque nihil unde quisquam, deleniti illo Link. Quam harum laboriosam,
                laudantium, deleniti perferendis voluptates ex non laborum libero
                magni, minus illo!
              </p>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-lg-6 col-xl-5">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1" />Upload Completed
                    Projects
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1" />Real-time
                     chat
                  </p>
                </div>
                <div className="col-lg-6 col-xl-7 ms-0">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                   Bidding
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Upload Portfolio
                  </p>
                </div>
              </div>
              <div className="row g-4 justify-content-between mb-5">
                
                <div className="col-xl-7 mb-5 mx-auto">
                  <div className="about-customer d-flex position-relative">
                    <img
                      src="/assets/img/customer-img-1.jpg"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{ left: 0, top: 0 }}
                      alt="Image"
                    />
                    <img
                      src="/assets/img/customer-img-2.jpg"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{ left: 45, top: 0 }}
                      alt="Image"
                    />
                    <img
                      src="/assets/img/customer-img-3.jpg"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{ left: 90, top: 0 }}
                      alt="Image"
                    />
                    <img
                      src="/assets/img/customer-img-1.jpg"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{ left: 135, top: 0 }}
                      alt="Image"
                    />
                    <div
                      className="position-absolute text-dark"
                      style={{ left: 220, top: 10 }}
                    >
                      <p className="mb-0">5m+ Trusted</p>
                      <p className="mb-0">Global Customers</p>
                    </div>
                  </div>
                </div>
              </div>
    <div className="row g-4 text-center align-items-center justify-content-center">
                <div className="col-sm-3">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        5
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">ActiveProjects</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="bg-dark rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-white"
                        data-toggle="counter-up"
                      >
                        10
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0">No.of Projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        10
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Developer</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="bg-dark rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-white"
                        data-toggle="counter-up"
                      >
                        5
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0">AssignedDeveloper</p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
              </div>
        <Grid container spacing={4} style={{ marginTop: "20px"}} className="d-flex justify-content-center ">
          <Grid item xs={5.2}>
            <Card style={{ padding: "20px", borderRadius: "10px",backgroundColor:"rgb(25,31,52)", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} className="cards1">
              <CardContent>
                <Typography variant="h6" style={{ color: "white", fontWeight: "bold" }}>Active Projects Vs Assigned Projects</Typography>
                <LineChart width={500} height={300} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="active" stroke="#8884d8" />
                  <Line type="monotone" dataKey="assigned" stroke="#82ca9d" />
                </LineChart>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5.2}>
            <Card style={{ padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",backgroundColor:"rgb(25,31,52)" }} className="card1">
              <CardContent>
              <Typography variant="h6" style={{ color: "white", fontWeight: "bold" }}>Total Developers Vs Assigned Developers</Typography>
              <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={developerData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey="category" stroke="white" />
                      <YAxis stroke="white"/>
                      <Tooltip 
                        contentStyle={{ backgroundColor: "#222", color: "white" }} 
                        itemStyle={{ color: "white" }} />
                      <Legend />
                      <Bar dataKey="count" stroke="#8884d8">
                        {developerData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                      
                    </BarChart>
                  </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      
    </div>
    </>
  );
}
