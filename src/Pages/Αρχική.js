import React from 'react';
import '../components/Αρχικη/Αρχικη.css';
import Slider from '../components/Αρχικη/Slider';
import Εργα from '../components/Αρχικη/Εργα';


export default function Αρχική() {
    return (
       <React.Fragment>
           <Slider />
          <Εργα />
       </React.Fragment>
    )
}
