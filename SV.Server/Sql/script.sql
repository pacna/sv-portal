INSERT INTO sv_portal.card (card_pack, craft, flavor_text, name, ppcost, rarity, type)
VALUES ('Basic', 0, 'If you try and hurt me, well make you regret it. But if youre a good friend, the fairies wont forget it!', 'Water Fairy', 1, 0, 0);

SELECT * FROM sv_portal.card;

INSERT INTO sv_portal.audio (location, card_id)
VALUES ('https://svgdb.me/assets/audio/en/vo_100111010_1.mp3', '4fdfbd3d-1d60-442a-ba6d-b5a850ff7880'),('https://svgdb.me/assets/audio/en/vo_100111010_2.mp3', '4fdfbd3d-1d60-442a-ba6d-b5a850ff7880');

SELECT * FROM sv_portal.audio;

INSERT INTO sv_portal.evo (art_location, ability_description, flavor_description, is_evo, card_id)
VALUES ('https://svgdb.me/assets/cards/en/C_100111010.png','Last Words: Put a Fairy into your hand.', 'Fairies get lonely, so we always stick together. If you hurt me, they wont be pleased!', false, '4fdfbd3d-1d60-442a-ba6d-b5a850ff7880'),
('https://svgdb.me/assets/cards/en/E_100111010.png', '(Same as the unevolved form.)', 'If you try and hurt me, well make you regret it. But if youre a good friend, the fairies wont forget it!', true, '4fdfbd3d-1d60-442a-ba6d-b5a850ff7880');


SELECT * FROM sv_portal.evo;

INSERT INTO sv_portal.battle_stats (atk, def, evo_id)
VALUES(1,1,'b7b0240a-e0a5-4ea5-bad6-1e8412a5148b'),
(3,3,'04869c1c-3276-4479-b521-cac34ccfe7c5');

SELECT * FROM sv_portal.battle_stats;