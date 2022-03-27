INSERT INTO sv_portal.card (card_pack, craft, flavor_text, name, ppcost, rarity, type)
VALUES ('Basic', 0, 'If you try and hurt me, well make you regret it. But if youre a good friend, the fairies wont forget it!', 'Water Fairy', 1, 0, 0);

SELECT * FROM sv_portal.card;

INSERT INTO sv_portal.audio (location, card_id)
VALUES ('https://svgdb.me/assets/audio/en/vo_100111010_1.mp3', '45ccbb6b-5f91-4296-b588-f6a6118d68bd'),('https://svgdb.me/assets/audio/en/vo_100111010_2.mp3', '45ccbb6b-5f91-4296-b588-f6a6118d68bd');

SELECT * FROM sv_portal.audio;

INSERT INTO sv_portal.evo (art_location, ability_description, flavor_description, is_evo, card_id)
VALUES ('https://svgdb.me/assets/cards/en/C_100111010.png','Last Words: Put a Fairy into your hand.', 'Fairies get lonely, so we always stick together. If you hurt me, they wont be pleased!', false, '45ccbb6b-5f91-4296-b588-f6a6118d68bd'),
('https://svgdb.me/assets/cards/en/E_100111010.png', '(Same as the unevolved form.)', 'If you try and hurt me, well make you regret it. But if youre a good friend, the fairies wont forget it!', true, '45ccbb6b-5f91-4296-b588-f6a6118d68bd');


SELECT * FROM sv_portal.evo;

INSERT INTO sv_portal.battle_stats (atk, def, evo_id)
VALUES(1,1,'fe5bd1b4-8201-4d90-8b57-a2352fa2ffb9'),
(3,3,'6f21afa2-70ce-4a2c-8d9a-b93403cf9fed');

SELECT * FROM sv_portal.battle_stats;