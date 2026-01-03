import { Pagination as BasePagination, Box, Stack } from '@mui/material';

interface PaginationProps {
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const Pagination = ({ count, onChange }: PaginationProps) => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
    >
      <Stack spacing={2} sx={{ marginTop: 2 }}>
        <BasePagination
          count={count}
          onChange={onChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </Box>
  );
};

export default Pagination;
