import React from 'react';

export default function Navbar() {
    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    
    return (
        <div class="topnav">
            <a href="/" class="active">InferixExplorer</a>
            <a href="/workers">Map</a>
            <a href="/jobs">Jobs</a>
            <a href="/last-rendered">Last rendered</a>
            <a href="javascript:void(0)" class="icon" onClick={myFunction}>
                <i class="fa fa-bars"></i>
            </a>
            
        </div>
        
    )
}