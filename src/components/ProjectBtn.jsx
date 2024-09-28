import React from 'react'
import {ArrowOutward, LinkSharp, SubdirectoryArrowLeft, SubdirectoryArrowRight, VrpanoSharp} from '@mui/icons-material';
import { Link, LinkIcon, Minus, SquareMinus } from 'lucide-react';
import drive from "../../public/googledrive.svg";

const ProjectBtn = (props) => {
  
  return (
    <>

    <span className='inline-flex border-b ml-4 py-2 px-4 text-slate-400 hover:text-green-400 font-medium transition-all duration-400 ease-in tracking-wide ' >
    {/* <span className='inline-flex border-b ml-4 py-2 px-4 text-slate-400 hover:text-green-400 font-medium hover:bg-green-400/20 rounded transition-all duration-400 ease-in tracking-wide ' > */}

        {/* <SubdirectoryArrowRight sx={{fontSize:24, strokeWidth:10,stroke:2}} className='text-green-500 mr-2 mb-1' /> */}
        <SquareMinus strokeWidth={2.5} className='-ml-1 w-4 h-4 mt-0.5'/> 
        {/* <ArrowOutward sx={{fontSize:24, strokeWidth:2.5, stroke:2.5, stroke:2.5}} className='text-slate-500 border-2 rounded-lg border-slate-500 p-1 w-4 h-4 mt-0.5'/>  */}
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