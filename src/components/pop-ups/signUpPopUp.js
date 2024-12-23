import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const fontFamilyStyle = {
  fontFamily: `'Poppins', sans-serif`,
};

function AccountPopup({ isOpen, closePopup }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const popupContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const popupContentStyle = {
    ...fontFamilyStyle,
    backgroundColor: '#fff',
    padding: '39px',
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
    marginBottom: '15px',
  };

  const popupTextStyle = {
    ...fontFamilyStyle,
    fontSize: '0.8rem',
    marginBottom: '20px',
    lineHeight: '1.3',
    marginTop: '10px',
    color: '#B5B5B5',
  };

  const textInput = {
    marginTop: '20px',
  };

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
    marginTop: '30px',
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
          <h1 style={popupTitleStyle}>Create an account</h1>
          <TextField 
            style={textInput}
            label="Please enter your email" 
            fullWidth 
          />
          <TextField 
            style={textInput}
            label="Choose a password" 
            fullWidth 
          />
          <p style={popupTextStyle}>
            Minimum 7 alphanumeric characters, including at least 1 numeric character.
          </p>
          <FormControlLabel
            control={
              <Switch 
                checked={isChecked} 
                onChange={handleSwitchChange} 
              />
            }
            label={
              <Typography variant="body2" style={{color: 'black'}}>
                I have read and understood the{" "}
                <Link href="#" style={{ color: '#0A2351' }}>
                  terms and conditions
                </Link>.
              </Typography>
            }
          />
          <button
            style={popupCloseButtonStyle}
            onClick={closePopup}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#0A2351')}
          >
            Sign up
          </button>
        </div>
      </Popup>
    </div>
  );
}

export default AccountPopup;
