INSERT INTO sv_portal.card (card_pack, craft, name, ppcost, rarity, type)
VALUES ('Basic', 0, 'Water Fairy', 1, 0, 0);

SELECT * FROM sv_portal.card;

INSERT INTO sv_portal.audio (location, card_id)
VALUES ('https://svgdb.me/assets/audio/en/vo_100111010_1.mp3', 'e7ec8fcd-15f7-4f4b-8532-9c29db172fd1'),
('https://svgdb.me/assets/audio/en/vo_100111010_2.mp3', 'e7ec8fcd-15f7-4f4b-8532-9c29db172fd1');

SELECT * FROM sv_portal.audio;

INSERT INTO sv_portal.evo (art_location, ability_text, flavor_text, is_evo, card_id)
VALUES ('https://svgdb.me/assets/cards/en/C_100111010.png','Last Words: Put a Fairy into your hand.', 'Fairies get lonely, so we always stick together. If you hurt me, they wont be pleased!', false, 'e7ec8fcd-15f7-4f4b-8532-9c29db172fd1'),
('https://svgdb.me/assets/cards/en/E_100111010.png', '(Same as the unevolved form.)', 'If you try and hurt me, well make you regret it. But if youre a good friend, the fairies wont forget it!', true, 'e7ec8fcd-15f7-4f4b-8532-9c29db172fd1');


SELECT * FROM sv_portal.evo;

INSERT INTO sv_portal.battle_stats (atk, def, evo_id)
VALUES(1,1,'f04588ee-526b-484d-8f73-9d158c46fc2b'),
(3,3,'eaba53c3-365b-4ac1-a746-18bdb4269f6a');

SELECT * FROM sv_portal.battle_stats;