import { Select } from 'antd'
import './App.css'

function App() {

  return (
    <div id="container-dashboard-meu-time" className="container">
      <div id="container-selecao-meu-time" className="container-selecao">
        <Select options={[
          {value:"Brazil",label:"Brasil"},
          {value:"Spain",label:"Espanha"}
        ]}>
        </Select>
      </div>
    </div>
  )
}

export default App
