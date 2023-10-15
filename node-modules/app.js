// const express = require('express');
// const app = express();
// const port = 3000;

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));

// // Define routes
// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.get('/calculator', (req, res) => {
//     res.render('calculator', { result: null }); // Passing result as null
//   });

// app.post('/calculate', (req, res) => {
//   const num1 = parseFloat(req.body.num1);
//   const num2 = parseFloat(req.body.num2);
//   const operator = req.body.operator;
//   let result;

//   switch (operator) {
//     case 'add':
//       result = num1 + num2;
//       break;
//     case 'subtract':
//       result = num1 - num2;
//       break;
//     case 'multiply':
//       result = num1 * num2;
//       break;
//     case 'divide':
//       result = num1 / num2;
//       break;
//   }

//   res.render('calculator', { result });
// });

// app.get('/quiz', (req, res) => {
//   res.render('quiz', { score: null });
// });

// app.post('/quiz', (req, res) => {
//   const answers = req.body.answers;
//   // Check answers and calculate score
//   const score = answers.reduce((total, answer) => (answer === 'correct' ? total + 1 : total), 0);

//   res.render('quiz', { score });
// });

// app.get('/checkbox', (req, res) => {
//     res.render('checkbox', { selectedOptions: [] });
//   });
  

// app.post('/checkbox', (req, res) => {
//   const selectedOptions = req.body.options;
//   res.render('checkbox', { selectedOptions });
// });
// app.get('/drink', (req, res) => {
//     res.render('drink', { drinks: drinksData, desserts: dessertsData });
//   });
  
//   app.post('/order', (req, res) => {
//     const selectedDrinks = req.body.selectedDrinks || [];
//     const selectedDesserts = req.body.selectedDesserts || [];
//     let totalDrinks = 0;
//     let totalDesserts = 0;
  
//     selectedDrinks.forEach(drink => {
//       totalDrinks += drinksData[drink];
//     });
  
//     selectedDesserts.forEach(dessert => {
//       totalDesserts += dessertsData[dessert];
//     });
  
//     const total = totalDrinks + totalDesserts;
  
//     res.render('order.ejs', { selectedDrinks, selectedDesserts, total });
//   });
  
//   const drinksData = {
//     drink1: 1,
//     drink2: 10,
//     drink3: 15,
//   };
//   const dessertsData = {
//     dessert1: 5,
//     dessert2: 8,
//     dessert3: 12,
//   };
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
