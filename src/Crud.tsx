import './site.css'
import Table from './Table'
import { Details } from './Details'
import { createContext, useState } from 'react'
import { Api } from './server/api'

const DEFAULT_API = Api('dfta')

export const ApiContext = createContext<Api>(DEFAULT_API)

export default function Crud() {

  const [api, setApi] = useState<Api>(DEFAULT_API)

  return (
    <div>
      <ApiContext.Provider value={api}>
        <Table />
        <Details />
      </ApiContext.Provider>
    </div>
  )
}

