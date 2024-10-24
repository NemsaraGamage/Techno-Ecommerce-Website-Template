import React from 'react';
import Popup from 'reactjs-popup';

function AccountPopup({ isOpen, closePopup }) {
 
  const popupContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const popupContentStyle = {
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
    marginTop: '0',
    fontSize: '1.8rem',
    color: '#333',
    textAlign: 'center',
  };

  const popupTextStyle = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.5',
    textAlign: 'center',
  };

  const popupCloseButtonStyle = {
    display: 'block',
    margin: '0 auto',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
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
        overlayStyle={overlayStyle} // Inline overlay style
      >
        <div style={popupContentStyle}>
          <h1 style={popupTitleStyle}>Popup Title</h1>
          <p style={popupTextStyle}>This is the popup content.</p>
          <button
            style={popupCloseButtonStyle}
            onClick={closePopup}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Close
          </button>
        </div>
      </Popup>
    </div>
  );
}

export default AccountPopup;
