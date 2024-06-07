import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css';
import MainProducts from './components/MainProducts';
import './index.css';
import Top from './components/Top'
//import TittleAndButton from './components/TittleAndButton';
import ImgBanner from './components/ImgBanner';
import ImgGrid from './components/ImgGrid';
const root = ReactDOM.createRoot(document.getElementById('root'));


const gridImages = [
  { url: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/6e914f4f-7d73-4cf5-ad45-c99167f6c71e___1c50d0e8d47bac313fa10245f9b7a18d.jpg'},
  { url: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/20fd703a-01fa-4300-832d-737d20bb8e85___d049f36d65d8a4756db7c00c3528c7ac.jpg'},
  { url: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/37ff614b-2581-4987-ac4a-e7a6890aafa8___0e00568f17107eb6cc01fd38c5f01404.jpg'},
  { url: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/9f636e29-695e-4bf8-b988-8ce1b6fbc75d___4f3c15c2a14eb8ccf0c2d824d4bf7c86.jpg'},
  { url: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/21c6799f-1de6-4654-900c-b7aa5f2d227c___758832b81516262bdb31192f749d8cef.jpg'}
];

root.render(
  <React.StrictMode>
    <Top />

    <ImgBanner url="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/eb44ee06-0f83-4d9a-8697-dd5bab39646c___a6612337eff7ebbeb56ad560d005bd77.png"/>
    {/* <TittleAndButton tittle="REGALOS PARA TU PRIMER ENTRENADOR" buttonText="Ver Colección"/> */}

    <MainProducts tittle="Regalos para tu primer entrenador:"/>

    <ImgBanner url="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/77879e39-b9d8-493f-9442-98b3f23358a3___04adb1cb1d221dceb27d7dd69c204b7f.jpg"/>
    <ImgBanner url="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/06b3d17f-6ae8-48d6-acc9-5668ac213845___fb790ffff224f8880052ece91aad5bfa.jpg"/>
    {/* <TittleAndButton tittle="SIEMPRE ICÓNICO" buttonText="Comprar"/> */}

    <ImgBanner url="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/889703fd-885b-4f8b-bd86-a3aa031b2eb4___cd696b295f2e59541a9d3a74c14c16e2.png" />

    <MainProducts tittle="Íconos"/>

    <ImgGrid imgUrl={gridImages} />
    
  </React.StrictMode>
);

reportWebVitals();