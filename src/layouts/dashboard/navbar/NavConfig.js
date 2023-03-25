// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{width: 1, height: 1}} />
);

const ICONS = {
  user: getIcon('ic_user'),
  dashboard: getIcon('ic_dashboard'),
  calendar: getIcon('ic_calendar'),
  user: getIcon('ic_user'),
  map: getIcon('ic_map'),
  notification: getIcon('ic_notification'),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    // subheader: 'Tabs',
    subheader: '',
    items: [
      {title: 'Home', path: '/dashboard/home', icon: ICONS.dashboard},
      {title: 'Calendar', path: '/dashboard/calendar', icon: ICONS.calendar},
      {title: 'Crew', path: '/dashboard/crew', icon: ICONS.user},
      {
        title: 'Notifications',
        path: '/dashboard/notifications',
        icon: ICONS.notification,
      },
      {title: 'Maps', path: '/dashboard/map', icon: ICONS.map},
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     {
  //       title: 'user',
  //       path: '/dashboard/user',
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Four', path: '/dashboard/user/four' },
  //         { title: 'Five', path: '/dashboard/user/five' },
  //         { title: 'Six', path: '/dashboard/user/six' },
  //       ],
  //     },
  //   ],
  // },
];

export default sidebarConfig;
