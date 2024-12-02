/* Reset styles for consistency across browsers */
body, h1, h2, h3, p, ul, li, a, img, div, section, header, footer {
  margin: 0;
  padding: 0 10px;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
}

/* Header Styles */
header {
  background: #004aad;
  color: white;
  padding: 20px 0;
  text-align: center;
}

header .logo {
  font-size: 24px;
  font-weight: bold;
}

/* Center and style menu as boxes */
nav {
  display: flex;
  justify-content: center; /* Centers the menu */
  align-items: center;
  position: relative;
  padding: 10px 0;
}

.menu {
  list-style: none;
  display: flex;
  gap: 5px; /* Space between menu items */
  padding: 0;
  margin: 0;
}

.menu li {
  border: 2px solid white; /* Add border to each menu item */
  border-radius: 8px; /* Rounded corners for boxes */
  background-color: #004aad; /* Same as the header background */
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.menu li:hover {
  background-color: #f9c74f; /* Highlight color on hover */
  border-color: #f9c74f;
}

.menu li a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px; /* Padding for box-like appearance */
  display: block; /* Ensures the entire box is clickable */
}

.menu li a:hover {
  color: #004aad; /* Text color change on hover */
}

/* Mobile Hamburger Menu */
.hamburger {
  display: none;
  font-size: 18px;
  color: white;
  background-color: #004aad;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap; /* Prevents text wrapping */
  width: 100%; /* Ensures full width on smaller screens */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.hamburger:hover {
  background-color: #003b8e; /* Slightly darker shade on hover */
}

@media (max-width: 768px) {
  .hamburger {
    display: inline-block;
  }

  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #ffffff;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .menu.show {
    display: flex;
  }

  .menu li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Divider between items */
    text-align: center;
    padding: 0px 0;
  }

  .menu li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }

  .menu li a:hover {
    color: #f9c74f;
  }
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  background: linear-gradient(180deg, #004aad, #f9c74f);
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
  float: left;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
}

.sidebar-menu li {
  margin: 15px 0;
}

.sidebar-menu li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.sidebar-menu li a:hover {
  color: #f9f9f9;
}

/* Main Content */
.container {
  margin-left: 270px; /* Matches sidebar width + margin */
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Footer Styles */
footer {
  background: #004aad;
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    float: none;
    margin: 0;
    margin-bottom: 20px;
  }

  .container {
    margin-left: 0;
  }
}

/* General form styling */
form {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Adds space between form elements */
  max-width: 500px;
  margin: 0 auto; /* Centers the form */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

form label {
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
}

form input,
form textarea {
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%; /* Makes input fields full width */
  box-sizing: border-box; /* Ensures padding is included in width */
}

form textarea {
  resize: vertical; /* Allows textarea to be resized vertically */
}

form button {
  background-color: #004aad;
  color: white;
  font-size: 18px;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #003b8e;
}

/* Adjust input fields on focus */
form input:focus,
form textarea:focus {
  outline: none;
  border-color: #004aad;
  box-shadow: 0 0 5px rgba(0, 74, 173, 0.3);
}
