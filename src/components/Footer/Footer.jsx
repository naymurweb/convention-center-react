import React from 'react';
import app from '../../images/app-store.png'
import play from '../../images/play-store.png'

const Footer = () => {
    return (
        <div>
            
    <footer className="bg-black gap3">

        <div className="container">

            <div className="d-flex justify-content-between align-items-center p-4 text-white ">

                <div>
                    <p>© 2020 bike. All rights reserved</p>
                </div>

                <div>
                    <h2 className="fs-4 mb-3">Get the App</h2>
                    <img src={app} alt=""/> <br /><br />    
                    <img src={play} alt=""/>
                </div>
                
            </div>

        </div>


    </footer>

            
        </div>
    );
};

export default Footer;