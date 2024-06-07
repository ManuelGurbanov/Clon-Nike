import React from 'react';

const Top = () => {
  return (
    <section className="fixed top-0 flex-col w-screen h-20 font-bold">
    
    <header className='flex items-center justify-center w-full text-white bg-black'>
        <h1 className='m-2 text-center'>Hasta 6 cuotas sin interés con todos los bancos</h1>
    </header>

    <main className='flex items-center justify-between w-full px-4 text-black bg-white h-14'>
        <div className='w-[15%]'>
            <img
                src='https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.63/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg'
                className='w-[15%]'
                alt='Nike Logo'
            />
        </div>


        <div className='flex items-center justify-center text-center cursor-pointer w-[70%] font-light'>
            <a className='mx-6 hover:underline underline-offset-8'>Hombre</a>
            <a className='mx-6 hover:underline underline-offset-8'>Mujer</a>
            <a className='mx-6 hover:underline underline-offset-8'>Niño/a</a>
            <a className='mx-6 hover:underline underline-offset-8'>Accesorios</a>
            <a className='mx-6 hover:underline underline-offset-8'>Oportunidades</a>
        </div>

        <div className='flex items-center justify-end gap-2 cursor-pointer w-[15%]'>
            <img src='https://nikearprod.vteximg.com.br/arquivos/search.svg'
                className='w-6'
            ></img>
            <input
                type="text"
                placeholder="Buscar"
                className="px-2 py-1 font-thin border border-gray-200 rounded"
            />
            <img src='https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png'
                className='w-6'
            ></img>
        </div>
    </main>
</section>


  );
};

export default Top;
