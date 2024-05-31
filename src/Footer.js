import React from 'react'

function Footer(props) {
  return (
    <div className='footer'>
      <h3 id="footertext">{props.headings1}</h3>
      <h2 id="footertext1">{props.headings2}</h2>
      <button id="Fbtn">{props.button}</button>
</div>
  )
}

export default Footer
