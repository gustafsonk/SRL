﻿//Version 7.1 of the Ocarina of Time bingo goal list
//Overview of changes from v6:
//   Removed all adult trade item goals (pocket cucco, cojiro...claim check)
//   Lowered the difficulty of several broken goals including spirit skulltulas, botw skulltulas, frog's heart piece
//   Raised the difficulties of some goals in fire and spirit to make them more viable
//   Added 'At least 3 skulltulas in Water Temple' as difficulty 16 goal
//   Added 'Free all 9 gorons in Fire Temple' as difficulty 21 goal
//   Fixed some synergies, especially those pertaining to 'zl' and 'quiver'
//   Added child designation to some borderline child-possible goals
//   Rearranged goals slightly so similar goals are not in the same difficulty tier

var bingoList = [];
bingoList[1] = [
  { name: "Bottled Fish", jp: 'ビン(魚)', types: ["bottle"], child: "yes" },
  { name: "Bottled Fairy", jp: 'ビン(妖精)', types: ["bottle"], child: "yes" },
  { name: "Red Potion", jp: '赤いクスリ', types: ["bottle"], child: "yes" },
  { name: "Green Potion", jp: '緑のクスリ', types: ["bottle"], child: "yes" },
  { name: "Bottled Poe", jp: 'ビン(ポウ)', types: ["bottle"], child: "yes" },
  { name: "Lens of Truth", jp: 'まことのメガネ', types: ["botw"], child: "yes" }
];
bingoList[2] = [
  { name: "Defeat a Skull Kid", jp: 'スタルキッド撃破', types: ["skullkid", "forest"], child: "no" },
  { name: "Bullet Bag (50)", jp: 'デクのタネ袋(50)', types: ["bulletbag"], child: "yes" },
  { name: "Adult's Wallet", jp: '大人のサイフ', types: ["wallet", "skulltula", "atrade"], child: "yes" },
  { name: "Map & Compass in Deku Tree", jp: 'デクの樹様の中のマップとコンパス', types: ["deku", "dungeon_item"], child: "yes" },
  { name: "At least 30 Deku Nuts", jp: 'デクの実30個以上', types: ["nuts", "forest"], child: "yes" }
];
bingoList[3] = [
  { name: "Fairy Slingshot", jp: '妖精のパチンコ', types: ["bulletbag", "deku"], child: "yes" },
  { name: "Map & Compass in Dodongo's Cavern", jp: 'ドドンゴの洞窟のマップとコンパス', types: ["dc", "dungeon_item"], child: "yes" },
  { name: "Ruto's Letter", jp: 'ルトの手紙', types: ["ruto"], child: "yes" },
  { name: "Map & Compass in Bottom of the Well", jp: '井戸の底のマップとコンパス', types: ["botw", "dungeon_item"], child: "yes" },
  { name: "Black Gauntlets", jp: '黒のグローブ', types: ["strength", "bulletbag", "atrade"], child: "no" },
  { name: "Goron Tunic", jp: 'ゴロンの服', types: ["sets", "dmc", "fire"], child: "no" }
];

