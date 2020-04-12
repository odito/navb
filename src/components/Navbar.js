import React, { Component } from 'react';

import './Navbar.css';
import logo from '../img/logo.png'
import {Link} from 'react-router-dom';


export default class Navbar extends Component {

 state={
     isOpen:false,
     open:true,
     headerShow:false
 }

handleToggle=()=>{
    this.setState({
        isOpen:!this.state.isOpen
    });
}

closeLink=()=>{



   this.setState({
       isOpen:false,
       open:true
   
   })

 



//    in order to close the submenu menu after @media width of 664px
//    setTimeout(() => {
//     this.setState({
//         open:false
//     })
//    }, 1000);


}


closeSub=()=>{

  
    this.setState({
       
        open:!this.state.open
    
    })
}
 






componentDidMount(){
    window.addEventListener("scroll",this.scrollEffect);
  

}

// scroll effect
scrollEffect = ()=>{

  if(window.scrollY >0 ){
    this.setState({
        headerShow:true
    })
  }

  else {
      this.setState({
          headerShow:false
      })
  }
    
}

// unmount or disable it in order not to keep space in memory of react
componentWillUnmount(){
    window.addEventListener("scroll",this.scrollEffect);  
}



    render() {

        console.log(this.state.open);
        
        return (
            <nav className={this.state.headerShow ?'scrollNav':''}>
                <div className="logoBtn">
                    <div className="logo">
                        <Link to="/" className="logoA"  ><img src={logo} alt="" className="logoImg" />
                        </Link>
                    </div>
                    <div className={this.state.isOpen ?"btn actBars":'btn undefined'}
                    onClick={this.handleToggle}
                    >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>

                <div className={this.state.isOpen?"fix":'undefined'} >
                    <ul className={this.state.isOpen ?" links openLinks":"links undefined"}>
                        <li><Link to="/"  onClick={this.closeLink}>Αρχική</Link></li>
                        <li><Link to="/σχετικα" onClick={this.closeLink} >Σχετικά</Link></li>
                        <li onClick={this.closeSub}><Link to="#">Υπηρεσιες <span><i className="fas fa-angle-down" ></i></span></Link>
                        <ul className={this.state.open?"submenu ":' newSubmenu '}  >
                            <li><Link to="/ηλεκτρολογικα" 
                            onClick={this.closeSingle}
                            onClick={this.closeLink}  className="first">Ηλεκτρολογικά</Link></li>
                            <li><Link to="/φωτοβολταϊκα"
                             onClick={this.closeSingle}
                            onClick={this.closeLink} >Φωτοβολταϊκά</Link></li>
                            <li><Link to="/πιστοποιητικα" onClick={this.closeLink} >Πιστοποιητικά</Link></li>
                            <li><Link to="/συστ_ασφαλειας" onClick={this.closeLink}>Συστ. ασφαλείας</Link></li>
                            <li><Link to="/βλαβες" onClick={this.closeLink} >Βλάβες</Link></li>
                        </ul>
                        
                        </li>
                        <li><Link to="/επικοινωνια" onClick={this.closeLink}>Επικοινωνία</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
