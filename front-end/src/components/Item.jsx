import React from 'react'

const Item = () => {
  return <a href="#" className='flex flex-col gap-2'>
    <img src="http://localhost:3000/uploads/a90731aa-9a50-413d-bb4f-40cc4e869366-1741466753784.jpg" alt="Imagem da acomodação" 
    className='aspect-square object-cover rounded-2xl'
    />
    <div>
        <h3 className='text-xl font-semibold'>Cabo Frio, Rio de Janeiro</h3>
        <p className='truncate text-gray-600'>Cobertura, duplex, em frente Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore similique voluptates illum dolorem facilis dicta vero neque culpa pariatur quasi nulla fugiat unde dolore, facere numquam, voluptate veniam autem magni?</p>
    </div>
    <p><span className='font-semibold'>R$ 550 por noite</span></p>
  </a>;
};

export default Item