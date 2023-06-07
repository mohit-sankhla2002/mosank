import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center justify-content-between">
            <div className="col-6">
              <div className="footer-top-data d-flex gap-15 align-items-center">
                <img src="images/newsletter.png" alt="newletter" />
                <h2 className="text-white mb-0">
                  Signup for New Product Updates
                </h2>
              </div>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter your email address"
                  aria-label="Enter your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  SUBSCRIBE
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} | Powered by MoSank Group of
                Companies{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;