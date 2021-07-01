import  React,{ useState } from 'react';
import api from '../services/Api'


import Card from '../components/cards/Card'
import Menu from '../components/menu/Menu'

function App() {
  const [produtos, setProd] = useState([])


  const clickComputer = (e)=>{
    e.preventDefault()
    const readProduction= async (name)=>{
      const data = await api.readAll(name)
      setProd(data)
    }
    readProduction('computadores')
  }

  const clickNotebook = (e)=>{
    e.preventDefault()
    const readProduction= async (name)=>{
      const data = await api.readAll(name)
      setProd(data)
    }
    readProduction('notebooks')
  }

  const clickCelular = (e)=>{
    e.preventDefault()
    const readProduction= async (name)=>{
      const data = await api.readAll(name)
      setProd(data)
    }
    readProduction('celulares')
  }
 
  return (
    <>
      <Menu 
        clickComputer={clickComputer}
        clickNotebook={clickNotebook}
        clickCelular={clickCelular}
      />
      <section className='ConteinerCard'>
        {produtos.map((produto) => {
          return <Card produto={produto} key={produto.id}/>
        })}
      </section>
    </>
  );
}

export default App;
