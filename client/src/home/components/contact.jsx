import React from 'react'
import '../../styles/contactUs.css'
import ContactImg from '../../assets/images/contactusImg.svg'

function Contact() {
  return (
    <div className="mainContainer">
		
		<div className="belowHeading">
		<div className="partOne">
			<img src={ContactImg} alt="imageError" />
		</div>
		<div className="partTwo">
			<form>
				<div className='nameInput'>
				<input type="text" placeholder='Your Name' />
				</div>
				<div className='emailInput'>
				<input type="text" placeholder='Your Email' />
				</div>
				<div className='textAre'>
				<textarea type="text" placeholder='Type your message' cols="30" rows="10" />
				</div>
				<div className='submitButton'>
					<input type="submit" value='Send Message' />
				</div>
			</form>
		</div>
		</div>
	</div>
  )
}

export default Contact
