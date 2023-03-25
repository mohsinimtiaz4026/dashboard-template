// @mui
import {styled} from '@mui/material/styles';
import {Button, Card, CardHeader, Typography, Stack} from '@mui/material';

import {useTheme} from '@mui/material/styles';
// ----------------------------------------------------------------------

const RowStyle = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

// ----------------------------------------------------------------------

export default function TodayTrips() {
  const theme = useTheme();
  return (
    <Card sx={{px: 3, py: 1}}>
      <CardHeader title="Today's Trips" sx={{mb: 3, pl: 0}} />

      <RowStyle
        sx={{
          height: '120px',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" sx={{color: 'text.primary'}}>
          <span style={{color: theme.palette.primary.main}}>3</span> / 8
        </Typography>
      </RowStyle>

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