import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
// import useFetch from '../../hooks/useFetch';
import { useQueryChangeContext } from '../../providers/queryProviders';
import axios from 'axios';
import './styles.css'

const SidebarBuscador = () => {
    const handleSubmit  = (e) => {
        e.preventDefault()
        useQueryChange({
            input: false,
            q:location,
        })
    }
    const [location, setLocation] = useState('')
    const useQueryChange = useQueryChangeContext()

    const [paises, setPaises] = useState([])

    const getPaises = async () => {
        const res = await axios('https://cors-anywhere.herokuapp.com/http://country.io/names.json')
        setPaises(Object.entries(res.data))
    }    

    useEffect(() => {
        getPaises()
    }, [])

    return (
        <Col className='SidebarBuscador'>
            <form className="input-group mb-3" onSubmit={ handleSubmit }>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."
                    onChange={(e)=> setLocation(e.target.value)}/>
                <datalist id="datalistOptions">
                    {
                        paises?.map((pais, index) => {return <option key={index} value={pais[1]}></option>;})
                    }
                </datalist>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">Button</button>
                </div>
            </form>

        </Col>
    )
}

export default SidebarBuscador