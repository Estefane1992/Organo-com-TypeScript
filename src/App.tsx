 import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time/Time';
import Banner from './componentes/Banner'
import { IColaborador } from './compartilhado/interfaces/IColaborador';

function App() {

  const times = [
    {
      nome: 'Direção',
      corPrimaria: '#57C278 ',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Coordenação',
      corPrimaria: '#82CFFA',
      corSecundaria: ' #E8F8FF'
    },
    {
      nome: 'Professor',
      corPrimaria: '#A6D157 ',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Administração',
      corPrimaria: '#E06B69 ',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Secretaria',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Assistente de Sala',
      corPrimaria: '#FFBA05 ',
      corSecundaria: '#FFF5D9'
    }
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png'/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time  
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome )}
      />)}
    </div>
  );
}

export default App;
