export interface Player {
        id: number,
        photo: string,
        name: string,
        level: string,
        games: {
            played: number,
            won: number
        },
        goalsScored: number
}
