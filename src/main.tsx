import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';


createRoot(document.getElementById('root')!).render(
  <Router>
    <Provider store={store}> 
    <App />
    </Provider>
    </Router>
)
