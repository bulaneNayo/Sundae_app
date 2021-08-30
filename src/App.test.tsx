import React from 'react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { findByText, queryByText, render, screen, waitFor} from '@testing-library/react';


test('confirm loading shows', async () => {
  render(<App />);

  const load=await screen.findByText('loading');

});

test('optionally show toppings',async() => {
render(<App/>);

//we should not find toppings on the DOMS
const element=screen.queryByText('toppings');

await waitFor( ()=>{
  
  expect(element).not.toBeInTheDocument();
})


});

test('disable button if no scoops are ordered',() =>{
  render(<App/>);

const orderButton=screen.getByRole('button',{name:'order'});
expect(orderButton).not.toBeEnabled();

});

test('validate scoop count value', async() =>{
  render(<App/>);
  // make sure total starts out $0.00
   const scoopsSubtotal = screen.getByText('Scoops total: $');
   expect(scoopsSubtotal).toHaveTextContent('0.00');

   // update vanilla scoops to 1 and check the subtotal
   const vanillaInput = await screen.findByRole('spinbutton', {
     name: 'Vanilla',
   });

   userEvent.clear(vanillaInput);
   userEvent.type(vanillaInput, '1');
   expect(scoopsSubtotal).toHaveTextContent('2.00');

   // update chocolate scoops to 2 and check subtotal
   const chocolateInput = await screen.findByRole('spinbutton', {
     name: 'Chocolate',});
  
});

test('dont update total if scoop count is invalid', async () =>{
render(<App/>);

  const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla',});
  userEvent.clear(vanillaInput);
 const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
 expect(scoopsSubtotal).toHaveTextContent('0.00');
 

 
 userEvent.type(vanillaInput, '1');
 expect(scoopsSubtotal).toHaveTextContent('2.00');
 // update chocolate scoops to 2 and check subtotal
 const chocolateInput = await screen.findByRole('spinbutton', {
   name: 'Chocolate',});

});

test('show alert for error when submitting order',async () =>{
 

//const alert= clear screen.getByRole('alert');
});

