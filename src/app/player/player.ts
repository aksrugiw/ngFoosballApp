export interface Player {
        photo: string,
        name: string,
        level: string,
        games: {
            played: number,
            won: number
        },
        goalsScore: number
}
