import React from 'react';
import styled from 'styled-components';

export default function Tab() {
    return (
        <TabWrapper>
            
 <div className="tab">

  <div className="tab-center">
      <div className="single-tab  tab-info">
         <p><span className="tel"><i className="fas fa-phone"></i></span>6986823930 </p>
         <p className="name">Θεμης Μπουκουβάλας</p>
      </div>

      <div className="single-tab  tab-media ">
       
       <li> <a href="#"><i className="fas fa-envelope-square media"></i></a></li>
       <li> <a href="#"><i className="fab fa-facebook-square media"></i></a></li>
        <li><a href="#"><i className="fab fa-youtube-square media"></i></a></li>
    
       
      </div>

      <div className="single-tab  tab-clock">
         <p>Δευ 22 Απρ 2019, 7:15:01</p>
         
       </div>
       <div className="we">
           
       </div>
  </div>

 </div>
        </TabWrapper>
    )
}



const TabWrapper = styled.div`

 .tab{
     background:#b9d7b9;
    /* background: #9ec89e; */
    font-style: italic;
    color: rgb(100, 99, 98);
}

.tab-center{
    display: flex ;
    justify-content: space-between;
    padding:5px 10px;
    font-size: 16px;
}

.fa-phone{
    margin-right: 5px;
    color: green;
}

.tab-info{
    display: flex;
}
.name{
    margin-left: 15px;
    display: none;
  }

.fa-envelope-square{
    margin-left: 10px;
    color: rgb(197, 35, 35);
}

.tab-media{
    display: flex;
    flex: 1 0 auto;
    justify-content: flex-end;
}

.tab-media li {
    display: inline-block;
    margin:0 5px;
    list-style:none;
   }

.tab-media a{
    display: inline-block;
    margin:0 5px;
   }

 .tab-media a .fa-envelope-square:hover{
    color: #ff0000;
    transform: scale(1.2);
 }

.tab-media a .fa-facebook-square:hover{
    color: #1877f2;
    transform: scale(1.2);
   }

.tab-media a .fa-youtube-square:hover{
    color:   #ff0000;
    transform: scale(1.2);
}

.tab-media a .fa-linkedin:hover{
    color:   #007bb5;
    transform: scale(1.2) rotate(360deg)
}  

.tab-media a .media{
    font-size: 22px;
    color: rgb(100, 99, 98);
    transition: all 0.5s ease;
}

.tab-center{
    display: flex;
    justify-content: space-between;
    padding:5px 10px;
    align-items: center;  
}

.tab-clock{
    display:none; 
    flex-grow: 1;
    justify-content: flex-end;
    margin-right: 0px;
    color:rgb(80, 82, 80);
    text-align: right;
    }


/* responsive */
@media screen and (min-width:476px){
.tab-clock{
    display:block; 
    flex-grow: 1;
    justify-content: flex-end;
    margin-right: 0px;
    color:rgb(80, 82, 80);
    text-align: right;
    }
    }


@media screen and (min-width:720px){
.tab{
    padding:0 10px;
}
.tab-center{
    justify-content: space-between;
    display: flex;
    align-items: center;
    font-size: 17px;  
}

.tab-info{
    display: flex; 
}
.name{
    display: block;
    margin-left: 15px;
}

.tab-media{
    flex:0 0 140px;
    justify-content:flex-end;  
}

.tab-media a{
    display: inline-block;
    margin:0 10px;
    
}
.tab-media a .fa-envelope-square:hover{
    color: #ff0000;
    transform: scale(1.2);
}

.tab-media a .fa-facebook-square:hover{
    color: #1877f2;
    transform: scale(1.2);

}

.tab-media a .fa-youtube-square:hover{
    color:#ff0000;
    transform: scale(1.2);
}

.tab-media a .fa-linkedin:hover{
    color:#007bb5;
    transform: scale(1.2) ;
}  

.tab-media a .media{
    font-size: 22px;
    color: rgb(100, 99, 98);
    transition: all 0.5s ease;
}

.tab-clock{
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    margin-right: 0px;
    color:rgb(80, 82, 80);
}

.tab-clock p{
    color:rgb(80, 82, 80);
}
}


`
