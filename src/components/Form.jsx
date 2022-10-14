import React, { useEffect, useState } from 'react'
import { ListaNoticia } from './ListaNoticia'
import Select from 'react-select'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Spinner } from './Spinner'


const MySwal = withReactContent(Swal);

export const Form = () => {

    const [datos, setDatos] = useState([]);
    const [categoria, setCategoria] = useState('Sports');
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {

        consultarAPI();
      }, [categoria]);

    const options = [
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'world', label: 'World' },
        { value: 'health', label: 'health' },
        { value: 'sports', label: 'Sports' }
    ]

    const apiKey = 'pub_12224e6b637cd5cc87115b0278a2681962fb6'

    const consultarAPI = async () => {
        try {
          setSpinner(true)
          // api request
          const respuesta = await fetch(
            `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${categoria}&language=es`
          );
          const dato = await respuesta.json();
            setDatos(dato.results);
          setSpinner(false)
        } catch (error) {
          // MySwal.fire({
          //           icon: 'error',
          //           title: 'Oops...',
          //           text: 'Something went wrong!',
          //         })
          
        }
      };
    
      const conditionalComp = (spinner) ? ( <Spinner/>) : (<ListaNoticia datos={datos}/>)

  return (
    <div className='container my-5 '>
        <div className='p-5 formBrand'>
            <form >
              <div className="row g-3 d-flex align-items-center">
                <div className='col-12 col-md-5 col-lg-5 d-flex justify-content-center'>
                    <label className=' col-form-label mx-4 fs-3 text-light'>Buscar por categoria</label>
                </div>
                <div className='col-12 col-md-5 col-lg-5 mx-1'>
                    <Select options={options} onChange={(e)=> setCategoria(e.value)  } defaultInputValue={''}/>
                </div>
              </div>
            </form>
            <hr />
        <div className='d-flex justify-content-center mt-5'>
            {
              conditionalComp
            }
        </div>
        </div>
    </div>
  )
}
