import React from 'react'
import abstractImage from '../../assets/abstract.png';

const TableCell = ({ children}) => {
    return (
        <div>
            <td className='px-3rem py-2'>
            <div className="flex items-center">
            <img src={abstractImage} alt="abstract" className="img-w-50" />
                    <p>{children}</p>
                </div>
            </td>
        </div>
    )
}

export default TableCell
