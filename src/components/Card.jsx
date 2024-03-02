import React from 'react'
const Card = (props) => {

  return (
    <>
    <a href={props.urlink} >
      <section className="text-slate-500 bg-slate-900 body-font">
        <div className="container bg-slate-800 bg-opacity-50  rounded-xl mx-auto">
          <div className="flex flex-wrap sm:-m-4 md:space-y-0 space-y-6">
            <div className="px-4 py-6 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-slate-800 text-indigo-400 mb-4 flex-shrink-0">
                {props.icon}
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-slate-200 text-lg title-font font-medium mb-1">{props.title}</h2>
                <p className="leading-relaxed text-sm">{props.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </a>
    </>
  )
}


export default Card
Card.defaultProps = {
  title: "Card #",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus praesentium perspiciatis odio.",
  icon:''
}
