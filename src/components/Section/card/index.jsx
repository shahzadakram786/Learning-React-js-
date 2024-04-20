import React from 'react'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'

import Details from '../card details'
import './style.css'


const card1= {
    title: 'Maison Margiela MetaTABI',
    image: img1,
    des1: 'floor',
    price1: '0.35',
    curr1: 'ETH',
    des2: 'Total Volume',
    price2: '0.48',
    curr2: 'ETH',
    verified : true


}
const card2= {
    title: 'Maison Margiela MetaTABI',
    image: img2,
    des1: 'floor',
    price1: '0.35',
    curr1: 'ETH',
    des2: 'Total Volume',
    price2: '0.48',
    curr2: 'ETH',
    verified : true

}
const card3= {
    title: 'Maison Margiela MetaTABI',
    image: img3,
    des1: 'floor',
    price1: '0.35',
    curr1: 'ETH',
    des2: 'Total Volume',
    price2: '0.48',
    curr2: 'ETH',
    verified : false

}

const card4= {
    title: 'Maison Margiela MetaTABI',
    image: img4,
    des1: 'floor',
    price1: '0.35',
    curr1: 'ETH',
    des2: 'Total Volume',
    price2: '0.48',
    curr2: 'ETH',
    verified : false

}
const card5= {
    title: 'Maison Margiela MetaTABI',
    image: img5,
    des1: 'floor',
    price1: '0.35',
    curr1: 'ETH',
    des2: 'Total Volume',
    price2: '0.48',
    curr2: 'ETH',
    verified : true

}



export default function Card() {
  return (
    <div className='CardsAll'>
        <Details drops={card1}/>
        <Details drops={card2}/>
        <Details drops={card3}/>
        <Details drops={card4}/>
        <Details drops={card5}/>
    </div>


   
  )
}
