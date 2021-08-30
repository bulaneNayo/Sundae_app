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
      <p className="load">loading</p>
      <form className="myForm">

          <label htmlFor="Scoops">Scoops</label>

          <table>

              <tr>
                    <td><img src="vanilla.gif" alt="vanilla" width="128" height="128"/><br/>
                    <label htmlFor="Vanilla">Vanilla</label></td>
                  
          
                    <td><img src="chocolate.gif" alt="chocolate" width="128" height="128"/><br/>
                    <label htmlFor="chocolate">chocolate</label></td>
                  
              
        
                    <td><img src="mustard.gif" alt="mustard" width="128" height="128"/><br/>
                    <label htmlFor="mustard">mustard</label></td>
                  
              </tr>
              <tr>
                    <td><label htmlFor="Scoops total: $">Scoops total: $</label>
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
