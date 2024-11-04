
import './App.css'
import PageRoutes from './routes/PageRoutes'
import { BusquedaProvider } from './components/BusquedaContext'

function App() {

  return (
    <>
    <BusquedaProvider>
      <PageRoutes/>
    </BusquedaProvider>

    </>
  )
}

export default App
