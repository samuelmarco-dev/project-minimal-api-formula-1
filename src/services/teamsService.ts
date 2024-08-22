import { Team, TeamsData } from '../models/Team.js';
import { dataTeams } from '../repositories/teamsRepository.js';

const dataTeamsF1 = async (): Promise<TeamsData> => {
    return await dataTeams();
};

const dataTeamF1ById = async (id: number): Promise<Team | null> => {
    const { teams } = await dataTeams();
    const team = teams.find((team) => team.id === id);

    return team || null;
};

export { dataTeamsF1, dataTeamF1ById };
