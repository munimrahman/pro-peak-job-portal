import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Route';
import { store } from './app/store';

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
