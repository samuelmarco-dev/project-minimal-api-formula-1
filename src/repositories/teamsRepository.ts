import fs from 'fs';
import path from 'path';
import { TeamsData } from '../models/Team.js';

const pathData = path.join(__dirname, '../../database/teams.json');

async function dataTeams(): Promise<TeamsData> {
    const rawData = fs.readFileSync(pathData, 'utf-8');
    const jsonFile: TeamsData = JSON.parse(rawData);

    return jsonFile;
}

export { dataTeams };
