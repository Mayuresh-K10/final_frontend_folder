import React from 'react'
import { useSelector } from 'react-redux'
import MessageModel from '../../Company/MessageModel'

const Messages = () => {
  const jobSeeker = useSelector((state)=>state.jobseeker);
  const jobSeekerId = jobSeeker?.userid || localStorage.getItem('jobseekeruserid');
  const jobSeekerToken = jobSeeker?.unique_token || localStorage.getItem('jobaccessToken');
  const jobSeekerEmail = jobSeeker?.useremail || localStorage.getItem('jobseekeremail');
  const jobSeekerName = jobSeeker?.first_name || localStorage.getItem('jobseekername');
  const jobSeekerModel = jobSeeker?.model || localStorage.getItem('JobseekerModel')


  return (
    <>
        <MessageModel sender_email={jobSeekerEmail} sender_name={jobSeekerName} sender_token={jobSeekerToken} sender_model={jobSeekerModel} />
    </>
  )
}

export default Messages