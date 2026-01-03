import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { createBrowserRouter, Link, RouterProvider } from 'react-router';

import Dashboard from './components/page/Dashboard/Dashboard';

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
    element: (
      <Box>
        <Typography variant="h1">Login</Typography>
        <Link to={'/'}>Home</Link>
      </Box>
    ),
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
