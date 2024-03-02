import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Card = (props) => {

  return (
    <>
    <a href={props.urlink} >
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container bg-gray-800 bg-opacity-50 rounded-xl mx-auto">
          <div className="flex flex-wrap sm:-m-4 md:space-y-0 space-y-6">
            <div className="px-4 py-6 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                {props.icon}
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-200 text-lg title-font font-medium mb-1">{props.title}</h2>
                <p className="leading-relaxed text-base">{props.desc}</p>
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
}
