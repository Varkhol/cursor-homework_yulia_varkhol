import React from 'react';
import Publication from './components/publication/Publication';
import {currentDateFunc} from "./components/utils";

const author_img = "https://s.dou.ua/CACHE/images/img/static/companies/Graphic_Logo/72f3fd6bc92fb3c9d2011aa161c1b090.png";
const publication_img = "https://www.digest.pro/wp-content/uploads/2019/12/Izuchit-biblioteku-React-JS-1024x576.png";
const link = "https://uk.reactjs.org/versions";
const date = currentDateFunc();

function App() {
  return (
    <Publication author={{
            name: "Cursor-News",
            photo: author_img,
            isActive:true
         }}
         content="Try new version of React!!!"
         image={publication_img}
         date={date}
         link={link}
    />
  );
}

export default App;