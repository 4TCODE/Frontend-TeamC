import React from 'react'
import angleDown from '../../assets/angle-small-down.png'


const TableHeader = ({children, isHidden}) => {
  return (
      <th className={`${isHidden ? 'hidden sm:table-cell' : 'px-4 py-2'}`}>
            <div className='flex items-center'>
              <p className='font-medium'>{children}</p>
              <img src={angleDown} alt="down-arrow" />
              </div>
              </th>
  )
}

export default TableHeader
