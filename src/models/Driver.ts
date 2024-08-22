export interface Driver {
    id: number;
    name: string;
    team: string;
    championships: number;
}

export interface DriversData {
    drivers: Driver[];
}
