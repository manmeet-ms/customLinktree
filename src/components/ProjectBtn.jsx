import React from 'react'
import {ArrowOutward, LinkSharp, SubdirectoryArrowLeft, SubdirectoryArrowRight, VrpanoSharp} from '@mui/icons-material';
import { Link, LinkIcon, Minus, SquareMinus } from 'lucide-react';

const ProjectBtn = (props) => {
  
  return (
    <>

    <span className='inline-flex hover:bg-green-800/20 hover:rounded-md border-b border-slate-900 hover:border-slate-900/0 ml-4 py-2 px-4 text-slate-400 hover:text-green-400 transition-all duration-400 ease-in tracking-wide ' >
    {/* <span className='inline-flex border-b ml-4 py-2 px-4 text-slate-400 hover:text-green-400 font-medium hover:bg-green-400/20 rounded transition-all duration-400 ease-in tracking-wide ' > */}

        <SquareMinus strokeWidth={2.5} className='text-green-950 w-4 h-4 mt-0.5'/> 
        <a  className='container flex justify-between ml-2 ' href={props.link}>
          {props.name}
          <div className="flex gap-1">
            {props.icons}
            {/* {props.inDrive?<img src={drive} className='w-4'/>:props.icons} */}
          </div>

          
        </a>
        </span>
        </>
  )

}

ProjectBtn.defaultProps ={
    name:"Project Name",
    link:"#",
    icons:<LinkSharp sx={{fontSize:18}} className='w-4 mt-1'/>
};
export default ProjectBtn;