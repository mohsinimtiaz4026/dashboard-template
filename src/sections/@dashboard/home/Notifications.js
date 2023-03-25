// @mui
import {Card, Stack, Button, CardHeader, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';

import _notifications from '../../../_mock/_notifications';

import Label from '../../../components/Label';
import Scrollbar from '../../../components/Scrollbar';

// ----------------------------------------------------------------------

export default function TodayTrips() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';
  return (
    <Card sx={{px: 3, py: 1}}>
      <CardHeader title="Notifications" sx={{mb: 3, pl: 0}} />

      <Scrollbar
        sx={{
          height: '120px',
        }}
      >
        <Stack spacing={3} sx={{p: 3, pr: 0}}>
          {_notifications.map((row) => (
            <Stack direction="row" spacing={2}>
              <Label
                variant={isLight ? 'ghost' : 'filled'}
                color={
                  (row.type === 'Arrived' && 'success') ||
                  (row.type === 'Late' && 'warning') ||
                  'error'
                }
              >
                {row.type}
              </Label>
              <Typography variant="body2" sx={{color: 'text.primary'}}>
                {row.text}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Scrollbar>

      <Stack direction="row" spacing={1.5}>
        <Button fullWidth variant="outlined" color="info">
          View
        </Button>
        <Button fullWidth variant="contained" color="info">
          Edit
        </Button>
      </Stack>
    </Card>
  );
}
