import './Footer.css'
import { useFilters } from '../hooks/useFilters.js'

export function Footer () {
    const { filters } = useFilters()

    return (
        <footer className='footer'>
            <h4>Prueba tecnica de React ⚛ </h4>
            <span>Juan Vivas</span>
            <h5>Shopping Cart con useContext y useReducer</h5>
            {
                JSON.stringify(filters, null, 2)
            }
        </footer>
    )
}