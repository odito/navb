import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
// common components
import Tab from './components/Tab';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// unique components
import Αρχική from './Pages/Αρχική';
import Σχετικα from './Pages/Σχετικα';
import Ηλεκτρολογικα from './Pages/Ηλεκτρολογικα';
import Φωτοβολταϊκα from './Pages/Φωτοβολταϊκα';
import Συστ_Ασφαλειας from './Pages/Συστ_Ασφαλείας';
import Πιστοποιητικα from './Pages/Πιστοποιητικα';
import Βλαβες from './Pages/Βλάβες';
import Επικοινωνια from './Pages/Επικοινωνια';
import Default from './Pages/Default';


function App() {
  return (
    <div className="App">
      {/* tab */}
       <Tab />

      {/* navbar */}
        <Navbar />
     

      {/* routes */}
       <Switch>
         <Route exact path='/' component={Αρχική}  />
         <Route exact path='/σχετικα' component={Σχετικα}  />
         <Route exact path='/ηλεκτρολογικα' component={Ηλεκτρολογικα}  />
         <Route exact path='/φωτοβολταϊκα' component={Φωτοβολταϊκα}  />
         <Route exact path='/συστ_ασφαλειας' component={Συστ_Ασφαλειας}  />
         <Route exact path="/πιστοποιητικα" component={Πιστοποιητικα} />
         <Route exact path='/βλαβες' component={Βλαβες}  />
         <Route exact path='/επικοινωνια' component={Επικοινωνια}  />
         <Route component={Default} />
       </Switch>

      {/* footer */}
      
      {/* end of footer */}
    </div>
  );
}

export default App;
