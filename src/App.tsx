import '@xyflow/react/dist/style.css';
import './App.css'
import {store} from "./store.ts";
import {Provider} from "react-redux";
import {SchemaCanvas} from "./lib/components/SchemaCanvas.tsx";

function App() {
  return (
      <Provider store={store}>
          <div style={{ height: 800, width: 800, backgroundColor: 'white' }}>
              <SchemaCanvas/>
          </div>
      </Provider>
  )
}

export default App
