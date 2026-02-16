import { getCompleteRouteDetails } from '../../models/model.js';
import { numToMonth } from '../../includes/helpers.js';

export default async (req, res) => {
    const { routeId } = req.params;
    const details = await getCompleteRouteDetails(routeId);

    // TODO: getCompleteRouteDetails instead

    res.render('train-routes/details', { 
        title: 'Route Details',
        details,
        numToMonth
    });
};