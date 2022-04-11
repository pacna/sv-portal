CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE SCHEMA IF NOT EXISTS sv_portal;

CREATE TABLE IF NOT EXISTS sv_portal.card
(
    card_id TEXT UNIQUE DEFAULT gen_random_uuid(),
    card_pack TEXT NOT NULL,
    craft INTEGER NOT NULL,
    flavor_text TEXT NOT NULL,
    name TEXT NOT NULL,
    ppcost INTEGER NOT NULL,
    rarity INTEGER NOT NULL,
    type INTEGER NOT NULL,
    PRIMARY KEY (card_id)
);

CREATE TABLE IF NOT EXISTS sv_portal.audio
(
    audio_id TEXT UNIQUE DEFAULT gen_random_uuid(),
    location TEXT NOT NULL,
    card_id TEXT,
    PRIMARY KEY (audio_id),
    FOREIGN KEY (card_id) REFERENCES sv_portal.card(card_id)
);

CREATE TABLE IF NOT EXISTS sv_portal.evo
(
    evo_id TEXT UNIQUE DEFAULT gen_random_uuid(),
    ability_description TEXT,
    art_location TEXT NOT NULL,
    flavor_description TEXT,
    is_evo BOOLEAN NOT NULL,
    card_id TEXT,
    PRIMARY KEY (evo_id),
    FOREIGN KEY (card_id) REFERENCES sv_portal.card(card_id)
);

CREATE TABLE IF NOT EXISTS sv_portal.battle_stats
(
    battle_stats_id TEXT UNIQUE DEFAULT gen_random_uuid(),
    atk INTEGER,
    def INTEGER,
    evo_id TEXT,
    PRIMARY KEY (battle_stats_id),
    FOREIGN KEY (evo_id) REFERENCES sv_portal.evo(evo_id)
);