import React from 'react';
import Header from './Header'

import {Link} from 'react-router-dom'
class About extends React.Component{
    render(){
        return(
            <div className="home-page">
              
              <Header/>
                <h1>This is About Page</h1>
              
               
                
              
            </div>
        )
    }
  
}

export default About;