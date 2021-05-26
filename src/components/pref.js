import React from "react";
import rainy from '../images/rainy.jpg'
import summer from '../images/summer.jpg'
import winter2 from '../images/winter2.jpg'
import Navbar from "./Navbar";

import './pref.css'
class Pref extends React.Component
{
    render()
    {
        return(
        <div id="myDiv">
          <Navbar/>
          <div style={{height:'100px'}}></div>
          <div >
           <h1 class="display-3 text-center"  style={{fontFamily: 'Permanent Marker'}}>Health Advice</h1>
            <br></br>
            <h2 style={{marginLeft:"120px",fontFamily: 'Permanent Marker'}}  >Rainy Season:</h2>
            <br>
            </br>
            <div className="container">
            <div className="row">
    <div className="col-lg-6 col-sm-12">
    <p className="lead text-white font-weight-bold">
            Monsoon is the perfect time for viruses and bacteria to thrive. You will notice that it is this time of the year when viral fevers, allergic reactions and other viral infections are most rampant. Similarly, the air has more bacteria during this time than at any other point. To remain healthy, you need to increase your immunity. One of the easiest ways of doing that is increasing your Vitamin C intake. Eat sprouts, fresh green vegetables and oranges to have a Vitamin C rich diet.
            Street food, freshly cut fruits and other kinds of food items sold on the street should strictly be avoided. The road is usually filled with potholes full of water and mud. These form perfect incubators for various kinds of harmful microorganisms. The longer the food items are exposed to the open air, the higher they are likely to become home to them. So, every time you eat your favourite junk food, you are more likely to contract a disease.
             </p>
    </div>
    <div className="col-lg-6 col-sm-12">
  <img src={rainy} style={{width:"600px",height:"400px"}}></img>
    </div>
  </div>
  </div>
  <br></br>
  <br></br>
  <h2 style={{marginLeft:"120px",fontFamily: 'Permanent Marker'}}>Winter Season:</h2>
            <br>
            </br>
            <div className="container">
            <div className="row">
    <div className="col-lg-6 col-sm-12">
    <p className="lead text-white font-weight-bold">
    Winter is the season to boost immune system and nurture our body. Eating nourished warm food, sleeping well and staying active are some important aspects to keep one healthy during winters.
    physical activity is an important aspect to keep one fit throughout the winter. Daily routine of yoga or any form of physical activity will help to keep you warm and boosts the immune system improving defence against seasonal ailments like flu and colds.
    Drink required amount of water every day and stay hydrated. Water helps to clean our system and remove toxins, carry nutrients to the body cells and help balance body fluid.
    </p>
    </div>
    <div className="col-lg-6 col-sm-12">
  <img src={winter2} style={{width:"600px",height:"400px"}}></img>
    </div>
  </div>
  </div>
  <br></br>
  <br></br>
  <h2 style={{marginLeft:"120px",fontFamily: 'Permanent Marker'}}>Summer Season:</h2>
            <br>
            </br>
            <div className="container">
            <div className="row">
    <div className="col-lg-6 col-sm-12">
    <p className="lead text-white font-weight-bold">
    Summers have arrived and so are the drastic effects. With the passing time, temperatures have been going implausibly high and it is affecting our health. Scalding heat affects us in the form of heat stroke, sunburn, dehydration, etc.
    It is extremely important to be careful during volatile temperatures. The main objective of this blog is to help you lead your summers in utmost relaxation. Read this blog and follow some simple tips to have a healthy and protected summer.
    </p>
    </div>
    <div className="col-lg-6 col-sm-12">
  <img src={summer} style={{width:"600px",height:"400px"}}></img>
    </div>
  </div>
  </div>
  </div>
        </div>
        )
    }
}
export default Pref;