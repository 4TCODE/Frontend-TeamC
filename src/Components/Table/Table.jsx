import React from 'react'
import TableHeader from './TableHeader';
import gamePad from '../../assets/game-pad.svg';
import progressDownload from '../../assets/progress-download.svg';
import TableCell from './TableCell';

export default function Table() {
  return (
    <>
    <div className='overflow-x-auto'>
    <table className='w-86 mx-auto mt-14'>
      <thead>
        <tr className='text-gray-400'>
          <th className='pr-4 py-2'><input type='checkbox' className='form-checkbox'></input></th>
          <TableHeader children="Websites"></TableHeader>
          <TableHeader children="Assets Name"></TableHeader>
          <TableHeader children="Status"></TableHeader>
          <TableHeader children="Categories"></TableHeader>
          <TableHeader children="Tags"></TableHeader>
          <TableHeader children="Date"></TableHeader>
          <TableHeader children="Country"></TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className=' py-2'>
            <input type='checkbox'></input>
            </td>
          <td className=' py-2'>
            Google</td>
          <TableCell children="Abstract Elements"></TableCell>
          <td className='bg-green-400 text-white font-bold text-sm py-1.5 px-3 rounded-full'>Private</td>
          <td className='py-2'>
          <div className='flex items-center'>
              <img src={gamePad} alt="3d-element" className='max-w-full' />
              <p>3D Elements</p>
            </div>
          </td>
          <td className=' py-2'>
          <div className='flex items-center'>
              <img src={progressDownload} alt="statistics" className='max-w-full' />
              <p>13,234</p>
            </div>
          </td>
          <td className=' py-2'>31 Jan 2024</td>
          <td className=' py-2'>India</td>      
        </tr>
        <tr>
          <td className='py-2'><input type='checkbox'></input></td>
          <td className='py-2'>Amazon</td>
          <TableCell children="Abstract Minimalist"></TableCell>
          <td className='py-0 px-4 py-2 rounded-md bg-blue-500 text-white text-center'>Public</td>
          <td className='py-2'>
          <div className='flex items-center'>
              <img src={gamePad} alt="3d-element" className='max-w-full' />
              <p>Images</p>
            </div>
          </td>
          <td className='py-2'>
          <div className='flex items-center'>
              <img src={progressDownload} alt="statistics" className='max-w-full' />
              <p>15,587</p>
            </div>
          </td>
          <td className='py-2'>2 Feb 2024</td>
          <td className='py-2'>UK</td>      
        </tr>
      


        <tr>
          <td className='py-2'><input type='checkbox'></input></td>
          <td className='py-2'>Instagram</td>
          <TableCell children="Abstract Elements"></TableCell>
          <td className='py-0 rounded-md bg-blue-500 text-white text-center'>Public</td>
          <td className='py-2'>
          <div className='flex items-center'>
              <img src={gamePad} alt="3d-element" className='max-w-full' />
              <p>Images</p>
            </div>
          </td>
          <td className=' py-2'>
          <div className='flex items-center'>
              <img src={progressDownload} alt="statistics" className='max-w-full' />
              <p>15,587</p>
            </div>
          </td>
          <td className='py-2'>2 Feb 2024</td>
          <td className='py-2'>UK</td>      
        </tr>
        <tr>
          <td className='py-2'><input type='checkbox'></input></td>
          <td className='py-2'>Facebook</td>
          <TableCell children="Abstract Elements"></TableCell>
          <td className='py-0 rounded-md bg-green-500 text-white text-center'>Private</td>
          <td className=' py-2'>
          <div className='flex items-center'>
              <img src={gamePad} alt="3d-element" className='max-w-full' />
              <p>Video</p>
            </div>
          </td>
          <td className=' py-2'>
          <div className='flex items-center'>
              <img src={progressDownload} alt="statistics" className='max-w-full' />
              <p>13,587</p>
            </div>
          </td>
          <td className='py-2'>25 March 2024</td>
          <td className='py-2'>Canada</td>      
        </tr>
        
      </tbody>
      </table>
    </div>


  
   
</>

  )
}
