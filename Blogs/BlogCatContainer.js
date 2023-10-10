import React from 'react'

// getting the data of categories and function to set the blogs of category clicked 
function BlogCatContainer({ data, setState, setCatname }) {

  function handleClick(e, element) {
    e.preventDefault();
    setState(element.blogs)
    setCatname(element.name)
  }

  return (
    <div>

      <div className="d-flex justify-content-start align-items-center h5 fw-bold py-3 ">
        Categories
      </div>

      <div className="category">
        <ul>
          {data.map((ele, index) => (
            <li key={index}>
              <a onClick={(e) => handleClick(e, ele)}>
                {ele.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogCatContainer
