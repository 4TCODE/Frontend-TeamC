import React from 'react'
import TableHeader from './TableHeader';
import gamePad from '../../assets/game-pad.svg';
import progressDownload from '../../assets/progress-download.svg';
import TableCell from './TableCell';

export default function Table() {
  return (
    <>
    <div className='overflow-x-auto'>
    <table className='w-full table-auto'>
      <thead>
        <tr className='text-gray-400'>
          <th><input type='checkbox'></input></th>
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
          <td className='px-4 py-2'><input type='checkbox'></input></td>
          <td className='px-4 py-2'>Google</td>
          <TableCell children="Abstract Elements"></TableCell>
          <td className='px-3 py-0 rounded-md bg-green-500 text-white text-center'>Private</td>
          <td>
          <div className='flex items-center sm:flex-col md:flex-col'>
              <img src={gamePad} alt="3d-element" className='max-w-full' />
              <p className='text-center'>3D Elements</p>
            </div>
          </td>
          <td className='px-4 py-2'>
          <div className='flex items-center sm:flex-col md:flex-col'>
              <img src={progressDownload} alt="statistics" className='max-w-full' />
              <p>13,234</p>
            </div>
          </td>
          <td className='px-4 py-2 sm:flex-col md:flex-col text-center'>31 Jan 2024</td>
          <td className='px-4 py-2'>India</td>      
        </tr>
        <tr>
          <td className='px-4 py-2'><input type='checkbox'></input></td>
          <td className='px-4 py-2'>Amazon</td>
          <TableCell children="Abstract Minimalist"></TableCell>
          <td className='px-3 py-0 px-4 py-2 rounded-md bg-blue-500 text-white text-center'>Public</td>
          <td className='px-4 py-2'>
          <div className='flex items-center sm:flex-col md:flex-col'>
              <img src={gamePad} alt="3d-element" className='max-w-full' />
              <p>Images</p>
            </div>
          </td>
          <td className='px-4 py-2'>
          <div className='flex items-center sm:flex-col md:flex-col'>
              <img src={progressDownload} alt="statistics" className='max-w-full' />
              <p>15,587</p>
            </div>
          </td>
          <td className='px-4 py-2 text-center'>2 Feb 2024</td>
          <td className='px-4 py-2'>UK</td>      
        </tr>
      


        <tr>
          <td className='px-4 py-2'><input type='checkbox'></input></td>
          <td className='px-4 py-2'>Instagram</td>
          <TableCell children="Abstract Elements"></TableCell>
          <td className='px-3 py-0 rounded-md bg-blue-500 text-white text-center'>Public</td>
          <td className='px-4 py-2'>
          <div className='flex items-center sm:flex-col md:flex-col'>
              <img src={gamePad} alt="3d-element" className='max-w-full' />
              <p>Images</p>
            </div>
          </td>
          <td className='px-4 py-2'>
          <div className='flex items-center sm:flex-col md:flex-col'>
              <img src={progressDownload} alt="statistics" className='max-w-full' />
              <p>15,587</p>
            </div>
          </td>
          <td className='px-4 py-2 text-center'>2 Feb 2024</td>
          <td className='px-4 py-2'>UK</td>      
        </tr>
        <tr>
          <td className='px-4 py-2'><input type='checkbox'></input></td>
          <td className='px-4 py-2'>Facebook</td>
          <TableCell children="Abstract Elements"></TableCell>
          <td className='px-3 py-0 rounded-md bg-green-500 text-white text-center'>Private</td>
          <td className='px-4 py-2'>
          <div className='flex items-center sm:flex-col md:flex-col'>
              <img src={gamePad} alt="3d-element" className='max-w-full' />
              <p>Video</p>
            </div>
          </td>
          <td className='px-4 py-2'>
          <div className='flex items-center sm:flex-col md:flex-col'>
              <img src={progressDownload} alt="statistics" className='max-w-full' />
              <p>13,587</p>
            </div>
          </td>
          <td className='px-4 py-2 text-center'>25 March 2024</td>
          <td className='px-4 py-2'>Canada</td>      
        </tr>
        
      </tbody>
      </table>
    </div>


  
   
</>

  )
}
