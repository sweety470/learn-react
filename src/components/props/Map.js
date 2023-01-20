import React from 'react'
import Prop from './Props'

export const Map = () => {
    const cars = [{name:"sa",brand:"sds"},{name:"dsd",brand:"sds"},{name:"dsd",brand:"sfsf"}]
    console.log(cars)
  return (
    <div>
        <p>Cars list</p>
        {cars.map((car)=><Prop key = {car.name} brand={car.brand}/>)}
       
        </div>
  )
}
