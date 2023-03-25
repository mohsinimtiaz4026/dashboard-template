// @mui
import {Container, Grid, Typography} from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import {TodayTrips, Notifications, Crew} from '../../sections/@dashboard/home';
// ----------------------------------------------------------------------

PageHome.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageHome() {
  const {themeStretch} = useSettings();

  console.log();
  return (
    <Page title="Home">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <TodayTrips></TodayTrips>
          </Grid>
          <Grid item xs={12} md={5}>
            <Notifications></Notifications>
          </Grid>
          <Grid item xs={12} md={4}>
            <Crew></Crew>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
