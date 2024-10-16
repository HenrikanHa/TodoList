import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} HenriKanHa, Inc. All rights reserved.</p>
    </footer>
  )
}
