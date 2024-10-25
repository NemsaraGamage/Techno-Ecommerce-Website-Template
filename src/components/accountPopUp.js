import React from 'react';
import Popup from 'reactjs-popup';
import TextField from '@mui/material/TextField';
import { color } from 'framer-motion';

// Inline style with "Poppins" font family
const fontFamilyStyle = {
  fontFamily: `'Poppins', sans-serif`,
};

function AccountPopup({ isOpen, closePopup }) {
  // Inline styles
  const popupContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const popupContentStyle = {
    ...fontFamilyStyle,
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    width: '100%',
    position: 'relative',
    animation: 'fadeIn 0.3s ease-in-out',
    color: '#333',
  };

  const popupTitleStyle = {
    ...fontFamilyStyle,
    marginTop: '0',
    fontSize: '1.8rem',
    color: '#333',
    textAlign: 'center',
    marginBottom : '15px',
  };

  const popupTextStyle = {
    ...fontFamilyStyle,
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.4',
    textAlign: 'center',
    marginTop: '20px',
  };

  const popupText2Style = {
    ...fontFamilyStyle,
    fontSize: '0.8rem',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.2',
    textAlign: 'center',
    marginTop: '5px',
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline'
  }

  const textInput = {
    marginTop: '10px'
  }

  const popupCloseButtonStyle = {
    ...fontFamilyStyle,
    display: 'block',
    margin: '0 auto',
    padding: '5px 15px',
    backgroundColor: '#0A2351',
    color: '#fff',
    border: 'none',
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px'
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  };

  return (
    <div style={popupContainerStyle}>
        <Popup
          open={isOpen}
          onClose={closePopup}
          modal
          closeOnDocumentClick
          position="top center"
          overlayStyle={overlayStyle} 
        >
        <div style={popupContentStyle}>
          <h1 style={popupTitleStyle}>Log in or register</h1>
          <TextField 
            style={textInput}
            label="user name/email" 
            fullWidth 
          />
          <TextField 
            style={textInput}
            label="password" 
            fullWidth 
          />
          <p style={popupTextStyle}>Don't have an account?</p>
          <p style={popupText2Style}>Create an account</p>
          <button
            style={popupCloseButtonStyle}
            onClick={closePopup}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Log in 
          </button>
        </div>
      </Popup>
    </div>
  );
}

export default AccountPopup;
