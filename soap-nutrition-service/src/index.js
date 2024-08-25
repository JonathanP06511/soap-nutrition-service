const express = require('express');
const soap = require('soap');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3011;

const wsdlPath = path.join(__dirname, 'service.wsdl');

const serviceDefinition = {
    NutritiousFoodService: {
        NutritiousFoodPort: {
            getFoods: function (args, callback) {

                const foods = [
                    { name: 'Apple', calories: 52, protein: 0.3, fat: 0.2, carbohydrates: 14 },
                    { name: 'Oats', calories: 389, protein: 16.9, fat: 6.9, carbohydrates: 66.3 },
                    { name: 'Spinach', calories: 23, protein: 2.9, fat: 0.4, carbohydrates: 3.6 },
                    { name: 'Orange', calories: 47, protein: 0.9, fat: 0.1, carbohydrates: 12 },
                    { name: 'Yogurt', calories: 59, protein: 10, fat: 0.4, carbohydrates: 3.6 },
                    { name: 'Egg', calories: 155, protein: 13, fat: 11, carbohydrates: 1.1 },
                    { name: 'Tomato', calories: 18, protein: 0.9, fat: 0.2, carbohydrates: 3.9 },
                    { name: 'Rice', calories: 130, protein: 2.7, fat: 0.3, carbohydrates: 28 },
                    { name: 'Peanut Butter', calories: 588, protein: 25, fat: 50, carbohydrates: 20 }
                ];
                callback({ foods });
            }
        }
    }
};

fs.readFile(wsdlPath, 'utf8', (err, wsdlContent) => {
    if (err) {
        console.error('Error reading WSDL file:', err);
        return;
    }

    soap.listen(app, '/wsdl', serviceDefinition, wsdlContent, (err) => {
        if (err) {
            console.error('Error creating SOAP server:', err);
        } else {
            console.log(`SOAP service is running at http://localhost:${port}/wsdl`);
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
