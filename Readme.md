npm create vite@latest Frontend -- --template react
 cd Frontend
  npm install
  npm run dev
   cd..
   npm init -y
   create backend folder

  // install all the dependenceis

  npm i  nodemon multer mongoose jsonwebtoken express-formidable express-async-handler  express dotenv,  cors cookie-partner concurrently bcryptjs

  cd .\Frontend\

  npm install slick-carousel react-slick react-router react-router-dom react-redux redux react-icons apexcharts moment flowbite axios @reduxjs/toolkit @paypal/react-paypal-js

gp to package.json and just below script remove test 
and paste this 
"
    "backend": "nodemon backend/index.js",
    "Frontend":" npm run  dev --prefix Frontend",
    "dev": "concurrently \"npm run Frontend\" \"npm run backend\""
"

create backend folder 
cd backend
create folder  name config ,controller,middleware, models, routes,utils,
then in backend create index.js//for landing page to backend


npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p