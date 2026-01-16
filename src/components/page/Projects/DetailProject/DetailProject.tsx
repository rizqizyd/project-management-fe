import { colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '@/components/layouts/SidebarLayout';

const breadcrumbs = [
  { label: 'Projects', href: '/projects' },
  { label: 'Detail Project', href: '/projects/detail' },
];

const DetailProject = () => {
  return (
    <SidebarLayout pageTitle="Detail Project" breadcrumbs={breadcrumbs}>
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>Shows Detail Project</Typography>
      </Paper>
    </SidebarLayout>
  );
};

export default DetailProject;
