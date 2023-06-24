import PoliceDashboard from '../Components/Common/PoliceDashboard';
import InvestigatorsDashboard from '../Components/Common/InvestigationDashboard';
import CourtDashboard from '../Components/Common/CourtDashboard';
import PrisonDashboard from '../Components/Common/PrisonDashboard';
import SuperAdminDashboard from '../Components/Common/SuperAdmin';

const routes = [
    {
        path: '/police',
        component: PoliceDashboard,
        role: 'police',
        exact: true
    },
    {
        path: '/investigators',
        component: InvestigatorsDashboard,
        role: 'investigators',
        exact: true
    },
    {
        path: '/court',
        component: CourtDashboard,
        role: 'court',
        exact: true

    },
    {
        path: '/prison',
        component: PrisonDashboard,
        role: 'prison',
        exact: true
    },
    {
        path: '/admin',
        component: SuperAdminDashboard,
        role: 'admin',
        exact: true
    }
];

export default routes;