import {
  Table as BaseTable,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface Column<T> {
  id: string;
  label: string;
  align?: 'right' | 'left' | 'center';
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Array<Column<T>>;
  data: Array<T>;
}

const Table = <T,>({ columns, data }: TableProps<T>) => {
  if (!columns || !data || columns.length === 0 || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <TableContainer component={Paper}>
      <BaseTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align || 'left'}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'}>
                  {column.render
                    ? column.render(row)
                    : (row[column.id as keyof T] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </BaseTable>
    </TableContainer>
  );
};

export default Table;
