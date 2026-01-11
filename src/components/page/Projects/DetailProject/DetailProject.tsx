import { Settings } from '@mui/icons-material';
import { Stack } from '@mui/material';

import Avatar from '@/components/ui/Avatar';
import Dropdown from '@/components/ui/Dropdown';

const DetailProject = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
      }}
      justifyContent={'center'}
      alignItems={'center'}
      direction="row"
      spacing={2}
    >
      <Avatar text="John Doe" onClick={() => {}} />
      <Dropdown
        icon={<Settings />}
        options={[
          {
            value: 'close-project',
            label: 'Close Project',
            onClick: () => {},
          },
          {
            value: 'change-deadline',
            label: 'Change Deadline',
            onClick: () => {},
          },
        ]}
      />
    </Stack>
  );
};

export default DetailProject;
