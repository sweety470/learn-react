import React from 'react'
import { MadeGoal } from './MadeGoal'
import { MissedGoal } from './MissedGoal'

export const Goal = (props) => {
    const isGoal = props.isGoal

    class Car {
        constructor(name){
            this.brand = name
        }

        present (){
            return 'I hvae this'+ this.brand
        }
    }

    class Model extends Car {
        constructor(name,model){
            super(name);
            this.model = model
        }
        show (){
            return  this.present()+ 'I have this brand'+this.model
        }
    }
    const myCar = new Model("audi","Audi")
    console.log(myCar.show())
 if(isGoal){
    return <MissedGoal />
 }
 else{
    return <MadeGoal />
 }
}
