import React, { useState } from "react";

export default function SearchBar(props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="search-container">
      <div
        className="search-input"
        style={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          padding: "4px",
          overflow: "hidden",
          transition: "box-shadow 0.3s, border-color 0.3s",
          borderColor: isFocused ? "#6b46c1" : "transparent",
        }}
      >
        <div
          className="search-icon"
          style={{
            marginLeft: "10px",
            color: isFocused ? "#6b46c1" : "rgba(33, 3, 102, 0.59)",
          }}
        >
          <button
            type="button"
            style={{
              padding: "10px",
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
            aria-label="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
        <input
          className="search-input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            outline: "none",
            marginLeft: "5px",
            flex: "1",
            color: isFocused ? "#6b46c1" : "rgba(33, 3, 102, 0.83)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "21px",
            fontSize: "16px",
            border: "none",
            background: "none",
            "&::placeholder": {
              color: isFocused
                ? "rgba(107, 70, 193, 0.5)"
                : "rgba(33, 3, 102, 0.5)",
            },
          }}
          type="text"
          placeholder={props.placeholder}
          aria-label={props.placeholder}
        />
      </div>
    </div>
  );
}
