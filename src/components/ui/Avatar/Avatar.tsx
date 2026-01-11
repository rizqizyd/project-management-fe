import { Avatar as BaseAvatar, Box, Popover, Typography } from '@mui/material';
import { useState } from 'react';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  const initialName = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .trim();

  const displayName =
    initialName.length > 2 ? initialName.substring(0, 2) : initialName;

  return {
    sx: {
      bgcolor: stringToColor(name),
      cursor: 'pointer',
    },
    children: displayName,
  };
}

interface AvatarProps {
  text: string;
  onClick: () => void;
}

const Avatar = ({ text, onClick }: AvatarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <BaseAvatar
        {...stringAvatar(text)}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        onClick={onClick}
      />
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box padding={1}>
          <Typography>{text}</Typography>
        </Box>
      </Popover>
    </>
  );
};

export default Avatar;
