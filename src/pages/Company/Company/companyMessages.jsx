import React from 'react'
import MessageModel from '../MessageModel'
import { useSelector } from "react-redux";

const CompanyMessages = () => {
  const companyuser = useSelector((state)=>state.company);
  const companyToken = companyuser.token || localStorage.getItem('companyaccessToken');
  const companyName = companyuser.company_name || localStorage.getItem('companyname');
  const companyEmail = companyuser.official_email || localStorage.getItem('companyEmail');
  const companyModel = companyuser.model || localStorage.getItem('model');

  return (
    <>
    <MessageModel sender_email={companyEmail} sender_name={companyName} sender_token={companyToken} sender_model={companyModel} />
    </>
  )
}

export default CompanyMessages


//import {
//  Box,
//  Typography,
//  Menu,
//  MenuItem,
//  InputBase,
//  Divider,
//  TextField,
//  Button,
//  IconButton,
//  Card,
//  Grid,
//  List,
//  ListItem,
//  Badge,
//  Paper,
//} from "@mui/material";
//import {
//  AttachFile,
//  EmojiEmotions,
//  Image,
//  Delete,
//  MoreVert,
//  Search,
//} from "@mui/icons-material";
//import DeleteIcon from "@mui/icons-material/Delete";
//import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";
//import axios from "axios";
//import debounce from "lodash.debounce";
//import AttachFileIcon from '@mui/icons-material/AttachFile';
//import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
//import EmojiPicker from 'emoji-picker-react';
//
//const CompanyMessages = () => {
//  const [anchorEl, setAnchorEl] = useState(null);
//  const [searchValue, setSearchValue] = useState("");
//  const [filteredContacts, setFilteredContacts] = useState([]);
//  const [messages, setMessages] = useState([]);
//  const [filter, setFilter] = useState("all");
//  const [isLoading, setIsLoading] = useState(false);
//  const [recipientEmail, setRecipientEmail] = useState(null); // New recipient state
//  const [chats, setChats] = useState([]);
//  const [newMessage, setNewMessage] = useState('');
//  const [attachments, setAttachments] = useState([]);
//  const [loading, setLoading] = useState(false);
//  const [selectedRecipient, setSelectedRecipient] = useState(null);
//  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//
//  const handleAddEmoji = (emojiObject) => {
//    setNewMessage((prevMessage) => prevMessage + emojiObject.emoji);
//    setShowEmojiPicker(false); // Close picker after selecting an emoji
//  };
//
//  const handleAttachmentChange = (event) => {
//    const files = Array.from(event.target.files);
//    setAttachments(files);
//  };
//
//
//
//  const user = useSelector((state) => state.company);
//  const useremail = user?.official_email || localStorage.getItem("companyEmail");
//  const uniqueToken = user?.token || localStorage.getItem("companyaccessToken");
//
//  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//  const handleMenuClose = () => setAnchorEl(null);
//
//  const fetchMessages = async () => {
//    setIsLoading(true);
//    try {
//      const response = await axios.get(
//        `${process.env.REACT_APP_BACKEND_DJANGO_URL}/inbox/?email=${useremail}&filter=${filter}`,
//        { headers: { Authorization: `Bearer ${uniqueToken}` } }
//      );
//      setMessages(response.data.messages || []);
//    } catch (error) {
//      console.error("Message fetch error:", error.response?.data || error.message);
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  const searchUsers = debounce(async (query) => {
//    setIsLoading(true);
//    try {
//      const response = await axios.get(
//        `${process.env.REACT_APP_BACKEND_DJANGO_URL}/search-contacts/?q=${query}&sender_email=${useremail}`,
//        { headers: { Authorization: `Bearer ${uniqueToken}` } }
//      );
//      setFilteredContacts(response.data.contacts || []);
//    } catch (error) {
//      console.error("Search error:", error.response?.data || error.message);
//      setFilteredContacts([]);
//    } finally {
//      setIsLoading(false);
//    }
//  }, 500);
//
//  useEffect(() => {
//    fetchMessages();
//  }, [filter]);
//
//  const handleFilterChange = (newFilter) => {
//    setFilter(newFilter);
//    setFilteredContacts([]);
//  };
//
//  const displayedEmails = searchValue
//    ? filteredContacts.map((contact) => ({
//      sender: contact.first_name || contact.company_name,
//      email: contact.email || contact.official_email || null, // Ensure it defaults to `null` if not present
//    }))
//    : messages;
//
//  const [recipient, setRecipient] = useState(null); // State to store recipient's email
//
//  const fetchChatMessages = async (recipient) => {
//    if (!recipient) return; // Exit if no recipient is set
//    try {
//      setIsLoading(true);
//      const response = await axios.get(`${process.env.REACT_APP_BACKEND_DJANGO_URL}/get-messages/`, {
//        params: { sender_email: useremail, recipient_email: recipient },
//        headers: { Authorization: `Bearer ${uniqueToken}` },
//      });
//
//      console.log("Fetched chats:", response.data);
//      setChats(response.data.messages || []);
//    } catch (error) {
//      console.error("Error fetching messages:", error);
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//
//  const handleUserClick = (email) => {
//    setRecipient(email); // Update recipient based on user click
//  };
//
//  const sendMessage = async () => {
//    if (!newMessage.trim() && attachments.length === 0) {
//      alert("Please enter a message or select an attachment."); // User feedback
//      return;
//    }
//
//    const formData = new FormData();
//    formData.append("sender_email", useremail);
//    formData.append("recipient_email", recipient); // Use state for recipient
//    formData.append("content", newMessage.trim());
//
//    attachments.forEach(file => {
//      formData.append("attachments", file);
//    });
//
//    try {
//      await axios.post(`${process.env.REACT_APP_BACKEND_DJANGO_URL}/send-message/`, formData, {
//        headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${uniqueToken}` },
//      });
//      setNewMessage("");
//      setAttachments([]); // Reset attachments to an empty array
//      fetchChatMessages(recipient); // Fetch updated chat messages
//    } catch (error) {
//      console.error("Error sending message:", error);
//      alert("Failed to send message. Please try again."); // User feedback
//    }
//  };
//
//
//  useEffect(() => {
//    if (recipient) {
//      fetchChatMessages(recipient);
//
//    }
//  }, [recipient]); // Dependency on recipient
//
//  // Function to handle user clicks
//
//
//
//  return (
//    <Box
//    sx={{
//      width: "100%",
//      minHeight: "100vh",
//      background: "#f5f5f5",
//      padding: "2rem",
//      display: "flex",
//    }}
//  >
//    <Card sx={{ width: "100%", borderRadius: "8px", overflow: "hidden" }}>
//      <Grid container spacing={2}>
//        {/* Sidebar with Messages List */}
//        <Grid item xs={12} md={4}>
//          <Box
//            sx={{
//              backgroundColor: "#313893",
//              color: "white",
//              height: "100%",
//              padding: "1rem",
//              overflowY: "auto",
//            }}
//          >
//            <Box
//              display="flex"
//              justifyContent="space-between"
//              alignItems="center"
//              mb={2}
//            >
//              <Typography variant="h6" fontWeight={500}>
//                Inbox
//              </Typography>
//              <IconButton onClick={handleMenuOpen} color="inherit">
//                <MoreVert />
//              </IconButton>
//              <Menu
//                anchorEl={anchorEl}
//                open={Boolean(anchorEl)}
//                onClose={handleMenuClose}
//              >
//                <MenuItem onClick={() => handleFilterChange("all")}>All</MenuItem>
//                <MenuItem onClick={() => handleFilterChange("read")}>Read</MenuItem>
//                <MenuItem onClick={() => handleFilterChange("unread")}>Unread</MenuItem>
//              </Menu>
//            </Box>
//
//            {/* Search Bar */}
//            <Paper component="form" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//              <InputBase
//                sx={{ ml: 1, flex: 1 }}
//                placeholder="Search contacts"
//                value={searchValue}
//                onChange={(e) => {
//                  setSearchValue(e.target.value);
//                  searchUsers(e.target.value);
//                }}
//              />
//              <IconButton type="submit" sx={{ p: "10px" }} onClick={() => searchUsers(searchValue)}>
//                <Search />
//              </IconButton>
//            </Paper>
//
//            {/* Displaying Email List */}
//            <List sx={{ maxHeight: "60vh", overflowY: "auto" }}>
//              {isLoading ? (
//                <Typography align="center" sx={{ mt: 2, fontStyle: "italic" }}>
//                  Loading...
//                </Typography>
//              ) : displayedEmails.length > 0 ? (
//                displayedEmails.map((email, index) => (
//                  <ListItem
//                    key={index}
//                    onClick={() => {
//                      const recipientEmail = email?.recipient?.email || email?.recipient_email; // Adjust if email is nested
//                      setSelectedRecipient(recipientEmail);
//                      fetchChatMessages(recipientEmail);
//                      handleUserClick(recipientEmail);
//                      sendMessage(recipientEmail);
//                    }}
//                    sx={{ p: 2, borderRadius: "8px", backgroundColor: "#eee", mb: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
//                  >
//                    <Typography fontWeight="bold" color="text.primary">{email.recipient}</Typography>
//                    <Typography variant="body2" color="text.secondary">{email.content}</Typography>
//                  </ListItem>
//                ))
//              ) : (
//                <Typography align="center" sx={{ mt: 2, fontStyle: "italic" }}>
//                  No contact or message found
//                </Typography>
//              )}
//            </List>
//          </Box>
//        </Grid>
//
//
//        {/* Message Content View */}
//        <Grid item xs={12} md={8}>
//          <Box p={3}>
//            <Box flex={1} overflow="auto" p={2} sx={{ backgroundColor: '#fafafa', maxHeight: '60vh' }}>
//              {isLoading ? (
//                <Typography>Loading...</Typography>
//              ) : Array.isArray(chats) && chats.length > 0 ? (
//                <List>
//                  {chats.map((msg, index) => (
//                    <ListItem
//                      key={index}
//                      alignItems="flex-start"
//                      sx={{ justifyContent: msg.isSender ? 'flex-end' : 'flex-start' }}
//                    >
//                      <Box flex={1} sx={{ textAlign: msg.isSender ? 'right' : 'left' }}>
//                        <Typography fontWeight="bold">
//                          {msg.isSender ? msg.sender_email : msg.recipient_email}
//                        </Typography>
//                        <Typography variant="body2">{msg.content}</Typography>
//
//                        {/* Render attachments if they exist */}
//                        {msg.attachments && msg.attachments.length > 0 && (
//                          <Box mt={1}>
//                            <Typography variant="body2" fontWeight="bold">Attachments:</Typography>
//                            {msg.attachments.map((attachment, attIndex) => (
//                              <Box key={attIndex} mt={0.5}>
//                                <a href={attachment.file_url} target="_blank" rel="noopener noreferrer">
//                                  {attachment.file_url.split('/').pop()} {/* Display file name */}
//                                </a>
//                              </Box>
//                            ))}
//                          </Box>
//                        )}
//                      </Box>
//                    </ListItem>
//                  ))}
//                </List>
//              ) : (
//                <Typography>No messages</Typography>
//              )}
//            </Box>
//
//
//            <Divider sx={{ my: 2 }} />
//
//            {/* Compose Reply */}
//            <Box>
//              <TextField
//                fullWidth
//                label="Reply"
//                multiline
//                rows={4}
//                value={newMessage}
//                onChange={(e) => setNewMessage(e.target.value)}
//                placeholder="Type your message here..."
//                variant="outlined"
//                sx={{ mb: 2 }}
//              />
//
//          
//              <Box display="flex" alignItems="center" gap={1}>
//                {/* Attachments Button */}
//                <IconButton component="label">
//                  <AttachFileIcon />
//                  <input
//                    type="file"
//                    hidden
//                    multiple
//                    onChange={handleAttachmentChange}
//                  />
//                </IconButton>
//
//                {/* Emoji Button */}
//
//
//                {/* Display attached file names */}
//                {attachments.length > 0 && (
//                  <Box ml={2}>
//                    {attachments.map((file, index) => (
//                      <Box key={index} fontSize="small">
//                        {file.name}
//                      </Box>
//                    ))}
//                  </Box>
//                )}
//
//                {/* Send Button */}
//                <Button
//                  variant="contained"
//                  color="primary"
//                  onClick={() => sendMessage(selectedRecipient, newMessage, attachments)}
//                  disabled={!newMessage && attachments.length === 0}
//                >
//                  Send
//                </Button>
//              </Box>
//            </Box>
//          </Box>
//        </Grid>
//      </Grid>
//    </Card>
//  </Box>
//  );
//};
//
//export default CompanyMessages;
//