import React, {useState} from 'react'

export default function About() {


  const [myStyle,setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });


  const[text,setText] = useState("Enable Dark Mode");



  const toggleMode = () => 
  {
  if(myStyle.backgroundColor === 'white')
  {
    setMyStyle
    (
      {
        color: 'white',
        backgroundColor: 'black'
      }
    )
    setText("Enable Ligth mode");
  }
  else
  {
    setMyStyle
    (
      {
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid white'
      }
    )
    setText("Enable Dark mode");
  }
  }






  return (

    
    <div style={myStyle} className="my-3">

          <h1>About us </h1>  

            <div class="accordion my-3" id="accordionExample" style={myStyle}>
        <div class="accordion-item mx-3" style={myStyle}>
          <h2 class="accordion-header">
            <button  style={myStyle} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item mx-3"  style={myStyle}>
          <h2 class="accordion-header">
            <button style={myStyle} class= "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item mx-3"  style={myStyle}>
          <h2 class="accordion-header">
            <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

         <button onClick={toggleMode} className="btn btn-primary my-3 mx-3">{text}</button>

      </div>




    </div>
  )
}
