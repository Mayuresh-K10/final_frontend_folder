import {
    Box,
    Typography,
    Card,
    Button,
    IconButton,
    InputBase,
} from "@mui/material";
import { EmojiEmotions, AttachFile, Send } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const MessageModel = ({
    sender_email,
    sender_name,
    sender_token,
    sender_model,
}) => {
    const location = useLocation();
    const { selectedEmail, selectedModel } = location.state || {};

    const [selectedUser, setSelectedUser] = useState(
        selectedEmail && selectedModel
            ? { email: selectedEmail, model: selectedModel }
            : null
    );
    const [newMessage, setNewMessage] = useState("");
    const [messageSubject, setMessageSubject] = useState("");
    const [attachments, setAttachments] = useState([]);
    const [attachmentUrls, setAttachmentUrls] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const [getMessage, setGetMessage] = useState([]);
    const [myInbox, setMyInbox] = useState([]);
    const [socket, setSocket] = useState(null);
    const [isWebSocketOpen, setIsWebSocketOpen] = useState(false);
    const [loadingMessages, setLoadingMessages] = useState(false);
    const socketRef = useRef(null);
    const messagesEndRef = useRef(null);

    // const CLOUDINARY_UPLOAD_URL =
    //     "https://api.cloudinary.com/v1_1/dryjhjgqb/upload";
    // const CLOUDINARY_UPLOAD_PRESET = "message-attachments";

    // Initialize WebSocket
    useEffect(() => {
        // Ensure WebSocket is initialized only once
        if (!socketRef.current) {
            const wsUrl = `${process.env.REACT_APP_WS_BACKEND_URL}/ws/chat/${sender_token}/${sender_model}/${sender_email}/`;
            const ws = new WebSocket(wsUrl);

            // Set up WebSocket event handlers
            ws.onopen = () => {
                console.log("WebSocket connection opened.");
                setIsWebSocketOpen(true);
            };

            ws.onclose = (event) => {
                console.log("WebSocket connection closed:", event);
                setIsWebSocketOpen(false);
            };

            ws.onerror = (error) => {
                console.error("WebSocket error:", error);
            };

            ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    console.log("Data received from WebSocket:", data);

                    // Handle array of messages (data.data should be an array)
                    if (data?.data && Array.isArray(data.data)) {
                        setGetMessage((prevMessages) => {
                            const newMessages = data.data.filter(
                                (newMsg) =>
                                    !prevMessages.some(
                                        (msg) => msg.id === newMsg.id
                                    ) // Avoid duplicates
                            );
                            const allMessages = [
                                ...prevMessages,
                                ...newMessages,
                            ];
                            // Sort messages by timestamp in ascending order
                            return allMessages.sort(
                                (a, b) =>
                                    new Date(a.timestamp) -
                                    new Date(b.timestamp)
                            );
                        });
                    }

                    // Handle single new message
                    else if (data?.action === "new_message") {
                        setGetMessage((prevMessages) => {
                            const newMessage = data.data; // Single message object
                            if (
                                !prevMessages.some(
                                    (msg) => msg.id === newMessage.id
                                )
                            ) {
                                const allMessages = [
                                    ...prevMessages,
                                    newMessage,
                                ];
                                // Sort messages by timestamp in ascending order
                                return allMessages.sort(
                                    (a, b) =>
                                        new Date(a.timestamp) -
                                        new Date(b.timestamp)
                                );
                            }
                            return prevMessages; // Do nothing if duplicate
                        });
                    }

                    // Handle message sent acknowledgment
                    else if (data?.action === "send_message" && data?.message) {
                        setGetMessage((prevMessages) => {
                            if (
                                !prevMessages.some(
                                    (msg) => msg.id === data.message.id
                                )
                            ) {
                                const updatedMessages = [
                                    ...prevMessages,
                                    data.message,
                                ];
                                // Sort messages by timestamp in ascending order
                                return updatedMessages.sort(
                                    (a, b) =>
                                        new Date(a.timestamp) -
                                        new Date(b.timestamp)
                                );
                            }
                            return prevMessages; // Do nothing if duplicate
                        });
                    }
                } catch (err) {
                    console.error("Error parsing WebSocket message:", err);
                }
            };

            // Store WebSocket instance in ref
            socketRef.current = ws;

            // Cleanup function: close WebSocket on component unmount
            return () => {
                console.log("Cleaning up WebSocket connection.");
                if (socketRef.current) {
                    socketRef.current.close();
                    socketRef.current = null;
                }
            };
        }
    }, [sender_email, sender_model, sender_token]);

    // Track uploading states
    const [uploadingFiles, setUploadingFiles] = useState([]); // Array of file names currently being uploaded

    const uploadToCloudinary = async (file) => {

        const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`;
        const CLOUDINARY_UPLOAD_PRESET =
            process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("resource_type", "raw");

        try {
            const response = await fetch(CLOUDINARY_UPLOAD_URL, {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            // const asset_id = data.asset_id;

            // const dataUrl = `https://res-console.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/media_explorer_thumbnails/${asset_id}/download`;

            if (data.secure_url) {
                return {
                    url: data.secure_url,
                    original_name: data.original_filename || data.public_id,
                };
            } else {
                throw new Error("No URL in the Cloudinary response.");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            return null;
        }
    };

    const handleFileChange = async (event) => {
        const files = Array.from(event.target.files);
        const attachmentsWithInfo = [];

        for (const file of files) {
            // Mark the file as uploading
            setUploadingFiles((prev) => [...prev, file.name]);

            const uploadedAttachment = await uploadToCloudinary(file);
            if (uploadedAttachment) {
                attachmentsWithInfo.push(uploadedAttachment);
            }

            // Remove the file from uploading state once done
            setUploadingFiles((prev) =>
                prev.filter((uploadingFile) => uploadingFile !== file.name)
            );
        }

        setAttachmentUrls((prev) => [...prev, ...attachmentsWithInfo]);
        setAttachments((prev) => [...prev, ...files]);
    };

    // Fetch Inbox
    const fetchInbox = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/api/inbox/`,
                {
                    params: {
                        user_email: sender_email,
                        user_model: sender_model,
                    },
                    headers: { Authorization: `Bearer ${sender_token}` },
                }
            );
            setMyInbox(response.data.data || []);
        } catch (error) {
            console.error(error);
            setMyInbox([]);
        } finally {
            setLoading(false);
        }
    }, [sender_email, sender_model, sender_token]);

    // Format Date and Time
    const formatDate = (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleString();
    };

    // Fetch Messages
    const fetchMessages = useCallback(
        async (recipient_email, recipient_model) => {
            const socket = socketRef.current;
            console.log("Socket Value inside fetch: ", socket);
            console.log(
                "Socket Ready State Value inside fetch: ",
                socket.readyState
            );
            if (!socket || socket.readyState !== WebSocket.OPEN) {
                console.error("WebSocket is not connected. Retrying...");
                setTimeout(
                    () => fetchMessages(recipient_email, recipient_model),
                    500
                ); // Retry
                return;
            }

            const payload = {
                action: "get_messages",
                recipient_email,
                recipient_model,
            };

            try {
                socket.send(JSON.stringify(payload));
            } catch (error) {
                console.error("Error sending fetchMessages payload:", error);
            }
        },
        []
    );

    // Fetch Messages When User is Selected
    useEffect(() => {
        if (selectedUser) {
            setLoadingMessages(true);
            fetchMessages(selectedUser.email, selectedUser.model).finally(
                () => {
                    setLoadingMessages(false);
                }
            );
        }
    }, [selectedUser, fetchMessages]); // Ensure this is only triggered when `selectedUser` changes

    // Initial Messages Fetch Based on Location State
    useEffect(() => {
        if (location.state?.selectedEmail && location.state?.selectedModel) {
            const { selectedEmail, selectedModel } = location.state;

            const user = { email: selectedEmail, model: selectedModel };
            setSelectedUser(user);

            fetchMessages(user.email, user.model);
        }
    }, [location.state, fetchMessages]);

    // Send Message
    const handleSendMessage = useCallback(() => {
        const socket = socketRef.current;

        if (!socket || socket.readyState !== WebSocket.OPEN) {
            console.error("WebSocket is not open. Cannot send message.");
            return;
        }

        if (!selectedUser || !newMessage.trim()) {
            console.error("Recipient or message content is missing.");
            return;
        }

        const { email: recipient_email, model: recipient_model } = selectedUser;

        const messagePayload = {
            action: "send_message",
            recipient_email,
            recipient_model,
            content: newMessage,
            subject: messageSubject || "",
            attachments: attachmentUrls || [], // Attachments now include `url` and `original_name`
        };

        try {
            console.log("Sending Payload", messagePayload);
            socket.send(JSON.stringify(messagePayload));

            // Update the message list directly when the message is sent
            setGetMessage((prev) => [
                ...prev,
                {
                    id: Math.random().toString(),
                    sender_email,
                    sender_model,
                    recipient_email,
                    recipient_model,
                    content: newMessage,
                    subject: messageSubject || "",
                    attachments: [...attachmentUrls], // Attachments with both URL and original name
                    timestamp: new Date().toISOString(),
                },
            ]);

            setNewMessage("");
            setMessageSubject("");
            setAttachments([]);
            setAttachmentUrls([]);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    }, [
        socketRef.current,
        selectedUser,
        newMessage,
        messageSubject,
        attachmentUrls,
        sender_email,
        sender_model,
    ]);

    // Search User
    const searchUser = useCallback(async () => {
        if (!searchTerm.trim()) {
            setSearchResult([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/api/search/`,
                {
                    params: { q: searchTerm },
                    headers: { Authorization: `Bearer ${sender_token}` },
                }
            );
            setSearchResult(response.data || []);
        } catch (error) {
            console.error(error);
            setSearchResult([]);
        } finally {
            setLoading(false);
        }
    }, [sender_token, searchTerm]);

    // Debounced Search User and Inbox Fetch
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            searchUser();
            fetchInbox();
        }, 1000);
        return () => clearTimeout(delayDebounce);
    }, [searchUser, searchTerm, fetchInbox]);

    const handleSelectUser = ({ email, model }) => {
        if (selectedUser?.email !== email || selectedUser?.model !== model) {
            setGetMessage([]); // Clear messages only when switching to a new user
        }
        setSelectedUser({ email, model });
        fetchMessages(email, model);
    };

    // Instantly jump to the last message when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    }, [getMessage]);

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                background: "#f5f5f5",
                padding: "2rem",
                display: "flex",
                gap: "1rem",
                "@media (max-width:800px)": {
                    flexDirection: "column",
                },
            }}
        >
            {/* Left Side: Inbox */}
            <Card
                sx={{
                    width: "30%",
                    borderRadius: "16px",
                    background: "#fff",
                    height: "800px",
                    overflow: "hidden",
                    "@media (max-width:800px)": {
                        width: "100%",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        flexDirection: "column",
                        gap: "1rem",
                        position: "relative",
                    }}
                >
                    {/* Search Bar */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "1rem",
                            width: "100%",
                        }}
                    >
                        <input
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: "100%",
                                background: "white",
                                borderRadius: "12px",
                                padding: "0.5rem 1rem",
                                height: "3rem",
                                focus: "none",
                                border: "1px solid lightgray",
                            }}
                        />
                    </Box>

                    {/* Search Results */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "0",
                            marginTop: "5rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "white",
                            width: "90%",
                            zIndex: "100",
                        }}
                    >
                        {loading ? (
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    margin: "1rem",
                                    color: "gray",
                                }}
                            >
                                Searching...
                            </Typography>
                        ) : searchTerm &&
                          searchResult &&
                          searchResult.length > 0 ? (
                            <Box
                                sx={{
                                    maxHeight: "300px",
                                    overflowY: "scroll",
                                    background: "white",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                    borderRadius: "12px",
                                    padding: "1rem",
                                }}
                            >
                                {searchResult.map((user) => (
                                    <Box
                                        key={user.id}
                                        onClick={() =>
                                            handleSelectUser({
                                                email: user.email,
                                                model: user.model,
                                            })
                                        }
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            height: "80px",
                                            width: "100%",
                                            padding: "0.5rem",
                                            border: "1px solid lightgray",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: "600",
                                                color: "black",
                                            }}
                                        >
                                            {user.name} as{" "}
                                            <span>{user.model}</span>
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "black",
                                            }}
                                        >
                                            {user.email}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        ) : (
                            searchTerm && (
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        margin: "1rem",
                                        color: "gray",
                                    }}
                                >
                                    No results found
                                </Typography>
                            )
                        )}
                    </Box>
                </Box>

                {/* <Box
                      sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0 1rem",
                      }}
                  >
                      <Button variant="text">All</Button>
                      <Button variant="text">Read</Button>
                      <Button variant="text">Unread</Button>
                  </Box> */}
                <Box
                    sx={{
                        height: "calc(100% - 100px)",
                        overflowY: "auto",
                        padding: "1rem",
                    }}
                >
                    {myInbox.map((user, id) => (
                        <Card
                            key={user.id}
                            onClick={() =>
                                handleSelectUser({
                                    email: user.conversation_with,
                                    model: user.conversation_model,
                                })
                            }
                            sx={{
                                padding: "1rem",
                                borderRadius: "12px",
                                marginBottom: "1rem",
                                cursor: "pointer",
                                background:
                                    selectedUser?.id === user.id
                                        ? "#e0e0e0"
                                        : "#f9f9f9",
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: "600" }}>
                                {user.conversation_with}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                {user.latest_message}
                            </Typography>
                            <Typography
                                sx={{ fontSize: "12px", color: "gray" }}
                            >
                                {formatDate(user.timestamp)}
                            </Typography>
                        </Card>
                    ))}
                </Box>
            </Card>

            {/* Right Side: Chat */}
            <Card
                sx={{
                    width: "70%",
                    borderRadius: "16px",
                    background: "#fff",
                    height: "800px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    "@media (max-width:800px)": {
                        width: "100%",
                    },
                }}
            >
                <Box
                    sx={{
                        padding: "1rem",
                        background: "#f0f0f0",
                        borderRadius: "16px 16px 0 0",
                    }}
                >
                    <Typography variant="h6">
                        {selectedUser
                            ? `${selectedUser.email} (${selectedUser.model})`
                            : "Select a chat"}
                    </Typography>
                </Box>
                {/* Chat Header */}
                <Box
                    sx={{
                        flex: 1,
                        overflowY: "auto",
                        padding: "1rem",
                        background: "#fafafa",
                    }}
                >
                    {loadingMessages ? (
                        <Typography>Loading messages...</Typography>
                    ) : selectedUser && getMessage?.length > 0 ? (
                        getMessage.map((message, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        message.sender_email === sender_email
                                            ? "flex-end"
                                            : "flex-start",
                                    marginBottom: "1rem",
                                }}
                            >
                                <Box
                                    sx={{
                                        padding: "0.75rem 1rem",
                                        borderRadius: "12px",
                                        background:
                                            message.sender_email ===
                                            sender_email
                                                ? "#4caf50"
                                                : "#e0e0e0",
                                        color:
                                            message.sender_email ===
                                            sender_email
                                                ? "#fff"
                                                : "#000",
                                        maxWidth: "70%",
                                    }}
                                >
                                    {/* Subject */}
                                    {message.subject && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: "bold",
                                                marginBottom: "0.5rem",
                                                fontSize: "14px",
                                            }}
                                        >
                                            {message.subject}
                                        </Typography>
                                    )}
                                    {/* Content */}
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                        }}
                                    >
                                        {message.content}
                                    </Typography>

                                    {/* Attachments */}
                                    {message.attachments &&
                                        message.attachments.length > 0 && (
                                            <Box
                                                sx={{
                                                    marginTop: "0.5rem",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.5rem",
                                                }}
                                            >
                                                {message.attachments.map(
                                                    (
                                                        attachment,
                                                        attachmentIndex
                                                    ) => (
                                                        <Box
                                                            key={
                                                                attachmentIndex
                                                            }
                                                            sx={{
                                                                padding:
                                                                    "0.5rem",
                                                                background:
                                                                    "#fff",
                                                                borderRadius:
                                                                    "8px",
                                                                boxShadow:
                                                                    "0 1px 3px rgba(0, 0, 0, 0.1)",
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                gap: "0.5rem",
                                                            }}
                                                        >
                                                            {/* Icon or file type */}
                                                            <Typography
                                                                sx={{
                                                                    fontSize:
                                                                        "14px",
                                                                    fontWeight:
                                                                        "bold",
                                                                    color: "#666",
                                                                    overflow:
                                                                        "hidden",
                                                                    textOverflow:
                                                                        "ellipsis",
                                                                    whiteSpace:
                                                                        "nowrap",
                                                                }}
                                                            >
                                                                {
                                                                    attachment.original_name
                                                                }
                                                            </Typography>

                                                            {/* Download link */}
                                                            <Button
                                                                href={
                                                                    attachment.url
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                variant="outlined"
                                                                size="small"
                                                                sx={{
                                                                    textTransform:
                                                                        "none",
                                                                }}
                                                            >
                                                                Download
                                                            </Button>
                                                        </Box>
                                                    )
                                                )}
                                            </Box>
                                        )}

                                    {/* Timestamp */}
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: "block",
                                            marginTop: "0.5rem",
                                            color: "#aaa",
                                            fontSize: "12px",
                                        }}
                                    >
                                        {formatDate(message.timestamp)}
                                    </Typography>
                                </Box>
                                {/* Ref for the last message */}
                                <div ref={messagesEndRef} />
                            </Box>
                        ))
                    ) : (
                        <Typography>No messages to display.</Typography>
                    )}
                </Box>
                {/* Chat Input */}
                {selectedUser && (
                    <Box
                        sx={{
                            padding: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            borderTop: "1px solid #e0e0e0",
                        }}
                    >
                        {/* Subject Field */}
                        <InputBase
                            placeholder="Enter subject..."
                            value={messageSubject}
                            onChange={(e) => setMessageSubject(e.target.value)}
                            sx={{
                                background: "#f0f0f0",
                                borderRadius: "12px",
                                padding: "0.5rem 1rem",
                                width: "100%",
                            }}
                        />

                        {/* Message Input and Actions */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <IconButton>
                                <EmojiEmotions />
                            </IconButton>
                            <IconButton component="label">
                                <AttachFile />
                                <input
                                    type="file"
                                    hidden
                                    multiple
                                    onChange={handleFileChange}
                                />
                            </IconButton>
                            <InputBase
                                placeholder="Type your message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                sx={{
                                    flex: 1,
                                    background: "#f0f0f0",
                                    borderRadius: "12px",
                                    padding: "0.5rem 1rem",
                                }}
                            />
                            <IconButton onClick={handleSendMessage}>
                                <Send />
                            </IconButton>
                        </Box>

                        {uploadingFiles.length > 0 ? (
                            <CircularProgress color="secondary" />
                        ) : (
                            <Box>
                                {attachments.length > 0 && (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "0.5rem",
                                            marginTop: "0.5rem",
                                        }}
                                    >
                                        {attachments.map((file, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    background: "#e0e0e0",
                                                    borderRadius: "8px",
                                                    padding: "0.5rem",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                }}
                                            >
                                                <Typography variant="body2">
                                                    {file.name}
                                                </Typography>
                                                <IconButton
                                                    size="small"
                                                    onClick={() =>
                                                        setAttachments((prev) =>
                                                            prev.filter(
                                                                (_, i) =>
                                                                    i !== index
                                                            )
                                                        )
                                                    }
                                                >
                                                    ✕
                                                </IconButton>
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        )}

                        {/* Display Selected Attachments */}
                    </Box>
                )}
            </Card>
        </Box>
    );
};

export default MessageModel;
