import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";

import { Gdrive, Figma } from './components/colorIco'
import "./App.css";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button"
import ProjectBtn from "./components/ProjectBtn";
import { Coffee, Download, Link, Link2, Minus } from "lucide-react";
import { TimerOutlined, Timer10, TimeToLeave, DownloadDone, AddToDrive } from "@mui/icons-material";
import IconTooltip from "./components/IconTooltip";

function App() {


  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <body className="px-4">
          <div className="flex justify-between">
            <h2 className=" mt-4  text-3xl transition-colors"> Advanced Project Index </h2>
            <div className="inline-flex gap-1 my-auto">
              <Download strokeWidth={3} className="mt-2 w-4" />
              <Gdrive className="mt-2 bg-slate-900/0 border border-slate-900/0 hover:bg-slate-900/0 hover:border-slate-900/0" />
              <Coffee strokeWidth={3} className="mt-2 w-4" />

            </div>
            {/* sidebar type */}
            {/* <div className="absolute right-0 top-64 flex flex-col gap-1 justify-center align-center bg-slate-800 rounded-tl-md rounded-bl-md py-2 pl-2 pr-1">
     <Download strokeWidth={3} className="w-6 hover:bg-slate-800 p-1 border border-slate-700/0 hover:border-slate-700 rounded-md" />
     <Gdrive className=""/>
     <Coffee strokeWidth={3} className="w-6 hover:bg-slate-800 p-1 border border-slate-700/0 hover:border-slate-700 rounded-md"/>

     </div> */}
          </div>
          <p className="text-sm leading-6 mt-2 text-slate-400">
            Projects by Manmeet Singh ( <a href=""><span className="mono ">
              @manmeet-ms</span></a> ).
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>Explore the categorized content below or use the <Gdrive className='inline-flex -mt-0.5 bg-slate-800/80 border border-slate-600/30 rounded-md' /> above for all demos and mockups. </li>
              <li>Click the  <Link2 strokeWidth={3} className='text-slate-300 p-1 inline-flex -mt-0.5 bg-slate-800/80 border border-slate-600/30 rounded-md' /> next to each project to view live projects.</li>

            </ul>

          </p>
          <div className="w-full border border-dashed mt-4" ></div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >
                <h4 className="text-2xl font-semibold "> Web Projects</h4>
                {/* &nbsp;&nbsp;&nbsp;popover-infobox */}

              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  <Accordion className="px-6 -mb-2" type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >Wordpress Websites
                        {/* &nbsp;&nbsp;&nbsp;popover-infobox */}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col">
                          <ProjectBtn icons={<><Gdrive /></>} name="ImpactHQ (Business)" link="#" />
                          <ProjectBtn icons={<><Gdrive /></>} name="Shopphoria (E-commerce)" link="#" />
                          <ProjectBtn icons={<><Gdrive /></>} name="DevDiary (Personal Portfolio)" link="#" />
                          <ProjectBtn icons={<><Gdrive /></>} name="LeadGen (Marketing Agency)" link="#" />
                          <ProjectBtn icons={<><Gdrive /></>} name="RxReady (Medical Store)" link="#" />
                          <ProjectBtn icons={<><Gdrive /></>} name="Newsreader (News)" link="#" />
                          <ProjectBtn icons={<><Gdrive /></>} name="RiskRadar (Finance Consultancy)" link="#" />
                          <ProjectBtn icons={<><Gdrive /></>} name="Labofy (Medical store/Appointment booking)" link="#" />
                          <ProjectBtn icons={<><Gdrive /></>} name="JethiTech (Agency/Consulting)" link="#" />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion className="px-6 -mb-2" type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >Frontend UIs
                        {/* &nbsp;&nbsp;&nbsp;popover-infobox */}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col ">

                          <ProjectBtn icons={<><IconTooltip /><Link2 strokeWidth={2.5} className='p-1 inline-flex hover:bg-slate-700/80 border border-slate-500/0 hover:border-slate-500/30 rounded-md' /></>} name="Burning Notes" link="#" />
                          <ProjectBtn icons={<><IconTooltip /><Link2 strokeWidth={2.5} className='p-1 inline-flex hover:bg-slate-700/80 border border-slate-500/0 hover:border-slate-500/30 rounded-md' /></>} name="NFT Marketplace Dashboard" link="#" />
                          <ProjectBtn icons={<><IconTooltip /><Link2 strokeWidth={2.5} className='p-1 inline-flex hover:bg-slate-700/80 border border-slate-500/0 hover:border-slate-500/30 rounded-md' /></>} name="Currency converter" link="#" />
                          <ProjectBtn icons={<><IconTooltip /><Link2 strokeWidth={2.5} className='p-1 inline-flex hover:bg-slate-700/80 border border-slate-500/0 hover:border-slate-500/30 rounded-md' /></>} name="RPG Level Up UI " link="#" />
                          <ProjectBtn icons={<><IconTooltip /><Link2 strokeWidth={2.5} className='p-1 inline-flex hover:bg-slate-700/80 border border-slate-500/0 hover:border-slate-500/30 rounded-md' /></>} name="Productivity Dashboard" link="#" />



                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion className="px-6 -mb-2" type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >Full Stack Projects
                        {/* &nbsp;&nbsp;&nbsp;popover-infobox */}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col">
                          Work in progress!
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion className="px-6 -mb-2" type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >Others
                        {/* &nbsp;&nbsp;&nbsp;popover-infobox */}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col">
                          <ProjectBtn icons={<><Link2 strokeWidth={2.5} className='p-1 inline-flex hover:bg-slate-700/80 border border-slate-500/0 hover:border-slate-500/30 rounded-md' /></>} name="Front end mentor solutions" link="#" />
                          <ProjectBtn icons={<><Link2 strokeWidth={2.5} className='p-1 inline-flex hover:bg-slate-700/80 border border-slate-500/0 hover:border-slate-500/30 rounded-md' /></>} name="Quotes API PWA Notifications" link="#" />

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
                <h4 className="text-2xl font-semibold"> UI Designs</h4>

                {/* &nbsp;&nbsp;&nbsp;popover-infobox-tooltip */}

              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  <ProjectBtn name="Payment App" link="#" icons={<><Gdrive /><Figma /></>} />
                  <ProjectBtn name="Skill-up platform" link="#" icons={<><Gdrive /><Figma /></>} />
                  <ProjectBtn name="Expense Tracking App" link="#" icons={<><Gdrive /><Figma /></>} />
                  <ProjectBtn name="Inventory Management Dashboard" link="#" icons={<><Gdrive /><Figma /></>} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>



          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-lg hover:text-green-400 transition-all duration-300 ease-in " >
                <h4 className="text-2xl font-semibold "> Others</h4>


                {/* &nbsp;&nbsp;&nbsp;popover-infobox */}

              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  <ProjectBtn icons={<Gdrive />} name="Logo Designs" link="#" />
                  <ProjectBtn icons={<><Gdrive /></>} name="Discord servers" link="#" />
                  <ProjectBtn icons={<><Gdrive /></>} name="Gig Thumbnails" link="#" />
                  {/* <ProjectBtn icons={<Gdrive />} name="Price Tracker with Discord Notifications" link="#" /> */}
                  <ProjectBtn icons={<><Gdrive /></>} name="Social Media post designs" link="#" />
                  {/* <ProjectBtn icons={<Gdrive />} name="YT-Clipper CLI" link="#" /> */}
                  <ProjectBtn icons={<Gdrive />} name="Personal Portfolio" link="#" />

                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>


        </body>
        {/* <p className="py-24 text-slate-700">
     ----------------------------------------------------------------------
    </p>
    <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl"> {" "} The Joke Tax Chronicles{" "} </h1>
    <a href="#" className="font-medium text-primary underline underline-offset-4"> {" "} a brilliant plan{" "} </a>
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold "> {" "} The Joke Tax{" "} </h3>
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold "> {" "} Jokester's Revolt{" "} </h3>
    <p className="leading-7 [&:not(:first-child)]:mt-6"> Once upon a time, in a far-off land, there was a very king who{" "} </p> */}

        {/* <a href="https://www.buymeacoffee.com/manmeets"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=manmeets&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a> */}
      </ThemeProvider>
    </>
  );
}

export default App;
