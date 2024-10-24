import React from 'react';
import Popup from 'reactjs-popup';
import './styles.css';

function AccountPopup({ isOpen, closePopup }) {
  return (
    <div className="account-popup-container">
      <Popup
        open={isOpen}
        onClose={closePopup}
        modal
        closeOnDocumentClick
        position="top center"
        className="custom-popup"
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.6)' }} // Optional inline overlay style
      >
        <div className="popup-content">
          <h1 className="popup-title">Popup Title</h1>
          <p className="popup-text">This is the popup content.</p>
          <button className="popup-close-btn" onClick={closePopup}>Close</button>
        </div>
      </Popup>
    </div>
  );
}

export default AccountPopup;
