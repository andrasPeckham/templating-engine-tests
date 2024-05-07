import nunjucks from "nunjucks";
import {generateList} from "../../common.js";

nunjucks.configure('./templating-tests/nunjucks', { autoescape: true });
console.log(nunjucks.render('template.html', {
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