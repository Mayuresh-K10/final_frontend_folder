import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CompanyNotificationComponent = ({ token }) => {
    const companyuser = useSelector((state) => state.company);
    const companyemail =
        companyuser?.offical_mail || localStorage.getItem("companyEmail");

    const [notifications, setNotifications] = useState([]);
    const [socket, setSocket] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        if (!token) return;

        // const ws = new WebSocket(
        //     `${process.env.REACT_APP_WS_BACKEND_URL}/ws/notifications/${token}/`
        // );

        const ws = new WebSocket(
            `${process.env.REACT_APP_WS_BACKEND_URL}/ws/message-notifications/${companyemail}/`
        );

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setNotifications((prev) => [data.message, ...prev]);
        };

        ws.onclose = () => {
            console.log("WebSocket disconnected");
        };

        setSocket(ws);

        return () => {
            if (ws) ws.close();
        };
    }, [token]);

    useEffect(() => {
        if (!token) return;

        const ws = new WebSocket(
            `${process.env.REACT_APP_WS_BACKEND_URL}/ws/notifications/${token}/`
        );

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setNotifications((prev) => [data.message, ...prev]);
        };

        ws.onclose = () => {
            console.log("WebSocket disconnected");
        };

        setSocket(ws);

        return () => {
            if (ws) ws.close();
        };
    }, [token]);

    const styles = {
        wrapper: {
            position: "relative",
            display: "inline-block",
        },
        bell: {
            cursor: "pointer",
            fontSize: "24px",
            position: "relative",
        },
        count: {
            position: "absolute",
            top: "-5px",
            right: "-10px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            fontSize: "12px",
            padding: "2px 6px",
        },
        dropdown: {
            position: "absolute",
            top: "40px",
            right: "0",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "250px",
            zIndex: 1000,
        },
        dropdownHeader: {
            fontSize: "16px",
            fontWeight: "bold",
            padding: "10px",
            borderBottom: "1px solid #ddd",
        },
        list: {
            listStyleType: "none",
            margin: 0,
            padding: "10px",
            maxHeight: "200px",
            overflowY: "auto",
        },
        listItem: {
            fontSize: "14px",
            padding: "8px 0",
            borderBottom: "1px solid #f0f0f0",
        },
        noNotifications: {
            fontSize: "14px",
            padding: "10px",
            textAlign: "center",
        },
    };

    console.log("Users Notification", notifications);

    return (
        <div style={styles.wrapper}>
            <div
                style={styles.bell}
                onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
                <span>🔔</span>
                {notifications.length > 0 && (
                    <span style={styles.count}>{notifications.length}</span>
                )}
            </div>
            {isDropdownOpen && (
                <div style={styles.dropdown}>
                    <div style={styles.dropdownHeader}>Notifications</div>
                    {notifications.length > 0 ? (
                        <ul style={styles.list}>
                            {notifications.map((notification, index) => (
                                <li key={index} style={styles.listItem}>
                                    {notification}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div style={styles.noNotifications}>
                            No notifications
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CompanyNotificationComponent;
