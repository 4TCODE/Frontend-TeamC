import React from 'react'
import abstractImage from '../../assets/abstract.png';

const TableCell = ({ children}) => {
    return (
        <div>
            <td className='px-4 py-2'>
                <div className='flex items-center md:flex-col sm:flex-col'>
                    <img src={abstractImage} alt="abstract" className="sm:w-1/2 md:w-1/4" />
                    <p>{children}</p>
                </div>
            </td>
        </div>
    )
}

export default TableCell
