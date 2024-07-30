import React from 'react'
import angleDown from '../../assets/angle-small-down.png'


const TableHeader = ({children}) => {
  return (
      <th>
            <div className='flex items-center'>
              <p className='font-medium'>{children}</p>
              <img src={angleDown} alt="down-arrow" />
              </div>
              </th>
  )
}

export default TableHeader