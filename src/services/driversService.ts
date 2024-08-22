import { Driver, DriversData } from '../models/Driver.js';
import { dataDrivers } from '../repositories/driversRepository.js';

const dataDriversF1 = async (): Promise<DriversData> => {
    return await dataDrivers();
};

const dataDriverF1ById = async (id: number): Promise<Driver | null> => {
    const { drivers } = await dataDrivers();
    const driver = drivers.find((driver) => driver.id === id);

    return driver || null;
};

export { dataDriversF1, dataDriverF1ById };
