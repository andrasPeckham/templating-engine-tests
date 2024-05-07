import * as fs from 'fs';
import Handlebars from "handlebars";
import {generateList} from "../../common.js";

const templateSource = fs.readFileSync('./templating-tests/handlebars/template.html', 'utf8');
const templateDelegate = Handlebars.compile(templateSource);

console.log(templateDelegate({
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