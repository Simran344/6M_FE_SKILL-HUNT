import { toast } from "react-toastify"
import Swal from "sweetalert2"
import PageTitle from "../../Layout/PageTitle"
export default function ClientBidding() {
  function setRe() {
    Swal.fire({
      title: "Response Recorded",
      text: 'Your Response have been successfully recorded.',
      icon: 'success',
      confirmButtonText: 'OK',
    })
  }
  return (
    <>
      <PageTitle children="Bidding"/>
      <div className="container-fluid blog py-2" >
        <div className="container" >
          <div className="row g-4 justify-content-center">
            <div
              className="col-8"
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{ backgroundImage: "url(/assets/img/bg.png)" }}
              >
                <div className="mb-4">
                  <label>Title</label>
                  <input type="text" className="form-control" id="subject" placeholder="Title" required />
                  <label>Completion Date</label>
                  <input type="date" className="form-control" id="subject" placeholder="Date" required />
                  <label>Developer Name</label>
                  <input type="text" className="form-control" id="subject" placeholder="Enter Name" required />
                  <label>Project Description</label>
                  <input type="text" className="form-control" id="subject" placeholder="Description" required />
                  <label>Amount</label>
                  <input type="number" className="form-control" id="subject" placeholder="Enter Amount" required />
                  <label>Upload Logo</label>
                  <input type="file" className="form-control" id="subject" placeholder=" Logo" />
                </div>
                <button className="btn btn-primary rounded-pill py-2 px-4 me-2" onClick={() => { toast.success(("Send Bidding details successfully"), { position: "bottom-right" }) }}>
                  Send
                </button>
                <button className="btn btn-primary rounded-pill py-2 px-4" onClick={() => { setRe() }}>
                  Response
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}