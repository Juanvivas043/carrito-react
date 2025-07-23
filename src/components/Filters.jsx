import { useId, useState } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters.js'

export function Filters () {

    const { setFilters } = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event)  => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    const categories = [{
        id: '0',
        name: 'all'
    },{
        id: '1',
        name: 'groceries'
    },{
        id: '2',
        name: 'furniture'
    },{
        id: '3',
        name: 'fragrances'
    },{
        id: '4',
        name: 'beauty'
    }]

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input className='range-filter'
                type="range" 
                id={minPriceFilterId}
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}
                />

                <span>${minPrice}</span>
            </div>
                
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select onChange={handleChangeCategory} id="category">
                    {
                        categories.map((category) => {
                            return(
                                <option key={categoryFilterId} value={category.name}>{category.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        </section>
    )
}