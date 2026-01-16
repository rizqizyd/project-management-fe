import { colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '@/components/layouts/SidebarLayout';

const breadcrumbs = [{ label: 'Projects', href: '/projects' }];

const Projects = () => {
  return (
    <SidebarLayout pageTitle="Projects" breadcrumbs={breadcrumbs}>
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>Shows Projects</Typography>
      </Paper>
    </SidebarLayout>
  );
};

export default Projects;
