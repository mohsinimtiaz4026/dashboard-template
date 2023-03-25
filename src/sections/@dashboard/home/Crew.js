// @mui
import {Button, Card, CardHeader, Typography, Stack} from '@mui/material';

import {useTheme} from '@mui/material/styles';

import Scrollbar from '../../../components/Scrollbar';
// ----------------------------------------------------------------------

export default function Crew() {
  const theme = useTheme();
  return (
    <Card sx={{px: 3, py: 1}}>
      <CardHeader title="Crew" sx={{mb: 3, pl: 0}} />

      <Scrollbar
        sx={{
          height: '120px',
        }}
      >
        <Typography variant="body2" sx={{color: 'text.primary'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Scrollbar>

      <Stack spacing={2}>
        <Stack direction="row" spacing={1.5}>
          <Button fullWidth variant="outlined" color="info">
            View
          </Button>
          <Button fullWidth variant="contained" color="info">
            Edit
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
