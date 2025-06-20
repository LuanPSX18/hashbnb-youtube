import React from 'react'
import Item from '../Item';

const Home = () => {
  return (
  <section>
      <div className='gap-8 grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] p-8 max-w-7xl mx-auto'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};

export default Home