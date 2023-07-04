import React from 'react';
import { StarIcon as StarOutlined } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

export const Rating = (props) => {

    const func = () => {
        let res = []
        for(let i=0; i<5; i++){
            res.push( i <= props.rating-1 ? <StarIcon className='icon'/> : <StarOutlined className='icon'/>)
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