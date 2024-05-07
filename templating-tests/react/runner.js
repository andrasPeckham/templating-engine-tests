import * as ReactDOMServer from 'react-dom/server';
import * as React from "react";
import {generateList} from "../../common.js";

function MyComponent({ pageTitle, welcomeMessage, showOptions, optionsAvailable, options, dynamicList, currentYear }) {
    return React.createElement(
        'html',
        { lang: 'en' },
        React.createElement(
            'head',
            null,
            React.createElement('meta', { charSet: 'UTF-8' }),
            React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
            React.createElement('title', null, pageTitle),
            React.createElement('style', null, `
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
          `)
        ),
        React.createElement(
            'body',
            null,
            React.createElement(
                'header',
                null,
                React.createElement('h1', null, pageTitle),
                React.createElement(
                    'nav',
                    null,
                    React.createElement(
                        'ul',
                        null,
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', style: { color: '#fff' } },
                                'Home'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', style: { color: '#fff' } },
                                'About'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', style: { color: '#fff' } },
                                'Contact'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'main',
                null,
                React.createElement('h2', null, 'Welcome to Our Website'),
                React.createElement('p', null, welcomeMessage),
                React.createElement('h2', null, 'Conditional Options'),
                showOptions ? (
                    optionsAvailable ? (
                        React.createElement(
                            'ul',
                            null,
                            options.map(option => React.createElement(
                                'li',
                                { key: option.name },
                                option.name,
                                ' - ',
                                option.price
                            ))
                        )
                    ) : (
                        React.createElement('p', null, 'No options available.')
                    )
                ) : (
                    React.createElement('p', null, 'Options are hidden.')
                ),
                React.createElement('h2', null, 'Dynamically Loaded List'),
                React.createElement(
                    'ul',
                    null,
                    dynamicList.map(item => React.createElement(
                        'li',
                        { key: item.name },
                        item.name,
                        ' - ',
                        item.description
                    ))
                )
            ),
            React.createElement(
                'footer',
                null,
                React.createElement('p', null, '\xA9 ', currentYear, ' Dynamic HTML Template')
            )
        )
    );
}

const data = {
    pageTitle: "Dynamic HTML Template",
    welcomeMessage: "Welcome to our dynamic HTML template!",
    showOptions: true,
    optionsAvailable: true,
    options: [
        { name: "Option 1", price: "$10" },
        { name: "Option 2", price: "$20" },
        { name: "Option 3", price: "$15" }
    ],
    dynamicList: generateList(),
    currentYear: new Date().getFullYear()
}

const htmlString = ReactDOMServer.renderToString(React.createElement(MyComponent, data));
console.log(htmlString)