
// Install packages
const express = require(`express`);
const path = require(`path`);

// initialise app
const app = express();
// middleware
app.use(express.static(path.join(__dirname, `public`)));
app.use(express.urlencoded({ extended: true }))


// listeners
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`server listening at port ${PORT}`)});




