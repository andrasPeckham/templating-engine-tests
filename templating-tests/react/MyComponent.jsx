import React from 'react';

const MyComponent = ({ pageTitle, welcomeMessage, showOptions, optionsAvailable, options, dynamicList, currentYear }) => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{pageTitle}</title>
            <style>
                {`
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
          }
          header {
              background-color: #0055a6; /* Blue */
              color: #fff;
              padding: 20px;
              text-align: center;
          }
          nav ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              text-align: center;
          }
          nav ul li {
              display: inline;
              margin-right: 10px;
          }
          main {
              padding: 20px;
              margin: 20px auto;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              max-width: 800px;
          }
          h1, h2 {
              color: #0055a6; /* Blue */
          }
          p {
              line-height: 1.6;
          }
          ul {
              list-style-type: none;
              padding: 0;
          }
          li {
              margin-bottom: 10px;
          }
          footer {
              background-color: #0055a6; /* Blue */
              color: #fff;
              text-align: center;
              padding: 20px;
          }
          `}
            </style>
        </head>
        <body>
        <header>
            <h1>{pageTitle}</h1>
            <nav>
                <ul>
                    <li><a href="#" style={{ color: '#fff' }}>Home</a></li>
                    <li><a href="#" style={{ color: '#fff' }}>About</a></li>
                    <li><a href="#" style={{ color: '#fff' }}>Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <h2>Welcome to Our Website</h2>
            <p>{welcomeMessage}</p>

            <h2>Conditional Options</h2>
            {showOptions ? (
                optionsAvailable ? (
                    <ul>
                        {options.map(option => (
                            <li>{option.name} - {option.price}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No options available.</p>
                )
            ) : (
                <p>Options are hidden.</p>
            )}

            <h2>Dynamically Loaded List</h2>
            <ul>
                {dynamicList.map(item => (
                    <li>{item.name} - {item.description}</li>
                ))}
            </ul>
        </main>
        <footer>
            <p>&copy; {currentYear} Dynamic HTML Template</p>
        </footer>
        </body>
        </html>
    );
};

export default MyComponent;
