import { TimerOutlined } from '@mui/icons-material';
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Timer } from 'lucide-react';


const IconTooltip = (props) => {
  return (
  <>
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>{props.icon}</TooltipTrigger>
    <TooltipContent>
    {props.desc}
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
  </>  
    
  )
}

IconTooltip.defaultProps={
  icon:<TimerOutlined className="p-1 hover:bg-slate-800 rounded-md" sx={{ fontSize: 24 }} />,
  desc:"Project underdevelopment"
}
export default IconTooltip;