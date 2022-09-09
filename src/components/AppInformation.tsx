import * as React  from "react";
const AppInformation=()=>{
return(

<div className="app_promotion-sec">
    <img className="abstract-bg" src="images/absrt-bg.svg" alt="Store"/>
    <div className="screen-images">
        <img src="images/app.png" alt="Store"/>
    </div>
    <div className="container flex flex-wrap">
        <div className="w-full app_promotion-content">
            <h3>DOWNLOAD THE APP</h3>
            <p>With the official Favorite app, find your nearest Favorite Chicken & Ribs store and order online* for collection or delivery.</p>
            <p>"Britain's Tastiest Chicken!" in just a few clicks!</p>
            <p className="small-text">*At participating stores.</p>
            <div className="available-option">
                <ul>
                    <li><a href="#" className="ios-btn"><img src="images/apple.svg" alt=""/><span>Download For <b>iOS</b></span></a></li>
                    <li><a href="#" className="android-btn"><img src="images/google-play.svg" alt=""/><span>Download For <b>Android</b></span></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>


)



}
export default AppInformation