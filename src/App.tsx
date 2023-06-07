import Routes from './routes/routes'
import { ToastProvider } from 'react-toast-notifications'

function App() {
  return (
    <ToastProvider
      autoDismissTimeout={3000}
      autoDismiss={true}
      placement={'top-center'}
    >
      <div className="App min-w-full w-fit sm:w-full box-border">
        <Routes />
      </div>
    </ToastProvider>
  )
}

export default App
