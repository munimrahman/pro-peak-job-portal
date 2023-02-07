import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Route';

function App() {
    return (
        <div className="">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
