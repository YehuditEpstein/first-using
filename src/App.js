import { Provider } from "react-redux";
import store from "./redux/store";
import ViewTask from "./components/viewTask";
import { Socket } from "./component_socket/socket";

function App() {
  return (
    
      
      <Provider store={store}>
<div className="App"></div>
<ViewTask/>
<Socket/>
      </Provider>
     
      
  );
}

export default App;
