import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Login from './components/page/Auth/Login';
import Dashboard from './components/page/Dashboard/Dashboard';
import DetailProject from './components/page/Projects/DetailProject';

const theme = createTheme({
  typography: {
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
  },
});

// interface ColumnsProps<T = unknown> {
//   id: string;
//   label: string;
//   align?: 'right' | 'left' | 'center';
//   render?: (row: T) => React.ReactNode;
// }

// const columns: ColumnsProps<{ name: string; age: number }>[] = [
//   { id: 'name', label: 'Name' },
//   { id: 'age', label: 'Age', align: 'right' },
//   {
//     id: 'actions',
//     label: 'Actions',
//     align: 'center',
//     render: (row) => (
//       <button onClick={() => alert(`Editing ${row.name}`)}>Edit</button>
//     ),
//   },
// ];

// const data = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 },
// ];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/projects/:id',
    element: <DetailProject />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
