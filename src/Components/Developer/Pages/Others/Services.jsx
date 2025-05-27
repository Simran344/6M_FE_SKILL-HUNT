import { Link } from "react-router-dom";
import PageTitle from "../../Layouts/PageTitle";

export default function Services(){
    return(
        <>
  <main className="main">
          <PageTitle>Services</PageTitle>
  {/* Services Start */}
  <div className="container-fluid service py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Our Services</h4>
        <h1 className="display-4">
          {" "}
          Offering the Best Consulting &amp; Investa Services
        </h1>
      </div>
      <div className="row g-4 justify-content-center text-center">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="/assets/img/service-1.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Business Strategy
                  Invesments
                </Link>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum nobis est sapiente natus officiis maxime
                </p>
                <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="/assets/img/service-2.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Consultancy &amp;
                  Advice
                </Link>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum nobis est sapiente natus officiis maxime
                </p>
                <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="/assets/img/service-4.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Invesments Planning
                </Link>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum nobis est sapiente natus officiis maxime
                </p>
                <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="/assets/img/service-3.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Private Client
                  Investment
                </Link>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum nobis est sapiente natus officiis maxime
                </p>
                <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Link
            className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
            data-wow-delay="0.1s"
            to="#"
          >
            Services More
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
  {/* Testimonial Start */}
  <div className="container-fluid testimonial bg-light py-5">
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="h-100 rounded">
            <h4 className="text-primary">Our Feedbacks </h4>
            <h1 className="display-4 mb-4">Clients are Talking</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              atque soluta unde itaque. Consequatur quam odit blanditiis harum
              veritatis porro.
            </p>
            <Link
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              to="#"
            >
              Read All Reviews <i className="fas fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
        <div className="col-xl-8">
          <div
            className="testimonial-carousel owl-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div
              className="testimonial-item bg-white rounded p-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="d-flex">
                <div>
                  <i className="fas fa-quote-left fa-3x text-dark me-3" />
                </div>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam eos impedit eveniet dolorem culpa ullam incidunt vero
                  quo recusandae nemo? Molestiae doloribus iure,
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="my-auto text-end">
                  <h5>Person Name</h5>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="bg-white rounded-circle ms-3">
                  <img
                    src="/assets/img/testimonial-1.jpg"
                    className="rounded-circle p-2"
                    style={{
                      width: 80,
                      height: 80,
                      border: "1px solid",
                      borderColor: "var(--bs-primary)"
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="testimonial-item bg-white rounded p-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="d-flex">
                <div>
                  <i className="fas fa-quote-left fa-3x text-dark me-3" />
                </div>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam eos impedit eveniet dolorem culpa ullam incidunt vero
                  quo recusandae nemo? Molestiae doloribus iure,
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="my-auto text-end">
                  <h5>Person Name</h5>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="bg-white rounded-circle ms-3">
                  <img
                    src="/assets/img/testimonial-2.jpg"
                    className="rounded-circle p-2"
                    style={{
                      width: 80,
                      height: 80,
                      border: "1px solid",
                      borderColor: "var(--bs-primary)"
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="testimonial-item bg-white rounded p-4 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="d-flex">
                <div>
                  <i className="fas fa-quote-left fa-3x text-dark me-3" />
                </div>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam eos impedit eveniet dolorem culpa ullam incidunt vero
                  quo recusandae nemo? Molestiae doloribus iure,
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="my-auto text-end">
                  <h5>Person Name</h5>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="bg-white rounded-circle ms-3">
                  <img
                    src="/assets/img/testimonial-3.jpg"
                    className="rounded-circle p-2"
                    style={{
                      width: 80,
                      height: 80,
                      border: "1px solid",
                      borderColor: "var(--bs-primary)"
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* FAQ Start */}
  <div className="container-fluid faq py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="pb-5">
            <h4 className="text-primary">FAQs</h4>
            <h1 className="display-4">Get the Answers to Common Questions</h1>
          </div>
          <div className="accordion bg-light rounded p-4" id="accordionExample">
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseTOne"
                >
                  What Does Link Financial Advisor Do?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What industries do you specialize in?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can you guarantee for growth?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-0">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What makes your business plans so special?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <div className="faq-img RotateMoveRight rounded">
            <img
              src="/assets/img/faq-img.jpg"
              className="img-fluid rounded w-100"
              alt="Image"
            />
            <Link
              className="faq-btn btn btn-primary rounded-pill text-white py-3 px-5"
              to="#"
            >
              Read More Q &amp; A <i className="fas fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FAQ End */}
</main>
  
</>

    )
}