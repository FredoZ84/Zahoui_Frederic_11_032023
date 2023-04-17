import { useState } from 'react'

function Collapse({ title, description }) {
  const iClass = 'fa-solid '
  const [show, setShow] = useState(false)
  const [arrowClass, setArrowClass] = useState('fa-chevron-down')
 // const [collapseHeadClass, setCollapseHead] = useState('collapse_head close')

  function switchContent() {
    setShow(!show)
    setArrowClass(show ? 'fa-chevron-down' : 'fa-chevron-up')
    //setCollapseHead(show ? 'collapse_head close' : 'collapse_head open' )
  }

  return (
    <div className="collapse">
      <div className="collapse_head " onClick={() => switchContent()}>
        <h3>{title}</h3>
        <i className={iClass + arrowClass}></i>
      </div>
      <div
        className="collapse_description primary_color"
        style={{ display: show ? 'block' : 'none' }}
      >
        {description[0].type === 'li' ? (
          <ul>{description}</ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  )
}

export default Collapse
