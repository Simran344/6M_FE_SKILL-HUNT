import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer  } from "recharts";
import "./Dashboard.css"
import { AppBar, Toolbar, Typography, IconButton, Grid, Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { People, Work, MonetizationOn, TrendingUp } from "@mui/icons-material";
import PageTitle from "../../Layout/PageTitle";



const data = [
  { name: "Jan", users: 4000, revenue: 5000 },
  { name: "Feb", users: 3000, revenue: 7000 },
  { name: "Mar", users: 7000, revenue: 8000 },
  { name: "Apr", users: 8000, revenue: 9000 },
];
const iconMap = {
  "Total Users": <People />,
  "Active Projects": <Work />,
  "Revenue": <MonetizationOn />,
  "Performance": <TrendingUp />
};


export default function Dashboard() {
  return (
    <>
      <PageTitle children="Dashboard"/>
      <div style={{ padding: "20px" }} className="mt-2">
        
        {/*<Grid container className="d-flex justify-content-evenly">
  {["Total Users", "Active Projects", "Revenue", "Performance"].map(
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
              {title === "Total Users" ? "1,200" : 
               title === "Active Projects" ? "75" : 
               title === "Revenue" ? "$50,000" : "85%"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  )}*/}
         <div className="container-fluid about  py-5 mt-1" >
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
                    <i className="fas fa-check-circle text-primary me-1" /> Real-time
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
                        20
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Total Users</p>
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
                      <p className="mb-0">ActiveProjects</p>
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
                        50
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        K+
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Revenue</p>
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
                        85
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        %
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0">Performance</p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
              </div>
        
        <Grid container spacing={4} style={{ marginTop: "10 px"}} className="d-flex justify-content-center mt-0 ">
          <Grid item xs={5.2}>
            <Card style={{ padding: "20px", borderRadius: "10px",backgroundColor:"rgb(25,31,52)", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} className="card2">
              <CardContent>
                <Typography variant="h6" style={{ color: "white", fontWeight: "bold" }}>User Growth & Revenue</Typography>
                <LineChart width={500} height={300} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#8884d8" />
                  <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5.2}>
            <Card style={{ padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",backgroundColor:"rgb(25,31,52)" }} className="card2">
              <CardContent>
              <ResponsiveContainer width="100%" height={330}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="users" fill="rgba(35, 157, 191, 0.69)" />
                      <Bar dataKey="revenue" fill="#FB8C00" />
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
