import { Link } from "react-router-dom";

export default function PageTitle({children}){
    return(
        <>
        {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            {children}
          </h4>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/admin">Home</Link>
            </li>
           
          </ol>
        </div>
      </div>
      {/* Header End */}
        </>
    )
}