import { useState } from 'react'
import './Filters.css'

export function Filters ({ onChange }) {

    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event)  => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    const categories = [{
        id: '0',
        name: 'groceries'
    },{
        id: '1',
        name: 'furniture'
    },{
        id: '2',
        name: 'fragrances'
    },{
        id: '3',
        name: 'beauty'
    }]

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input 
                type="range" 
                id="price"
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}
                />

                <span>${minPrice}</span>
            </div>
                
            <div>
                <label htmlFor="category">Category</label>
                <select onChange={handleChangeCategory} id="category">
                    {
                        categories.map((category) => {
                            return(
                                <option key={category.id} value={category.name}>{category.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        </section>
    )
}