import React from 'react';
import './Products.css';
import records from './records.json'

function Products() {
  return (
    <div>
      <div className='inner' >
        {
          records && records.map(records => {
            return (
              <div className='inner' key={records.id} >
                {records.name}
                <div className='img'>
                  <img src={records.image} alt="" /> <br />
                </div>
                <div className='description'>
                  {records.description}<br />
                </div>
                <div className='des'>
                  {records.descriptions}
                </div>
                <div className='price'>
                  {records.price}
                </div>
                <div >
                  <button className='btn7'>Buynow</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <a href='Login.js'><button className='btn4' >Logout</button></a>
    </div>
  )
}

export default Products