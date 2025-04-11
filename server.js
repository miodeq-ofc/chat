// Importujemy wymagane moduły
const express = require('express');
const path = require('path');

// Tworzymy instancję aplikacji express
const app = express();
const port = process.env.PORT || 3000;

// Ustawiamy publiczny folder, aby serwować statyczne pliki (np. HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint dla głównej strony
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Uruchamiamy serwer na wybranym porcie
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
