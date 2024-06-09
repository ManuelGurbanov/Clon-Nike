import React, { useState } from 'react';
import Cart from './Cart';
  

const Top = () => {
  const [footerContent, setFooterContent] = useState('');
  const [sliderIndex, setSliderIndex] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
    console.log("Cart visibility toggled");
  };
  const content = {
    hombre: 'Ropa deportiva para hombres en oferta',
    mujer: 'Ropa de vestir en oferta',
    infantil: 'Talles de niños con 50% OFF',
    accesorios: 'Descubre nuestra nueva colección de accesorios',
    oportunidades: 'Aprovecha nuestras ofertas y oportunidades'
  };
  const contentSlider = [('Hasta 9 cuotas sin interés con bancos seleccionados'),
    ('Comprá y recibilo mañana en CABA y GBA'),
    ('Envío Gratis a partir de $255.000')
  ]
  const linkSlider = [('Ver Promociones Bancarias'),
    ('Ver Términos y Condiciones'),
    ('Ver Productos')
  ]

  const raiseIndex = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % contentSlider.length);
  };

  const lowerIndex = () => {
    setSliderIndex((prevIndex) =>
      prevIndex === 0 ? contentSlider.length - 1 : prevIndex - 1
    );
  };
  
  const handleMouseEnter = (content) => {
    setFooterContent(content);
  };

  const handleMouseLeave = () => {
    setFooterContent('');
  };

  return (
    <section className="fixed top-0 flex-col items-center justify-center w-screen h-20 font-bold">

      <header className='items-center justify-center hidden w-full text-white bg-black sm:flex'>
        <h1 className='m-2 text-center'>Hasta 6 cuotas sin interés con todos los bancos</h1>
      </header>

      <main className='flex items-center justify-between w-full px-4 text-black bg-white h-14'>
        <div className='w-[15%]'>
          <img
            src='https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.63/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg'
            className='w-[50%] sm:w-[15%]'
            alt='Nike Logo'
          />
        </div>

        <div className='hidden items-center justify-center text-center cursor-pointer w-[70%] font-light sm:flex'>
          <a
            className='mx-6 hover:underline underline-offset-8'
            onMouseEnter={() => handleMouseEnter(content.hombre)}
            onMouseLeave={handleMouseLeave}
          >
            Hombre
          </a>
          <a
            className='mx-6 hover:underline underline-offset-8'
            onMouseEnter={() => handleMouseEnter(content.mujer)}
            onMouseLeave={handleMouseLeave}
          >
            Mujer
          </a>
          <a
            className='mx-6 hover:underline underline-offset-8'
            onMouseEnter={() => handleMouseEnter(content.infantil)}
            onMouseLeave={handleMouseLeave}
          >
            Niño/a
          </a>
          <a
            className='mx-6 hover:underline underline-offset-8'
            onMouseEnter={() => handleMouseEnter(content.accesorios)}
            onMouseLeave={handleMouseLeave}
          >
            Accesorios
          </a>
          <a
            className='mx-6 hover:underline underline-offset-8'
            onMouseEnter={() => handleMouseEnter(content.oportunidades)}
            onMouseLeave={handleMouseLeave}
          >
            Oportunidades
          </a>
        </div>

        <div className='flex items-center justify-end gap-2 cursor-pointer w-[15%]'>
          <img
            src='https://nikearprod.vteximg.com.br/arquivos/search.svg'
            className='w-6'
            alt='Search Icon'
          />
          <input
            type="text"
            placeholder="Buscar"
            className="hidden px-2 py-1 font-thin border border-gray-200 rounded sm:block"
          />

            <button
                onClick={toggleCartVisibility}
            >
                <img
                        src='https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png'
                        className='w-6'
                        alt='Shopping Cart Icon'
                />
            </button>

        </div>
      </main>

        <section className={`items-center justify-center w-full h-24 text-sm text-center text-black bg-white ${footerContent ? 'hidden' : 'sm:flex hidden'}`}>
            <button onClick={lowerIndex}>-</button>

            <div className='flex flex-col items-center justify-center ml-5 mr-5'>
                <h1 className='font-light w-80'>{contentSlider[sliderIndex]}</h1>
                <p className='font-thin underline underline-offset-2'>{linkSlider[sliderIndex]}</p>
            </div>
        
            <button onClick={raiseIndex}>+</button>
        </section>

        <footer
        className={`flex items-center justify-center w-full text-black bg-white transition-opacity duration-500 ease-in-out ${footerContent ? 'opacity-100 flex' : 'opacity-0 hidden'}`}
        >

            <h1 className='m-2 mb-6 font-light text-center'>{footerContent}</h1>

        </footer>


        {cartVisible && <Cart />}
    </section>
  );
};

export default Top;