bingoList[4] = [
  { name: "Defeat King Dodongo", jp: 'キングドドンゴ撃破', types: ["dc"], child: "yes" },
  { name: "Bullet Bag (40)", jp: 'デクのタネ袋(40)', types: ["bulletbag", "deku"], child: "yes" },
  { name: "Bomb Bag (30)", jp: 'ボム袋(30)', types: ["bombbag", "dc", "atrade"], child: "yes" },
  { name: "Minuet of Forest", jp: '森のメヌエット', types: ["forest", "songs"], child: "no" },
  { name: "Zora Tunic", jp: 'ゾーラの服', types: ["sets", "ice"], child: "no" },
  { name: "Bolero of Fire", jp: '炎のボレロ', types: ["dmc", "fire", "songs"], child: "no" }
];
bingoList[5] = [
  { name: "Quiver (40)", jp: '矢立て(40)', types: ["atrade", "forest", "quiver"], child: "no" },
  { name: "Map & Compass in Shadow Temple", jp: '闇の神殿のマップとコンパス', types: ["shadow", "dungeon_item"], child: "yes" },
  { name: "Both heart pieces in Death Mountain Crater", jp: 'デスマウンテン火口のハートのかけら２つ', types: ["dmc", "fire", "hearts"], child: "yes" },
  { name: "At least 3 songs", jp: '歌3つ以上', types: ["songs", "zl"], child: "yes" },
  { name: "30 Deku Sticks", jp: 'デクの棒30本', types: ["atrade", "ctrade"], child: "yes" },
  { name: "Cow in House", jp: '牛(リンクの家)', types: ["cow"], child: "no" }
];
bingoList[6] = [
  { name: "4 Maps", jp: 'マップ4つ', types: ["dungeon_item", "claimcheck"], child: "yes" },
  { name: "Defeat Queen Gohma", jp: 'ゴーマ撃破', types: ["deku", "ganon"], child: "yes" },
  { name: "Defeat all Lizalfos in Dodongo's Cavern", jp: 'ドドンゴの洞窟のリザルフォス全て撃破', types: ["dc"], child: "yes" },
  { name: "Milk", jp: 'ロンロン牛乳', types: ["lonlon", "zl"], child: "yes" },
  { name: "Beat the Deku Tree", jp: 'デクの樹様の中クリア', types: ["deku", "ganon"], child: "yes" },
  { name: "Epona's Song", jp: 'エポナの歌', types: ["lonlon", "songs"], child: "yes" },
  { name: "All 3 Kokiri Forest area Skulltulas", jp: 'コキリの森エリアの黄金のスタルチュラ３匹', types: ["skulltula"], child: "no" },
  { name: "Beat Dodongo's Cavern", jp: 'ドドンゴの洞窟クリア', types: ["dc", "fortress"], child: "yes" }
];
bingoList[7] = [
  { name: "4 Compasses", jp: 'コンパス4つ', types: ["dungeon_item"], child: "yes" },
  { name: "Fill all 4 Bottle Slots", jp: '4つの空きビンスロットを全て埋める', types: ["bottle"], child: "yes" },
  { name: "Fire Temple Boss Key", jp: '炎の神殿のボス部屋のカギ', types: ["fire", "dungeon_item"], child: "no" },
  { name: "Ice Arrows", jp: '氷の矢', types: ["fortress", "water"], child: "yes" },
  { name: "Defeat Big Octo", jp: '大オクタ撃破', types: ["jabu"], child: "yes" },
  { name: "3 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ3つ', types: ["fortress"], child: "yes" },
  { name: "Defeat a White Wolfos", jp: 'ホワイトウルフォス撃破', types: ["ice", "fortress"], child: "yes" },
  { name: "3 Tunics", jp: '服3種類', types: ["sets", "ice"], child: "no" }
];
bingoList[8] = [
  { name: "Defeat Phantom Ganon", jp: 'ファントムガノン撃破', types: ["forest"], child: "yes" },
  { name: "Map & Compass in Jabu-Jabu", jp: 'ジャブジャブ様のお腹のマップとコンパス', types: ["jabu", "dungeon_item"], child: "yes" },
  { name: "Blue Fire", jp: '青い炎', types: ["ice", "bottle", "deku", "ganon"], child: "yes" },
  { name: "5 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ5つ', types: ["fortress"], child: "yes" },
  { name: "37th heart piece (Child Fortress)", jp: '37番目のハートのかけら(子供のゲルドの砦)', types: ["fortress", "hearts"], child: "yes" },
  { name: "Beat the Forest Temple", jp: '森の神殿クリア', types: ["forest"], child: "yes" },
  { name: "6 Hearts", jp: 'ハート6つ', types: ["hearts"], child: "yes" },
  { name: "Giant's Knife", jp: '巨人のナイフ', types: ["sets", "wallet", "dmc"], child: "no" },
  { name: "Plant bean in Death Mountain Crater", jp: 'デスマウンテン火口の土にマメを植える', types: ["dmc", "beans"], child: "yes" }
];
bingoList[9] = [
  { name: "Requiem of Spirit", jp: '魂のレクイエム', types: ["spirit", "songs"], child: "yes" },
  { name: "Forest Medallion", jp: '森のメダル', types: ["forest", "lightarrow", "atrade"], child: "yes" },
  { name: "At least 7 Magic Beans", jp: '魔法のマメ7つ以上', types: ["beans", "skulltula", "ctrade"], child: "yes" },
  { name: "All 4 Lost Woods area Skulltulas", jp: '迷いの森エリアの黄金のスタルチュラ4匹', types: ["skulltula", "forest"], child: "no" },
  { name: "Ice Cavern Heart Piece", jp: '氷の洞窟のハートのかけら', types: ["ice", "hearts"], child: "yes" },
  { name: "Map & Compass in Ice Cavern", jp: '氷の洞窟のマップとコンパス', types: ["ice", "dungeon_item"], child: "no" },
  { name: "All 3 Skulltulas in Ice Cavern", jp: '氷の洞窟の黄金のスタルチュラ3匹', types: ["ice", "skulltula"], child: "yes" },
  { name: "Ganon's Castle Boss Key", jp: 'ガノン城のボス部屋のカギ', types: ["ganon", "deku", "dungeon_item"], child: "yes" },
  { name: "6 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ6つ', types: ["fortress"], child: "yes" }
];

bingoList[10] = [
  { name: "All 4 Skulltulas in Jabu-Jabu", jp: 'ジャブジャブ様のお腹の黄金のスタルチュラ4匹', types: ["jabu", "skulltula"], child: "yes" },
  { name: "Both Gerudo's Fortress area Skulltulas", jp: 'ゲルドの砦の黄金のスタルチュラ2匹', types: ["skulltula", "fortress"], child: "no" },
  { name: "All 4 Skulltulas in Deku Tree", jp: 'デクの樹様の中の黄金のスタルチュラ4匹', types: ["deku", "skulltula"], child: "yes" },
{ name: "Iron Boots", jp: 'ヘビーブーツ', types: ["ice", "sets"], child: "yes" },
{ name: "Serenade of Water", jp: '水のセレナーデ', types: ["atrade", "ice", "songs"], child: "no" },
  { name: "Prelude of Light", jp: '光のプレリュード', types: ["songs", "atrade", "forest"], child: "no" }
];
bingoList[11] = [
  { name: "5 Maps", jp: 'マップ5つ', types: ["dungeon_item", "claimcheck"], child: "yes" },
  { name: "3 Boots", jp: '靴3種類', types: ["sets", "ice"], child: "yes" },
  { name: "At least 4 songs", jp: '歌4つ以上', types: ["songs", "atrade", "zl"], child: "yes" },
  { name: "Blue Potion", jp: '青いクスリ', types: ["atrade"], child: "no" },
  { name: "Water Temple Boss Key", jp: '水の神殿のボス部屋のカギ', types: ["water", "fortress", "dungeon_item"], child: "no" },
  { name: "Water Medallion", jp: '水のメダル', types: ["water", "lightarrow", "atrade"], child: "no" },
  { name: "All 3 Skulltulas in Bottom of the Well", jp: '井戸の底の黄金のスタルチュラ3匹', types: ["botw", "skulltula"], child: "yes" }
];
bingoList[12] = [
  { name: "All 5 Skulltulas in Dodongo's Cavern", jp: 'ドドンゴの洞窟の黄金のスタルチュラ5匹', types: ["dc", "skulltula"], child: "yes" },
  { name: "At least 5 songs", jp: '歌5つ以上', types: ["songs", "atrade", "zl"], child: "yes" },
{ name: "Defeat Barinade", jp: 'バリネード撃破', types: ["jabu"], child: "yes" },
  { name: "Get Bombchu chest in Spirit Temple", jp: '魂の神殿のボムチュウ取得', types: ["spirit", "strength"], child: "yes" },
  { name: "3 Swords & 3 Tunics", jp: '剣3種類と服3種類', types: ["sets", "ice", "wallet"], child: "no" },
  { name: "Bottled Big Poe", jp: 'ビン(ビッグポウ)', types: ["quiver", "forest", "fortress"], child: "no" }
];
bingoList[13] = [
 { name: "Saria's Song", jp: 'サリアの歌', types: ["strength", "masks", "songs", "zl"], child: "yes" },
  { name: "Defeat Morpha", jp: 'モーファ撃破', types: ["water"], child: "no" },
  { name: "Beat Jabu-Jabu's Belly", jp: 'ジャブジャブ様のお腹クリア', types: ["jabu"], child: "yes" },
  { name: "Keaton Mask", jp: 'キータンのお面', types: ["masks", "zl"], child: "yes" },
  { name: "Giant's Wallet", jp: '巨人のサイフ', types: ["wallet", "atrade", "skulltula"], child: "yes" },
  { name: "Beat the Water Temple", jp: '水の神殿クリア', types: ["water"], child: "no" },
  { name: "All 8 Kakariko area Skulltulas", jp: 'カカリコ村エリアの黄金のスタルチュラ8匹', types: ["skulltula", "botw"], child: "no" }
];
bingoList[14] = [
    { name: "5 Compasses", jp: 'コンパス5つ', types: ["dungeon_item", "compass"], child: "yes" },
  { name: "Defeat both Flare Dancers", jp: 'フレアダンサー2体撃破', types: ["fire"], child: "no" },
  { name: "Double Magic", jp: '魔力2倍', types: ["dmc", "zl"], child: "yes" },
  { name: "At least 9 Magic Beans", jp: '魔法のマメ9つ以上', types: ["beans", "skulltula", "ctrade"], child: "yes" },
    { name: "Map & Compass in Water Temple", jp: '水の神殿のマップとコンパス', types: ["water", "zl", "ice", "dungeon_item"], child: "no" },
  { name: "Silver Gauntlets", jp: '銀のグローブ', types: ["strength", "spirit"], child: "yes" },
 { name: "Double Defense", jp: '防御力2倍', types: ["zl", "ganon"], child: "no" },
  { name: "At least 6 songs", jp: '歌6つ以上', types: ["songs", "atrade", "zl"], child: "no" },
  { name: "Farore's Wind", jp: 'フロルの風', types: ["zl", "ice"], child: "yes" }
];
bingoList[15] = [
  { name: "Mirror Shield", jp: 'ミラーシールド', types: ["sets", "spirit", "mirror"], child: "yes" },
  { name: "Megaton Hammer", jp: 'メガトンハンマー', types: ["fire"], child: "no" },
  { name: "7 Hearts", jp: 'ハート7つ', types: ["hearts"], child: "yes" },
 { name: "3 Tunics & 3 Boots", jp: '服3種類と靴3種類', types: ["sets", "ice"], child: "no" },
  { name: "Gerudo's Card", jp: 'ゲルドの会員証', types: ["fortress"], child: "yes" },
   { name: "Map & Compass in Fire Temple", jp: '炎の神殿のマップとコンパス', types: ["fire", "dungeon_item"], child: "no" },
  { name: "Fairy Bow", jp: '妖精の弓', types: ["forest", "quiver"], child: "no" },
  { name: "Forest Temple Boss Key", jp: '森の神殿のボス部屋のカギ', types: ["forest", "dungeon_item", "claimcheck"], child: "no" }
];
bingoList[16] = [
 { name: "At least 3 Skulltulas in Water Temple", jp: '水の神殿の黄金のスタルチュラ3匹以上', types: ["water", "ice"], child: "no" },
  { name: "500 Rupees", jp: '500ルピー', types: ["wallet", "atrade", "skulltula"], child: "yes" },
   { name: "All 4 Wasteland/ Colossus area Skulltulas", jp: '幻影の砂漠・巨大邪神像エリアの黄金のスタルチュラ4匹', types: ["skulltula", "spirit"], child: "no" },
  { name: "Defeat Amy (Green Poe)", jp: 'エイミー撃破(緑のポウ)ｴ', types: ["forest", "fortress", "quiver"], child: "no" },
  { name: "All 5 Skulltulas in Forest Temple", jp: '森の神殿の黄金のスタルチュラ5匹', types: ["forest", "skulltula"], child: "no" },
    { name: "Map & Compass in Forest Temple", jp: '森の神殿のマップとコンパス', types: ["forest", "quiver", "dungeon_item"], child: "no" },
{ name: "Skull Mask", jp: 'ドクロのお面', types: ["masks", "zl"], child: "yes" },
   { name: "Treasure Chest Game Heart Piece", jp: '宝箱ゲームのハートのかけら', types: ["zl", "hearts"], child: "yes" },
   { name: "Bombchu Bowling Heart Piece", jp: 'ボムチュウボウリングのハートのかけら', types: ["dc", "hearts"], child: "yes" }
];
bingoList[17] = [
{ name: "Defeat Volvagia", jp: 'ヴァルバジア撃破', types: ["fire", "sets"], child: "no" },
{ name: "Defeat Dark Link", jp: 'ダークリンク撃破', types: ["water", "ice"], child: "no" },
  { name: "Both heart pieces in Lost Woods", jp: '迷いの森のハートのかけら２つ', types: ["strength", "masks", "songs", "zl", "hearts"], child: "yes" },
  { name: "All 4 Lon-Lon Ranch area Skulltulas", jp: 'ロンロン牧場エリアの黄金のスタルチュラ4匹', types: ["jabu", "lonlon", "skulltula"], child: "yes" },
  { name: "Shadow Temple Boss Key", jp: '闇の神殿のボス部屋のカギ', types: ["shadow", "zl", "dungeon_item"], child: "no" },
   { name: "All 4 Gerudo Valley area Skulltulas", jp: 'ゲルドの谷エリアの黄金のスタルチュラ4匹', types: ["skulltula", "gerudo", "jabu"], child: "no" },
 { name: "3 Boss Keys", jp: 'ボス部屋のカギ3つ', types: ["dungeon_item", "claimcheck"], child: "no" }

];
bingoList[18] = [
  { name: "Beat the Fire Temple", jp: '炎の神殿クリア', types: ["fire", "sets", "forest"], child: "no" },
  { name: "3 Swords & 3 Shields", jp: '剣3種類と盾3種類', types: ["sets", "spirit"], child: "no" },
  { name: "Longshot", jp: 'ロングフック', types: ["water", "ice"], child: "no" },
  { name: "Din's Fire", jp: 'ディンの炎', types: ["zl"], child: "yes" },
 { name: "3 Swords & 3 Boots", jp: '剣3種類と靴3種類', types: ["sets", "ice"], child: "no" },
  { name: "Get to the end of Fire Trial", jp: '炎の結界の最後の部屋に到達', types: ["ganon", "strength", ], child: "no" },
  { name: "Goron Bracelet", jp: 'ゴロンの腕輪', types: ["strength", "zl"], child: "yes" },
{ name: "Golden Gauntlets", jp: '金のグローブ', types: ["strength", "ganon", "deku"], child: "yes" }

];
bingoList[19] = [
  { name: "Get to the end of Light Trial", jp: '光の結界の最後の部屋に到達', types: ["ganon", "zl", "strength"], child: "no" },
  { name: "3 Shields & 3 Tunics", jp: '盾3種類と服3種類', types: ["sets", "spirit"], child: "no" },
  { name: "All 5 Skulltulas in Fire Temple", jp: '炎の神殿の黄金のスタルチュラ5匹', types: ["fire", "skulltula"], child: "no" },
  { name: "Stone of Agony", jp: 'もだえ石', types: ["skulltula", "wallet"], child: "yes" },
  { name: "Nayru's Love", jp: 'ネールの愛', types: ["spirit", "zl"], child: "yes" },
  { name: "Spooky Mask", jp: 'こわそなお面', types: ["masks", "strength", "zl", "gerudo"], child: "yes" },
  { name: "All 5 Skulltulas in Spirit Temple", jp: '魂の神殿の黄金のスタルチュラ5匹', types: ["spirit", "jabu", "skulltula", "atrade"], child: "yes" }
];
bingoList[20] = [
  { name: "Bronze Gauntlets", jp: '銅のグローブ', types: ["strength", "bulletbag", "ganon", "atrade"], child: "no" },
  { name: "6 Maps", jp: 'マップ6つ', types: ["dungeon_item", "claimcheck"], child: "yes" },
  { name: "Frog's Heart Piece", jp: 'カエルのハートのかけら(嵐の歌)', types: ["songs", "forest", "hearts"], child: "no" },
  { name: "Defeat Meg (purple Poe)", jp: 'メグ撃破(紫のポウ)', types: ["forest", "quiver"], child: "no" },
  { name: "Spirit Temple Boss Key", jp: '魂の神殿のボス部屋のカギ', types: ["spirit", "lightarrow", "zl", "dungeon_item"], child: "no" },
  { name: "Fire Arrow", jp: '炎の矢', types: ["water", "fire", "quiver"] },
  { name: "All 8 Death Mountain area Skulltulas", jp: 'デスマウンテンエリアの黄金のスタルチュラ8匹', types: ["skulltula", "dmc"], child: "no" },
  { name: "8 Hearts", jp: 'ハート8つ', types: ["hearts"], child: "yes" }
];
bingoList[21] = [
  { name: "Free all 9 gorons in Fire Temple", jp: '炎の神殿で９人のゴロンを全員救う', types: ["fire"], child: "no" },
    { name: "Defeat Bongo-Bongo", jp: 'ボンゴボンゴ撃破', types: ["shadow", "zl"], child: "no" },
  { name: "6 Compasses", jp: 'コンパス6つ', types: ["dungeon_item"], child: "yes" },
  { name: "8 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ8つ', types: ["fortress", "water"], child: "no" },
  { name: "Defeat Nabooru-Knuckle", jp: 'アイアンナック(ナボール)撃破', types: ["spirit"], child: "no" },
{ name: "Get to the end of Water Trial", jp: '水の結界の最後の部屋に到達', types: ["ganon", "fire", "lightarrow"] },
  { name: "Both Hyrule Field area Skulltulas", jp: 'ハイラル平原エリアの黄金ノスタルチュラ2匹', types: ["skulltula", "zl", "water"], child: "yes" },
  { name: "At least 8 songs", jp: '歌8つ以上', types: ["songs", "atrade", "zl"], child: "no" }
];
bingoList[22] = [
  { name: "All 4 Market area Skulltulas", jp: '城下町エリアの黄金のスタルチュラ4匹', types: ["skulltula", "forest"], child: "no" },
  { name: "Quiver (50)", jp: '矢立て(50)', types: ["quiver", "fortress"], child: "no" },
  { name: "Blue Gauntlets", jp: '青のグローブ', types: ["spirit", "strength", "bulletbag", "atrade"], child: "no" },
    { name: "Light Arrows", jp: '光の矢', types: ["lightarrow", "atrade"], child: "no" },
    { name: "Get to the end of Shadow Trial", jp: '闇の結界の最後の部屋に到達', types: ["ganon", "fire"], child: "no" },
  { name: "Beat the Shadow Temple", jp: '闇の神殿クリア', types: ["shadow", "zl"], child: "no" }
];
bingoList[23] = [
   { name: "All 5 Skulltulas in Shadow Temple", jp: '闇の神殿の黄金のスタルチュラ5匹', types: ["shadow", "skulltula", "zl"], child: "no" },
  { name: "Map & Compass in Spirit Temple", jp: '魂の神殿のマップとコンパス', types: ["spirit", "zl", "dungeon_item"], child: "yes" },
  { name: "3 Shields & 3 Boots", jp: '盾3種類と靴3種類', types: ["sets", "spirit", "ice"], child: "yes" },
  { name: "All 8 Zora's Domain area Skulltulas", jp: 'ゾーラの里エリアの黄金のスタルチュラ8匹', types: ["jabu", "strength", "ice"], child: "no" },
  { name: "7 Maps", jp: 'マップ7つ', types: ["dungeon_item", "claimcheck"], child: "yes" },
  { name: "Get to the end of the Forest Trial", jp: '森の結界の最後の部屋に到達', types: ["ganon", "zl"], child: "yes" }
];
bingoList[24] = [
  { name: "Defeat Twinrova", jp: 'ツインローバ撃破', types: ["spirit"], child: "no" },
  { name: "9 Hearts", jp: 'ハート9つ', types: ["hearts"], child: "yes" },
  { name: "Green Gauntlets", jp: '緑のグローブ', types: ["strength", "bulletbag", "zl", "atrade"], child: "no" },
  { name: "At least 9 songs", jp: '歌9つ以上', types: ["songs", "atrade", "zl"], child: "no" },
  { name: "All 5 Lake Hylia Skulltulas", jp: 'ハイリア湖畔エリアの黄金のスタルチュラ5匹', types: ["ice", "skulltula", "water"], child: "no" }
];
bingoList[25] = [
  { name: "Beat the Spirit Temple", jp: '魂の神殿クリア', types: ["spirit"], child: "no" },
  { name: "Bunny Hood", jp: 'ウサギずきん', types: ["masks", "strength", "zl", "beans"], child: "yes" },
  { name: "All 5 Skulltulas in Water Temple", jp: '水の神殿の黄金のスタルチュラ5匹', types: ["water"], child: "no" },
  { name: "Get to the end of Spirit Trial", jp: '魂の結界の最後の部屋に到達', types: ["ganon", "spirit", "quiver"], child: "no" },
  { name: "7 Compasses", jp: 'コンパス7つ', types: ["dungeon_item"], child: "no" },
];

$(function () { srl.ootbingo(bingoList, 5); });