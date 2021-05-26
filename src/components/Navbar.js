import React from 'react';
class Navbar extends React.Component{
    render(){
   return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark   navbar-fixed-top">
  <a class="navbar-brand text-light" href="/">WEATHER FINDER</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link text-light" href="/health">Health Advice<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="/about">About Us</a>
      </li>
     
     
    </ul>
  </div>
</nav>
 
 
  </div>
   )
    }
}
export default Navbar;