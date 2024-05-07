import { Eta } from "eta"
import {generateList} from "../../common.js";
import fs from "fs";

const eta = new Eta({ views: './templating-tests/eta', varName: 'data' });

const templateSource = fs.readFileSync('./templating-tests/eta/template.html', 'utf8');

console.log(eta.renderString(templateSource,
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

}));