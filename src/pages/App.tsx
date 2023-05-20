import { Select } from 'antd'
import styles from "./App.module.scss"

function App() {
  interface IOption{
    value:string,
    label:string
  }
  interface ISelect {
    placeholder:string,
    options:IOption[]
  }
  const listaSelect:ISelect[] = [
    {
      placeholder:"País",
      options:[{
        value:"brazil",
        label: "Brasil"
      },
      {
        value:"spain",
        label: "Espanha"
      }
    ]
    },
    {placeholder:"Liga",
    options:[{
      value:"brazilian",
      label: "Liga Brasileira"
    },
    {
      value:"spanish",
      label: "Liga Espanhola"
    }
  ]},
    {placeholder:"Clube",
    options:[{
      value:"ceara",
      label: "Ceará"
    },
    {
      value:"vasco",
      label: "Vasco"
    }
  ]}
  ]

  return (
    <div id={"container-dashboard-meu-time"} className={styles.container}>
      <div id={"container-selecao-meu-time"} className={styles.containerSelecao}>
        {listaSelect.map((select) => {
          return(
          <Select
          id={"select-meu-time"}
          style={{ width: 200,paddingTop: 5 }}
          placeholder={select.placeholder}
          >
            {select.options.map((option) => {
              return(
                <option value={option.value}>{option.label}</option>
              )
            })}
          </Select>
          )
        })}
      </div>
    </div>
  )
}

export default App
