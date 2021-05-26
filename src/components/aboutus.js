import React from 'react'
import natural from '../images/natural.jpg'
import '../App.css'
import Navbar from './Navbar'
const aboutus = () => {
    return (
        <div>
            <div  style={{height:'150vh', backgroundImage:`url(${natural})`}}>


<Navbar/>
<div style={{height:'100px'}}></div>
<div  style={{ display:"flex",justifyContent:'center',alignItems:'end',}}>
<div className=" w-50 h-75 bg-danger" style={{}} >
<h2 className="text-center text-white"  style={{fontFamily: 'Permanent Marker'}}>
  What makes Us Different?
</h2>

<div style={{height:'500px'}} className="d-flex flex-column align-items-center justify-content-center ">
<div className="h-75 w-79 bg-dark text-white d-flex align-items-center justify-content-center">
<h3 style={{fontFamily:'Dancing Script',wordSpacing:'5px',padding:'9px'}}>
Hello Viewers,<br></br><br></br><br></br>
Our Main Motive To Make this WebApp Was Not Only To<br></br><br></br>
Enrich Our App By Just Providing YOU All With Information<br></br><br></br>
Based On WEATHER CONDITIONS Of Your City..But Also To <br></br><br></br>
Make You All Heathy And Happy..<br></br><br></br><br>
</br>
GREATINGS FROM TEAM WEATHER FINDER
</h3>
</div>

</div>
</div>

</div>

<div style={{height:'50px'}}></div>
<div  style={{ display:"flex",justifyContent:'center',alignItems:'end',}}>
<div className=" w-50 h-100 bg-danger" style={{}} >
<h1 className="text-center text-white" style={{fontFamily: 'Permanent Marker'}}>
  Our Team
</h1>
<br></br>
<div style={{height:'300px'}} className="d-flex flex-column align-items-center justify-content-center ">
<div className="h-75 w-75 bg-dark text-white d-flex align-items-center justify-content-center">
<h3 style={{fontFamily:'Dancing Script',wordSpacing:'5px',padding:'9px'}}>AKSHIT-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1910990741<br></br>
ISHAN-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1910990706<br></br>
LOKESH-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1910990735<br></br>
DEEPANSHU-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1910990741<br></br>
</h3>
</div>

</div>
</div>

</div>




</div>
        </div>
    )
}

export default aboutus
