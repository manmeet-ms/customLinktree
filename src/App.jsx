import { React } from "react";
import './style.css'
import logo from './assets/logo.svg'
import Card from "../src/components/Card.jsx";
import SocialIconsCol from "./components/SocialIcons.jsx";
import { LinkedIn, GitHub, Mail, Instagram, Launch } from '@mui/icons-material';

let FiverrIco = <svg className="text-gray-300 w-6 h-6 hover:text-green-300" fill="CurrentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M30.7087,4.5H23.2355c-5.4473,0-10.1982,4.2944-9.88,12.0757H7.9886v7.2454h5.7247V43.5H22.211V23.8211h8.8555V43.5h8.9449V16.5758H22.7478V14.6973a2.8052,2.8052,0,0,1,2.8484-2.9518h5.1125Z" /></svg>
let InstagramIco = <svg className="text-gray-300 w-5 h-5 hover:text-pink-300" fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM7.99748 12.0041C7.99748 14.2125 9.78776 16.0028 11.9962 16.0028C14.2047 16.0028 15.995 14.2125 15.995 12.0041C15.995 9.79557 14.2047 8.00529 11.9962 8.00529C9.78776 8.00529 7.99748 9.79557 7.99748 12.0041ZM5.836 12.0041C5.836 8.60181 8.594 5.84381 11.9962 5.84381C15.3984 5.84381 18.1564 8.60181 18.1564 12.0041C18.1564 15.4062 15.3984 18.1642 11.9962 18.1642C8.594 18.1642 5.836 15.4062 5.836 12.0041ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z" /></svg>

function App() {
  return (

    <main className=" flex flex-col space-y-8 bg-slate-900 px-3">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-0 mt-auto w-full">
              </div>
              <a className="inline-flex items-center">
                <img alt="logo" src={logo} className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-gray-500 text-xl mt-1">Nice to meet. I am</span>
                  <span className="text-4xl title-font font-bold text-white">Manmeet Singh</span>
                </span>
              </a>
              <span className="text-gray-500 mt-2">
              Bridging the gap between vision and reality with my strategic solutions.
              </span>
            </div>
          </div>
        </div>
      </section>
      <hr className="opacity-10" />
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-4">

          <Card urlink="https://manmeets.me" icon={<Launch />} title="See my portfolio" desc=" Explore a showcase of my work and skills. Get a sense of my design style and experience." />
          <Card urlink="https://www.instagram.com/manmeet.s__/" icon={<Launch />} title="Consult in DM" desc="Need expert advice or guidance on a project? Feel free to reach out and send me a direct message. " />
          <Card urlink="https://fiverr.com/wavewalker777/" icon={<Launch />} title="Freelancing services" desc="I offer my expertise in various areas. Let's connect to discuss your project and see how I can contribute." />
          <Card urlink="https://github.com/manmeet-ms/customLinktree" icon={<Launch />} title="Get this template" desc="Contact me for details and learn how you can acquire this template for your own use." />
        </div>
        <nav className="flex flex-col space-y-6 py-10 ml-3 bg-gray-800 bg-opacity-50 px-1 rounded-full  justify-center items-around align-around">
          <SocialIconsCol url="https://github.com/manmeet-ms/" name="GitHub" icon={<GitHub />} hoverColor="violet" />
          <SocialIconsCol url="https://fiverr.com/wavewalker777/" name="Fiverr" icon={FiverrIco} hoverColor="green" />
          <SocialIconsCol url="https://instagram.com/manmeet.s__" name="Instagram" icon={InstagramIco} hoverColor="pink" />
          <hr className="opacity-10 w-1/2 mx-auto" />
          <SocialIconsCol url="https://www.linkedin.com/in/manmeets-/" name="LinkedIn" icon={<LinkedIn />} hoverColor="blue" />
          <SocialIconsCol url="mailto:manmeets.zsh@gmail.com" name="Contact" icon={<Mail />} hoverColor="violet" />
        </nav>

      </div>

      {/* actual footer below */}
      <footer className="text-gray-500 body-font bg-gray-800 bg-opacity-50 rounded-tl-2xl rounded-tr-2xl">
        {/* <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
          <a className="text-gray-600">
            <SocialIcons name="Instagram" icon={<Instagram />} /></a>
          <a className="ml-3 text-gray-600">
            <SocialIcons name="GitHub" icon={<GitHub />} /></a>
          <a className="ml-3 text-gray-600">
            <SocialIcons name="LinkedIn" icon={<LinkedIn />} /></a>
          <a className="ml-3 text-gray-600">
            <SocialIcons name="Contact" icon={<Mail />} /></a>
        </span> */}
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          {/* <hr className="opacity-5" /> */}
          <span className=" sm:mt-0 mt-2 w-full sm:text-center text-center text-gray-500 text-sm">Designed and developed by Manmeet Singh. Inspired by Linktree</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
