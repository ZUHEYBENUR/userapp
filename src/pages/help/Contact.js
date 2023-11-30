import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <h3>İletişim</h3>
      <form>
        <div>
          <label>E-mail:</label>
          <input type='text'/>
        </div>
        <div>
          <label>Message</label>
          <textarea></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact