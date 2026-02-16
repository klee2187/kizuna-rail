import { 
    getAllRoutes, 
    getRoutesByRegion,
    getRoutesBySeason,
    getListOfRegions, 
    getListOfSeasons 
} from '../../models/model.js';

export default async (req, res) => {
    const { region, season } = req.query;
    const regions = await getListOfRegions();
    const seasons = await getListOfSeasons();

    let routes;

    //Filter's based on query parameters
    if (region && season) {
        const byRegion  = await getRoutesByRegion(region);
        routes = byRegion.filter(r => r.bestSeason.toLowerCase() === season.toLowerCase());
    } else if (region) {
        routes = await getRoutesByRegion(region);
    } else if (season) {
        routes = await getRoutesBySeason(season);
    } else {
        routes = await getAllRoutes();
    }

    res.render('./train-routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons,
        selectedRegion: region || '',
        selectedSeason: season || ''
    });
};

