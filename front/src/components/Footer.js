import React from "react";

const Footer = () => {
    return (
        <div className="flex items-start justify-center w-screen p-10 mt-10 text-sm gap-80 bg-zinc-900 text-zinc-400">
            <div className="flex flex-col gap-2 mt-7">
                    <p className="text-white">Buscar Tienda</p>
            </div>
            <div className="flex flex-col gap-2 mt-7">
                    <p className="text-white">AYUDA</p>
                    <p>Envíos y entregas</p>
                    <p> Devoluciones</p>
                    <p>Cambios</p>
                    <p>Autogestionar mi devolución</p>
                    <p>Opciones de pago</p>
                    <p>Contactate</p>
                    <p>Defensa al consumidor</p>
                    <p>Contactate</p>
                    <p>Botón de Arrepentimiento</p>
                    <p>Ver todos</p>
            </div>
            <div className="flex flex-col gap-2 mt-7">
                   <p className="text-white">ACERCA DE NIKE</p>
                   <p>Propósito</p>
                   <p>Noticias</p>
            </div>
            <div className="flex flex-col gap-2 mt-7">
                   <p className="text-white">NOVEDADES DE NIKE</p>
                   <p>Encontrá tu calzado</p>
                   <p> Noticias</p>
                   <p>¿Como elegir tu top?</p>
                   <p>Tips saludables</p>
                   <p>Promociones</p>
                   <p>¿Cómo sigo mi pedido?</p>
            </div>
        </div>
    );
}
export default Footer;