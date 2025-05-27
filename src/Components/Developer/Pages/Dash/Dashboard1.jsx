import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer  } from "recharts";
import "./Dashboard.css"
import { AppBar, Toolbar, Typography, IconButton, Grid, Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { People, Work, MonetizationOn, TrendingUp } from "@mui/icons-material";
import Header from "../../Layouts/Header";
import PageTitle from "../../Layouts/PageTitle";
const data = [
  { name: "Jan", clients: 500, activeProjects: 200, projectsInProgress: 150, paymentsReceived: 2000 },
  { name: "Feb", clients: 600, activeProjects: 300, projectsInProgress: 200, paymentsReceived: 3000 },
  { name: "Mar", clients: 700, activeProjects: 400, projectsInProgress: 250, paymentsReceived: 4000 },
  { name: "Apr", clients: 800, activeProjects: 500, projectsInProgress: 300, paymentsReceived: 5000 },
];

const iconMap = {
  "Clients": <People />,
  "Active Projects": <Work />,
  "Payment Received": <MonetizationOn />,
  "Projects in Progress": <TrendingUp />
};


export default function Dashboard1() {
  return (
       <>
      
       <PageTitle children="Dashboard"/>
      
      <div style={{ padding: "20px" }} className="mt-0">
  
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
                    <i className="fas fa-check-circle text-primary me-1" /> Upload completed
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
                        8
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Clients</p>
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
                        6
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0">Active Projects</p>
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
                      <p className="text-white mb-0">Payment Received</p>
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
                        6
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0">Projects Progress</p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
              </div>
        <Grid container spacing={4} style={{ marginTop: "20px"}} className="d-flex justify-content-center mt-0">
          <Grid item xs={5.2}>
            <Card style={{ padding: "20px", borderRadius: "10px",backgroundColor:"rgb(25,31,52)", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} className="card1">
              <CardContent>
                <Typography variant="h6" style={{ color: "white", fontWeight: "bold" }}>Line Chart</Typography>
                <LineChart width={450} height={300} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="clients" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="activeProjects" stroke="#82ca9d" strokeWidth={2} />
              <Line type="monotone" dataKey="projects In Progress" stroke="#ffc658" strokeWidth={2} />
              <Line type="monotone" dataKey="paymentsReceived" stroke="#ff7300" strokeWidth={2} />
                </LineChart>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5.2}>
            <Card style={{ padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",backgroundColor:"rgb(25,31,52)" }} className="card1">
              <CardContent>
              <ResponsiveContainer width="100%" height={330}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="clients" fill="#8884d8" />
              <Bar dataKey="activeProjects" fill="#82ca9d" />
              <Bar dataKey="projectsInProgress" fill="#ffc658" />
              <Bar dataKey="paymentsReceived" fill="#ff7300" />
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
