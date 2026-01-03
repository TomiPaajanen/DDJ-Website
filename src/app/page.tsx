import Link from 'next/link'

export default function Home() {
  return (
    <div className="container-fluid mt-5">

      <div className="row justify-content-between align-items-start mb-3">

        {/* Logo Column */}
        <div className="col-auto"> {/* 'col-auto' makes the column just wide enough for the logo */}
          <Link href="/" className="d-block">
            <img
              src="https://t4.ftcdn.net/jpg/06/96/89/13/240_F_696891328_utj80ZwXsdy8SloC9IBaFGDIcGNBrEze.jpg"  // Logo URL
              alt="Company Logo"
              height="40"
              className="d-inline-block align-text-top"
            />
          </Link>
        </div>

        {/* Sub-pages Column */}
        <div className="col-auto"> {/* 'col-auto' makes the column just wide enough for the nav */}
          <nav className="d-inline-block">
            <ul className="nav nav-pills gap-2"> {/* Simple nav pills, spaced */}
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/teachers">Teachers</a></li>
              <li className="nav-item"><a className="nav-link" href="/booking">Booking</a></li>
              <li className="nav-item"><a className="nav-link" href="/plans">Plans</a></li>
              <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-8">
          <h1 className="display-4">Welcome to Our Japanese School! Kek</h1>
          <p className="lead">ASD ASD ASD ASD ASD ASD ASDA ASDASDAS DASDASDASDA DASD ASDASD ASDAS DASDASD ASDASDASDASD ADASD ADASD ASDASDAD ASDE</p>
        </div>
        <div className="col-md-4 text-center">
          <a href="/booking" className="btn btn-success btn-lg">Get Started Free</a>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">  {/* Image */}
          <img
            src="https://web-japan.org/kidsweb/explore/calendar/assets/img/april/schoolyear01.jpg"  // Your image URL
            alt="Student Learning Japanese"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2>Why Choose Us?</h2>
          <p>ASD ASD ASD ASD ASD ASD ASDA ASDASDAS DASDASDASDA DASD ASDASD ASDAS DASDASD ASDASDASDASD ADASD ADASD ASDASDAD ASD.</p>
          <a href="/about" className="btn btn-primary">Learn More</a>
        </div>
      </div>

      <div className="row mb-6">
        <div className="col-md-4 text-center">
          <h3> Discord Community</h3>
          <p>Join our  Discord community</p>
        </div>

        <div className="col-md-4">
          <img
            src="https://support.discord.com/hc/user_images/PRywUXcqg0v5DD6s7C3LyQ.jpeg"
            alt="Discord Icon"
            width="250"
            height="250"

          />
          <a href="/joinNow" className="btn btn-primary">Join Now</a>
        </div>
      </div>


      <h2 className="text-center mb-4">Our Teachers</h2>

      <div className="row mb-5">
        <div className="col-md-2 text-center">
          <img
            src="https://cdn.vectorstock.com/i/500p/98/38/gray-female-head-placeholder-vector-23519838.jpg"
            alt="Teacher 1"
            width="250"
            height="250"
          />
          <h4 className="mt-3">Teacher 1</h4>
          <p>asdasd asdasd asdasd asdasd asda sda asdasdad asdasdasd</p>
        </div>

        <div className="col-md-2 text-center">
          <img
            src="https://cdn.vectorstock.com/i/500p/98/38/gray-female-head-placeholder-vector-23519838.jpg"
            alt="Teacher 2"
            width="250"
            height="250"
          />
          <h4 className="mt-3">Teacher 2</h4>
          <p>asdasd asdasd asdasd asdasd asda sda asdasdad asdasdasd</p>
        </div>

        <div className="col-md-2 text-center">
          <img
            src="https://cdn.vectorstock.com/i/500p/98/38/gray-female-head-placeholder-vector-23519838.jpg"
            alt="Teacher 3"
            width="250"
            height="250"
          />
          <h4 className="mt-3">Teacher 3</h4>
          <p>asdasd asdasd asdasd asdasd asda sda asdasdad asdasdasd</p>
        </div>

        <div className="col-md-2 text-center">
          <img
            src="https://cdn.vectorstock.com/i/500p/98/38/gray-female-head-placeholder-vector-23519838.jpg"
            alt="Teacher 4"
            width="250"
            height="250"
          />
          <h4 className="mt-3">Teacher 4</h4>
          <p>asdasd asdasd asdasd asdasd asda sda asdasdad asdasdasd</p>
        </div>

        <div className="col-md-2 text-center">
          <img
            src="https://cdn.vectorstock.com/i/500p/98/38/gray-female-head-placeholder-vector-23519838.jpg"
            alt="Teacher 5"
            width="250"
            height="250"
          />
          <h4 className="mt-3">Teacher 5</h4>
          <p>asdasd asdasd asdasd asdasd asda sda asdasdad asdasdasd</p>
        </div>
      </div>
      {/* FAQ Section*/}
      <div className="row my-5">
        <div className="col-12 text-center mb-4">
          <h2 className="display-5">FAQ</h2>
        </div>

        {/* Accordion Container */}
        <div className="col-lg-8 offset-lg-2"> {/* Centers the content on large screens */}
          <div className="accordion" id="faqAccordion">

            {/* FAQ Item 1 */}
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Question 1?
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Answer 1.
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Question 2?
                </button>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Answer 2.
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Question 2?
                </button>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Answer 2.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}