import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {



  const handleGreen = ()=> {
    props.checkColor();
  }

  const handleRed = () => {
    props.checkColor2();
  }

  const handleYellow = () => {
    props.checkColor3();
  }

  const handleSkyBlue = () => {
    props.checkColor4();
  }

  return (
  
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
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li>
            
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
      </div>

    <div className={`form-check form-switch text-${props.mode==='light'?'#343a40':'light'}`}>
    <input className="form-check-input"  onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"   >Enable DarkMode</label>
    </div>
    
    <button type="button" className='btn btn-success' onClick={handleGreen} /> 
    <button type='button' className='btn btn-danger' onClick={handleRed}/>
    <button type='button' className='btn btn-warning'onClick={handleYellow}/>
    <button type='button' className='btn btn-info' onClick={handleSkyBlue}/>
    </div>
    </nav>

    
     
    )
}

Navbar.propType = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// Navbar.defaultProps = {
//   title: 'set title here',
//   aboutText: 'set aboutText here'
// }

