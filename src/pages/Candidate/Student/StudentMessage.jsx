import React from 'react';
import { useSelector } from 'react-redux';
import MessageModel from '../../Company/MessageModel';

const StudentMessage = () => {
  const newuser = useSelector((state)=>state.newuser);
  const StudentName = newuser?.firstname || localStorage.getItem('newusername');
  const StudentEmail = newuser?.email || localStorage.getItem('newuseremail');
  const StudentToken = newuser?.unique_token || localStorage.getItem('newaccessToken');
  const StudentModel = newuser?.model || localStorage.getItem('newuserModel');

  return (
    <>
       <MessageModel sender_email={StudentEmail} sender_name={StudentName} sender_token={StudentToken} sender_model={StudentModel} />
    </>
  )
}

export default StudentMessage