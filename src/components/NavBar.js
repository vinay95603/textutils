import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
              </li>
            </ul>

            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}

            <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick= { props.toggleMode}></div>
{/* <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer', border: '3px solid #C0C0C0' }}></div>
<div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer', border: '3px solid #C0C0C0' }}></div>
<div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer', border: '3px solid #C0C0C0' }}></div>
<div className="bg-dark rounded mx-2" onClick={() => { props.toggleMode('dark') }} style={{ height: '30px', width: '30px', cursor: 'pointer', border: '3px solid #C0C0C0' }}></div>
<div className="bg-light rounded mx-2" onClick={() => { props.toggleMode('light') }} style={{ height: '30px', width: '30px', cursor: 'pointer', border: '3px solid #C0C0C0' }}></div>
<div className="bg-info rounded mx-2" onClick={() => { props.toggleMode('info') }} style={{ height: '30px', width: '30px', cursor: 'pointer', border: '3px solid #C0C0C0' }}></div> */}

              </div>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={()=>{props.toggleMode('null')}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabled dark mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Uncomment this section if you want to provide default props
// NavBar.defaultProps = {
//   title: 'Set title here',
//   aboutText: 'About',
// };
