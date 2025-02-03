import React, { useState } from 'react';

const Input = ({ label, type = 'text', value = '', onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setShowError(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value?.trim()) {
      setShowError(true);
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        required
        type={type}
        name={label}
        placeholder={label}
        value={value || ''}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          padding: '10px',
          width: '100%',
          minWidth: '150px',
          borderRadius: '12px',
          fontSize: '1.2rem',
          outline: isFocused ? '1px solid #7B90FF' : '1px solid white',
          border: isFocused ? '1px solid white' : '1px solid',
          transition: 'all 0.1s ease-in-out',
        }}
      />
      {showError && (
        <div style={{ color: 'red', marginTop: '0.5rem', fontSize: '0.9rem' }}>
          {label} is required.
        </div>
      )}
    </div>
  );
};

export default Input;
