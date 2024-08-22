import fs from 'fs';
import path from 'path';
import { DriversData } from '../models/Driver.js';

const pathData = path.join(__dirname, '../../database/drivers.json');

async function dataDrivers(): Promise<DriversData> {
    const rawData = fs.readFileSync(pathData, 'utf-8');
    const jsonFile: DriversData = JSON.parse(rawData);

    return jsonFile;
}

export { dataDrivers };
