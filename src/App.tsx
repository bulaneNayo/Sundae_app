import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const [disable, setDisable] = useState(true);
  //const [orderDetails] = useOrderDetails();

  // disable order button if there aren't any scoops in order
 // const orderDisabled = orderDetails.totals.scoops === '$0.00';

  return (
    <div className="App">
      //<p className="load">loading</p>
      <form className="myForm">

          <label htmlFor="Scoops">Scoops</label>

          <table>

              <tr>
                    <td><img src="html5.gif" alt="HTML5 Icon" width="128" height="128"/><br/>
                    <label htmlFor="Vanilla">Vanilla</label></td>
                  
          
                    <td><img src="html5.gif" alt="HTML5 Icon" width="128" height="128"/><br/>
                    <label htmlFor="Vanilla">chocolate</label></td>
                  
              
        
                    <td><img src="html5.gif" alt="HTML5 Icon" width="128" height="128"/><br/>
                    <label htmlFor="Vanilla">mustard</label></td>
                  
              </tr>
              <tr>
                    <td><label htmlFor="Scoops total: $0.00">Scoops total: $</label>
                    <input type="text" name="0.00"placeholder="0.00"/>
                    
                    </td>
                        
                    <td>
                            <button disabled={disable} onClick={() => setDisable(false)}> order</button>
                    </td>

              </tr>
                
          </table>

      </form>
    
    </div>
  );
}

export default App;
