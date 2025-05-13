const games = {
    "newestGameIndex": 0,
    "games": [
    {
      "title": "Skybound Legacy",
      "imgURL": "/assets/images/gameCover.jpg",
      "description": "Explore floating islands in this aerial exploration game.",
      "genres": ["Adventure", "Exploration"],
      "release": "2024-12-01"
    },
    {
      "title": "Quantum Drift",
      "imgURL": "/assets/images/gameCover.jpg",
      "description": "A fast-paced racer in a broken dimension.",
      "genres": ["Racing", "Sci-Fi"],
      "release": "2024-10-22"
    },
    {
      "title": "Pixel Noir",
      "imgURL": "/assets/images/gameCover.jpg",
      "description": "A detective RPG set in a pixelated crime city.",
      "genres": ["RPG", "Mystery"],
      "release": "2023-08-12"
    },
    {
      "title": "Wyrmwood Tales",
      "imgURL": "/assets/images/gameCover.jpg",
      "description": "Turn-based tactics in a cursed forest.",
      "genres": ["Strategy", "Turn-based"],
      "release": "2024-02-18"
    },
    {
      "title": "Void Signal",
      "imgURL": "/assets/images/gameCover.jpg",
      "description": "Decode alien transmissions to uncover lost civilizations.",
      "genres": ["Puzzle", "Sci-Fi"],
      "release": "2023-11-30"
    },
    {
      "title": "Eclipse Bloom",
      "imgURL": "/assets/images/gameCover.jpg",
      "description": "A surreal journey through dreamlike dimensions.",
      "genres": ["Platformer", "Art Game"],
      "release": "2024-05-21"
    },
    {
      "title": "Broken Mechs",
      "imgURL": "/assets/images/gameCover.jpg",
      "description": "Survive as a scavenger in a mech-ravaged wasteland.",
      "genres": ["Survival", "Shooter"],
      "release": "2023-09-05"
    },
    {
      "title": "Glyphbound",
      "imgURL": "/assets/images/gameCover.jpg",
      "description": "Control ancient symbols to solve arcane puzzles.",
      "genres": ["Puzzle", "Fantasy"],
      "release": "2024-07-17"
    },
    {
      "title": "Neon Fugue",
      "imgURL": "/assets/images/gameCover.jpg",
      "description": "Rhythm-based brawler set in a cyberpunk club world.",
      "genres": ["Rhythm", "Action"],
      "release": "2023-06-29"
    },
    {
      "title": "Crimson Depths",
      "imgURL": "/assets/images/gameCover.jpg",
      "description": "Dive into an underwater horror adventure.",
      "genres": ["Horror", "Adventure"],
      "release": "2024-03-03"
    },
    {
      "title": "Chrono Orchard",
      "imgURL": "/assets/images/gameCover.jpg",
      "description": "Farming sim with a twist of time travel.",
      "genres": ["Simulation", "Time Travel"],
      "release": "2023-12-14"
    }
  ]
}

async function getNewestGame() {
    const latestGame = games.games[games.newestGameIndex];
    console.log(latestGame);
} 

async function getGames() {

}

getNewestGame();