import { Box, Button } from '@mui/material';
import { useState } from 'react';

import Modal from '@/components/ui/Modal';

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={handleOpenModal}
      >
        Open Modal
      </Button>
      <Modal
        title="Dashboard Modal"
        open={openModal}
        handleClose={handleCloseModal}
      >
        <Box
          sx={{
            paddin: 2,
            width: 500,
          }}
        >
          This is the content of the dashboard modal.
        </Box>
      </Modal>
    </Box>
  );
};

export default Dashboard;
