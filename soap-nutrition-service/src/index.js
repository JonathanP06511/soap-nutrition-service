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
                    { name: 'Banana', calories: 89, protein: 1.1, fat: 0.3, carbohydrates: 23 },
                    { name: 'Carrot', calories: 41, protein: 0.9, fat: 0.2, carbohydrates: 10 }
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
