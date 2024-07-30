import React from 'react'
import abstractImage from '../../assets/abstract.png';

const TableCell = ({ children}) => {
    return (
        <div>
            <td className='px-4 py-2'>
                <div className='flex items-center'>
                    <img src={abstractImage} alt="abstract" className="sm:w-1/2 md:w-1/3" />
                    <p>{children}</p>
                </div>
            </td>
        </div>
    )
}

export default TableCell
