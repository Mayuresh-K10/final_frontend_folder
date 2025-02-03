import React from 'react'
import { useSelector } from 'react-redux'
import MessageModel from '../MessageModel'

const CollegeMessage = () => {
  const collegeuser = useSelector((state)=>state.college);
  const collegeName = collegeuser?.university_name || localStorage.getItem('collegename');
  const collegeToken = collegeuser?.token || localStorage.getItem('collegeAccessToken');
  const collegeEmail = collegeuser?.official_email || localStorage.getItem('collegeemail');
  const collegeModel = collegeuser?.model || localStorage.getItem('CollegeModel');

  return (
   <>
      <MessageModel sender_email={collegeEmail} sender_name={collegeName} sender_token={collegeToken} sender_model={collegeModel} />

   </>
  )
}

export default CollegeMessage

//import {
//  Box,
//  Typography,
//  Card,
//  Button,
//  IconButton,
//  InputBase,
//} from "@mui/material";
//import { EmojiEmotions, AttachFile, Send } from "@mui/icons-material";
//import React, { useState } from "react";
//import { useSelector } from "react-redux";
//
//const CollegeMessages = () => {
//  const [selectedUser, setSelectedUser] = useState(null);
//  const [currentChat, setCurrentChat] = useState([]);
//  const [newMessage, setNewMessage] = useState("");
//  const user = useSelector((state) => state.newuser);
//  const loggedInUser = user?.name || "You";
//
//  const inbox = [
//    { name: "John Doe", message: "Hello! How are you?", id: 1 },
//    { name: "Jane Smith", message: "Please send me the report.", id: 2 },
//    { name: "Alice Brown", message: "Meeting at 3 PM.", id: 3 },
//    { name: "Bob Taylor", message: "Can you review this?", id: 4 },
//  ];
//
//  const dummyChats = {
//    1: [
//      { sender: "John Doe", text: "Hello! How are you?" },
//      { sender: loggedInUser, text: "I'm good, John! How about you?" },
//      { sender: "John Doe", text: "I'm good also" },
//    ],
//    2: [
//      { sender: "Jane Smith", text: "Please send me the report." },
//      { sender: loggedInUser, text: "Sure, give me a moment." },
//    ],
//    3: [
//      { sender: "Alice Brown", text: "Meeting at 3 PM." },
//      { sender: loggedInUser, text: "Got it, Alice. I'll be there." },
//    ],
//    4: [
//      { sender: "Bob Taylor", text: "Can you review this?" },
//      { sender: loggedInUser, text: "Sure, send it over." },
//    ],
//  };
//
//  const handleInboxClick = (user) => {
//    setSelectedUser(user);
//    setCurrentChat(dummyChats[user.id] || []);
//  };
//
//  const handleSendMessage = () => {
//    if (newMessage.trim() === "") return;
//    const updatedChat = [
//      ...currentChat,
//      { sender: loggedInUser, text: newMessage },
//    ];
//    setCurrentChat(updatedChat);
//    setNewMessage("");
//  };
//
//  return (
//    <Box
//      sx={{
//        width: "100%",
//        minHeight: "100vh",
//        background: "#f5f5f5",
//        padding: "2rem",
//        display: "flex",
//        gap: "1rem",
//        '@media (max-width:800px)':{
//          flexDirection:'column'
//        }
//      }}
//    >
//      {/* Left Side: Inbox */}
//      <Card
//        sx={{
//          width: "30%",
//          borderRadius: "16px",
//          background: "#fff",
//          height: "800px",
//          overflow: "hidden",
//          '@media (max-width:800px)':{
//            width:'100%'
//          }
//        }}
//      >
//        <Box
//          sx={{
//            display: "flex",
//            justifyContent: "space-between",
//            alignItems: "center",
//            padding: "1rem",
//          }}
//        >
//          <InputBase
//            placeholder="Search..."
//            sx={{
//              width: "100%",
//              background: "#f0f0f0",
//              borderRadius: "12px",
//              padding: "0.5rem 1rem",
//            }}
//          />
//        </Box>
//        <Box
//          sx={{
//            display: "flex",
//            justifyContent: "space-between",
//            padding: "0 1rem",
//          }}
//        >
//          <Button variant="text">All</Button>
//          <Button variant="text">Read</Button>
//          <Button variant="text">Unread</Button>
//        </Box>
//        <Box
//          sx={{
//            height: "calc(100% - 100px)",
//            overflowY: "auto",
//            padding: "1rem",
//          }}
//        >
//          {inbox.map((user) => (
//            <Card
//              key={user.id}
//              onClick={() => handleInboxClick(user)}
//              sx={{
//                padding: "1rem",
//                borderRadius: "12px",
//                marginBottom: "1rem",
//                cursor: "pointer",
//                background:
//                  selectedUser?.id === user.id ? "#e0e0e0" : "#f9f9f9",
//              }}
//            >
//              <Typography variant="h6" sx={{ fontWeight: "600" }}>
//                {user.name}
//              </Typography>
//              <Typography variant="body2" sx={{ color: "gray" }}>
//                {user.message}
//              </Typography>
//            </Card>
//          ))}
//        </Box>
//      </Card>
//
//      {/* Right Side: Chat */}
//      <Card
//        sx={{
//          width: "70%",
//          borderRadius: "16px",
//          background: "#fff",
//          height: "800px",
//          display: "flex",
//          flexDirection: "column",
//          justifyContent: "space-between",
//          '@media (max-width:800px)':{
//            width:'100%'
//          }
//        }}
//      >
//        {/* Chat Header */}
//        <Box
//          sx={{
//            padding: "1rem",
//            background: "#f0f0f0",
//            borderRadius: "16px 16px 0 0",
//          }}
//        >
//          <Typography variant="h6">
//            {selectedUser ? selectedUser.name : "Select a chat"}
//          </Typography>
//        </Box>
//
//        {/* Chat Messages */}
//        <Box
//          sx={{
//            flex: 1,
//            overflowY: "auto",
//            padding: "1rem",
//            background: "#fafafa",
//          }}
//        >
//          {selectedUser &&
//            currentChat.map((message, index) => (
//              <Box
//                key={index}
//                sx={{
//                  display: "flex",
//                  justifyContent:
//                    message.sender === loggedInUser
//                      ? "flex-end"
//                      : "flex-start",
//                  marginBottom: "1rem",
//                }}
//              >
//                <Box
//                  sx={{
//                    padding: "0.75rem 1rem",
//                    borderRadius: "12px",
//                    background:
//                      message.sender === loggedInUser ? "#4caf50" : "#e0e0e0",
//                    color: message.sender === loggedInUser ? "#fff" : "#000",
//                    maxWidth: "70%",
//                  }}
//                >
//                  <Typography>{message.text}</Typography>
//                </Box>
//              </Box>
//            ))}
//        </Box>
//
//        {/* Chat Input */}
//        {selectedUser && (
//          <Box
//            sx={{
//              padding: "1rem",
//              display: "flex",
//              alignItems: "center",
//              gap: "1rem",
//              borderTop: "1px solid #e0e0e0",
//            }}
//          >
//            <IconButton>
//              <EmojiEmotions />
//            </IconButton>
//            <IconButton>
//              <AttachFile />
//            </IconButton>
//            <InputBase
//              placeholder="Type your message..."
//              value={newMessage}
//              onChange={(e) => setNewMessage(e.target.value)}
//              sx={{
//                flex: 1,
//                background: "#f0f0f0",
//                borderRadius: "12px",
//                padding: "0.5rem 1rem",
//              }}
//            />
//            <IconButton onClick={handleSendMessage}>
//              <Send />
//            </IconButton>
//          </Box>
//        )}
//      </Card>
//    </Box>
//  );
//};
//
//export default CollegeMessages;
//