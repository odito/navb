import React from 'react';
import Title from '../Title';
// import ImageGallery from './ImageGallery';
import Gall from './Gall';

export default function Εργα() {
    return (
        <React.Fragment>
            
         <section className="erga-egatastaseon">

          <Title title="Εργα εγκαταστάσεων" width="200px" />
         <div className="inside-container">
           
           <div className="erga-center">
              <div className="erga-shetika">
               <div className="shetika-icons">
                  <p >Σχετικα</p>
                 <span><i className="fas fa-users"></i></span>
               </div>
                <div className="shetika-texts">
                 <p> Το ok electric ειναι μια εταιρεια με μεγαλη εμπειρια στον τομεα των εγκατασστασεων.Αποτελειται απο επαγγελματιες με μεγαλη εμπειρια.
                  Οι υπηρεσιες μας :</p>
                 <ol>
                 <li>1.<a href="#">Ηλεκτρικες εγκταστασεις</a></li>
                  <li>2.<a href="#">Φωτοβολταϊκα συστιματα</a></li>
                  <li>3.<a href="#">Συστηματα ασφαλειας</a></li>
                  <li>4.<a href="#">Πιστοποιητικα</a></li>
                  <li>5.<a href="#">Βλαβες</a></li>
                 
                  </ol> 
                </div>
                 <div className="perissotera"> <button>περισσοτερα...</button></div>
              </div>


              <div className="erga-gallery" style={{
                 overflow:'hidden'
                
              }}>
               {/* <ImageGallery /> */}
               <Gall />
              </div>
           </div>
           </div>
         </section>

        </React.Fragment>
    )
}
