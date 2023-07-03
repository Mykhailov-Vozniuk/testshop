import React from 'react';
import { StarIcon as Star } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

export const Rating = (params) => {

    const func = () => {
        let res = []
        for(let i=0; i<5; i++){
            if(i <= params.rating-1){
                res.push(
                    <StarIcon className='icon'/>
                )
            }
            else{
                res.push(
                    <Star className='icon'/>
                )
            }
        }
        return res
    }

    const rating = func()

    return(
        <div>
            {rating}
        </div>
    )
}