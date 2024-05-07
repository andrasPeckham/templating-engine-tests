import * as fs from 'fs';
import Mustache from "mustache";
import {generateList} from "../../common.js";

const templateSource = fs.readFileSync('./templating-tests/mustache/template.html', 'utf8');

console.log(Mustache.render(templateSource, {
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
}));