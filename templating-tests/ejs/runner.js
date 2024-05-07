import ejs from "ejs";
import * as fs from 'fs';
import {generateList} from "../../common.js";

const templateSource = fs.readFileSync('./templating-tests/ejs/template.html', 'utf8');

console.log(ejs.render(templateSource,
    {
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
    }))