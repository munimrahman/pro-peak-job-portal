import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Route';
import useAuthCheck from './hooks/useAuthCheck';

function App() {
    const authCheck = useAuthCheck();

    return authCheck && <RouterProvider router={router} />;
}
export default App;
