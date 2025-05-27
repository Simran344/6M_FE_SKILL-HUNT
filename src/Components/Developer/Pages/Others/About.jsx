import { Link } from "react-router-dom";
import PageTitle from "../../Layouts/PageTitle";

export default function About(){
    return(
      <>
      <main className="maina">
        <PageTitle>About Us</PageTitle>
      {/* About Start */}
      <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="about-img">
                <img
                  src="/assets/img/about-3.png"
                  className="img-fluid w-100 rounded-top bg-white"
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
              <h4 className="text-primary">About Us</h4>
              <h1 className="display-5 mb-4">
                The most demanded website in worldwide.
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
                <div className="col-lg-6 col-xl-7">
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
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        32
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        k+
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Project Complete</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-dark rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-white"
                        data-toggle="counter-up"
                      >
                        21
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0">Years Of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        97
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Team Start */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Team</h4>
            <h1 className="display-4">Our  Dedicated Clients</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded">
                <div className="team-img">
                  <img
                    src="/assets/img/team-1.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <Link
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      to=""
                    >
                      <i className="fas fa-share-alt" />
                    </Link>
                    <div className="team-icon-share">
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content bg-dark text-center rounded-bottom p-4">
                  <div className="team-content-inner rounded-bottom">
                    <h4 className="text-white">Mark D. Brock</h4>
                    <p className="text-muted mb-0">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded">
                <div className="team-img">
                  <img
                    src="/assets/img/team-2.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <Link
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      to=""
                    >
                      <i className="fas fa-share-alt" />
                    </Link>
                    <div className="team-icon-share">
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content bg-dark text-center rounded-bottom p-4">
                  <div className="team-content-inner rounded-bottom">
                    <h4 className="text-white">Mark D. Brock</h4>
                    <p className="text-muted mb-0">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded">
                <div className="team-img">
                  <img
                    src="/assets/img/team-3.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <Link
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      to=""
                    >
                      <i className="fas fa-share-alt" />
                    </Link>
                    <div className="team-icon-share">
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content bg-dark text-center rounded-bottom p-4">
                  <div className="team-content-inner rounded-bottom">
                    <h4 className="text-white">Mark D. Brock</h4>
                    <p className="text-muted mb-0">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item rounded">
                <div className="team-img">
                  <img
                    src="/assets/img/team-4.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <Link
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      to=""
                    >
                      <i className="fas fa-share-alt" />
                    </Link>
                    <div className="team-icon-share">
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content bg-dark text-center rounded-bottom p-4">
                  <div className="team-content-inner rounded-bottom">
                    <h4 className="text-white">Mark D. Brock</h4>
                    <p className="text-muted mb-0">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      </main>
    </>

    )
}