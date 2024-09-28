import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";
// import drive from '../public/googledrive.svg'
// import figma from '../public/figma.svg'
import {Gdrive, Figma} from './components/colorIco'
import "./App.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button"
import ProjectBtn from "./components/ProjectBtn";
import { Link, Minus } from "lucide-react";
import { TimerOutlined, Timer10, TimeToLeave } from "@mui/icons-material";

function App() {


  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <body className="px-4">
          <h2 className="mt-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors"> Advanced Project Index </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-2 text-slate-400"> Consists of projects made by Manmeet Singh (<span className="border-b-2 border-dashed border-slate-500"><span className="font-bold">@</span><a href="#" className="font-semibold">manmeet-ms</a></span>) </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >
                <h4 className="text-2xl font-semibold tracking-tight"> Web Projects</h4> 
                {/* &nbsp;&nbsp;&nbsp;popover-infobox */}

              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  <Accordion className="px-6 -mt-4 -mb-2" type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >Wordpress Websites
                        
                        {/* &nbsp;&nbsp;&nbsp;popover-infobox */}


                      </AccordionTrigger>
                      <AccordionContent> 
                        <div className="flex flex-col  -mt-2">
                          <ProjectBtn icons={<><Gdrive/></>} name="ImpactHQ (Business)" link="#" />
                          <ProjectBtn icons={<><Gdrive/></>} name="Shopphoria (E-commerce)" link="#" />
                          <ProjectBtn icons={<><Gdrive/></>} name="DevDiary (Personal Portfolio)" link="#" />
                          <ProjectBtn icons={<><Gdrive/></>} name="LeadGen (Marketing Agency)" link="#" />
                          <ProjectBtn icons={<><Gdrive/></>} name="RxReady (Medical Store)" link="#" />
                          <ProjectBtn icons={<><Gdrive/></>} name="Newsreader (News)" link="#" />
                          <ProjectBtn icons={<><Gdrive/></>} name="RiskRadar (Finance Consultancy)" link="#" />
                          <ProjectBtn icons={<><Gdrive/></>} name="Labofy (Medical store/Appointment booking)" link="#" />
                          <ProjectBtn icons={<><Gdrive/></>} name="JethiTech (Agency/Consulting)" link="#" />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion className="px-6 -mt-4 -mb-2" type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >Frontend UIs
                        
                        {/* &nbsp;&nbsp;&nbsp;popover-infobox */}


                      </AccordionTrigger>
                      <AccordionContent> 
                        <div className="flex flex-col -mt-2 ">

                          <ProjectBtn icons={<div><TimerOutlined className="p-1 hover:bg-slate-800 rounded-md" sx={{ fontSize: 24 }} /></div>} name="NFT Marketplace Dashboard UI" link="#" />
                          <ProjectBtn icons={<div><TimerOutlined className="p-1 hover:bg-slate-800 rounded-md" sx={{ fontSize: 24 }} /></div>} name="Burning Notes UI" link="#" />
                          <ProjectBtn icons={<div><TimerOutlined className="p-1 hover:bg-slate-800 rounded-md" sx={{ fontSize: 24 }} /></div>} name="Dashboard UI" link="#" />
                          <ProjectBtn icons={<div><TimerOutlined className="p-1 hover:bg-slate-800 rounded-md" sx={{ fontSize: 24 }} /></div>} name="Currency converter UI" link="#" />
                          <ProjectBtn icons={<div><TimerOutlined className="p-1 hover:bg-slate-800 rounded-md" sx={{ fontSize: 24 }} /></div>} name="RPG Level Up UI " link="#" />



                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion className="px-6 -mt-4 -mb-2" type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >Full Stack Projects
                        
                        {/* &nbsp;&nbsp;&nbsp;popover-infobox */}


                      </AccordionTrigger>
                      <AccordionContent> 
                        <div className="flex flex-col">
                          I am working on it
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>


          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >
                <h4 className="text-2xl font-semibold tracking-tight"> UI Designs</h4>
                 
                 {/* &nbsp;&nbsp;&nbsp;popover-infobox-tooltip */}

                </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  <ProjectBtn name="namecategory" link="#" icons={<><Gdrive/><Figma/></>} />
                  <ProjectBtn name="namecategory" link="#" icons={<><Gdrive/><Figma/></>} />
                  <ProjectBtn name="namecategory" link="#" icons={<><Gdrive/><Figma/></>} />
                  <ProjectBtn name="namecategory" link="#" icons={<><Gdrive/><Figma/></>} />
                  <ProjectBtn name="namecategory" link="#" icons={<><Gdrive/><Figma/></>} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>


         
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >
                <h4 className="text-2xl font-semibold tracking-tight"> Others</h4>
                 
                 {/* &nbsp;&nbsp;&nbsp;popover-infobox */}

                </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  <ProjectBtn icons={<div><TimerOutlined className="p-1 hover:bg-slate-800 rounded-md" sx={{ fontSize: 24 }} /></div>} name="Logo Designs" link="#" />
                  <ProjectBtn icons={<div><TimerOutlined className="p-1 hover:bg-slate-800 rounded-md" sx={{ fontSize: 24 }} /></div>} name="YT-Clipper CLI" link="#" />
                  <ProjectBtn icons={<div><TimerOutlined className="p-1 hover:bg-slate-800 rounded-md" sx={{ fontSize: 24 }} /></div>} name="Price Tracker with Discord Notifications" link="#" />
                  <ProjectBtn icons={<div><TimerOutlined className="p-1 hover:bg-slate-800 rounded-md" sx={{ fontSize: 24 }} /></div>} name="Personal Portfolio" link="#" />
                  <ProjectBtn icons={<><Gdrive/></>} name="Discord servers" link="#" />
                  <ProjectBtn icons={<><Gdrive/></>} name="Instagram post designs" link="#" />
                  <ProjectBtn icons={<><Gdrive/></>} name="namecategory" link="#" />

                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>


        </body>
        {/* <p className="py-24 text-slate-700">
          ----------------------------------------------------------------------
        </p>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl"> {" "} The Joke Tax Chronicles{" "} </h1>
        <a href="#" className="font-medium text-primary underline underline-offset-4"> {" "} a brilliant plan{" "} </a>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"> {" "} The Joke Tax{" "} </h3>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"> {" "} Jokester's Revolt{" "} </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6"> Once upon a time, in a far-off land, there was a very king who{" "} </p> */}
        
        <a href="https://www.buymeacoffee.com/manmeets"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=manmeets&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
      </ThemeProvider>
    </>
  );
}

export default App;
