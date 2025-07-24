import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters.js'

export function Filters () {

    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()

    const handleChangeMinPrice = (event) => {
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
                value={filters.minPrice}
                />

                <span>${filters.minPrice}</span>
            </div>
                
            <div>
                <label htmlFor='category'>Category</label>
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