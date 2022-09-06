import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context';
import Title from '../components/Title'

const getUnique = (items,value)=>{
  return [...new Set(items.map(item=>item[value]))]
}
export default function RoomFilter({rooms}) {
  const context = useContext(RoomContext)
  console.log(context);
  const {
    handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
  } = context;
  //get unique types
  let types = getUnique(rooms,'type');
  types = ['all',...types];
types = types.map((item,index)=>{
  return <option value={item} key={index}>{item}</option>
})
let people = getUnique(rooms,'capacity');
people = people.map((item,index)=>{
  return <option value={item} key={index}>{item}</option>
})
  return (
    <section className='filter-container'>
          <Title title="search rooms"/>
          <form className='filter-form'>
            {/* select type */}
             <div className='form-group'>
                 <label htmlFor="type" >room type</label>
                 <select name='type' id='type' value={type} className="form-control" onChange={handleChange}>
                   {types}
                   </select>
               </div>
                 {/* guests type */}
             <div className='form-group'>
                 <label htmlFor="capacity" >room type</label>
                 <select name='capacity' id='capacity' value={capacity} className="form-control" onChange={handleChange}>
                   {people}
                   </select>
               </div>
               {/* room price */}
               <div className='form-group'>
                 <label htmlFor='price'>
                   room price ${price}
                 </label>
                 <input type="range" name ='price' value={price} min={minPrice} max={maxPrice} id='price' onChange={handleChange} className="form-control"/>
               </div>
               {/* size */}
               <div className='form-group'>
                   <label htmlFor='size'  >room size</label>
                   <div className='size-inputs'>
                   <input type="number" name ='minSize' value={minSize}  id='minSize' onChange={handleChange} className="size-input"/>
                   <input type="number" name ='maxSize' value={maxSize}  id='maxSize' onChange={handleChange} className="size-input"/>
                     </div>
               </div>
               {/* extras */}
               <div className='form-group'>
                   <div className='single-extra'>
                     <input type="checkbox" name='breakfast' id='breakfast' value={breakfast} checked={breakfast} onChange={handleChange} />
                     <label htmlFor='breakfast'>breakfast</label>
                     </div>
                     <div className='single-extra'>
                     <input type="checkbox" name='pets' id='pets' value={pets} checked={pets} onChange={handleChange} />
                     <label htmlFor='pets'>pets</label>
                     </div>
               </div>
             </form>  
    </section>
  )
}
