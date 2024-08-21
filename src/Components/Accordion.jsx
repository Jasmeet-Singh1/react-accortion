/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Accordion(props) {
  const { items } = props;
  const [state, setState] = useState();
  function handleIndex(index) {
    setState(index);
  }

  return (
    <div className='flex flex-col mt-40 px-40 gap-6'>
      {items.map((item, index) => {
        const isExpanded = index == state;

        return (
          <div className='flex flex-col gap-5 px-10' key={index}>
            <div className='flex items-center'>
              <div className='w-[400px]'>{item.title}</div>
              <button onClick={() => handleIndex(isExpanded ? null : index)}>{isExpanded ? '-' : '+'}</button>
            </div>
            {isExpanded && item.content}
          </div>
        );
      })}
    </div>
  );
}
