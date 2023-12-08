import React from "react";
import   "../css/footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} ChitChatPal. All rights reserved.</p>
    </div>
  );
};

export default Footer;