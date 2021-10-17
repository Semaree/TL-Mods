// Author: Yum (Razz#3533)

let Item = new NativeClass('Terraria', 'Item');
let Lang = new NativeClass('Terraria', 'Lang');
let ItemID = new NativeClass('Terraria.ID', 'ItemID');
let Main = new NativeClass('Terraria', 'Main');
let AffixName = Item['string AffixName()'];
 
//Мужской, женский, средний, множественный
let Prefixes = [
	["Тупой", "Тупая", "Тупое", "Тупые"],
	["Невезучий", "Невезучая", "Невезучее", "Невезучие"],
	["Массивный", "Массивная", "Массивное", "Массивные"],
	["Позорный", "Позорная", "Позорное", "Позорные"],
	["Тяжелый", "Тяжелая", "Тяжелое", "Тяжелые"],
	["Пристрелянный", "Пристрелянная", "Пристрелянное", "Пристрелянные"],
	["Скорый", "Скорая", "Скорое", "Скорые"],
	["Стремительный", "Стремительная", "Стремительное", "Стремительные"],
	["Пугающий", "Пугающая", "Пугающее", "Пугающие"],
	["Большой", "Большая", "Большое", "Большие"],
	["Смертельный", "Смертельная", "Смертельное", "Смертельные"],
	["Крепкий", "Крепкая", "Крепкое", "Крепкие"],
	["Отвратительный", "Отвратительная", "Отвратительное", "Отвратительные"],
	["Летаргический", "Летаргическая", "Летаргическое", "Летаргические"],
	["Странный", "Странная", "Странное", "Странные"],
	["Мощный", "Мощная", "Мощное", "Мощные"],
	["Загадочный", "Загадочная", "Загадочное", "Загадочные"],
	["Экспертный", "Экспертная", "Экспертное", "Экспертные"],
	["Грозный", "Грозная", "Грозное", "Грозные"],
	["Неподходящий", "Неподходящая", "Неподходящее", "Неподходящие"],
	["Массивный", "Массивная", "Массивное", "Массивные"],
	["Грубый", "Грубая", "Грубое", "Грубые"],
	["Неуравновешенный", "Неуравновешенная", "Неуравновешенное", "Неуравновешенные"],
	["Значительный", "Значительная", "Значительное", "Значительные"],
	["Запрещенный", "Запрещенная", "Запрещенное", "Запрещенные"],
	["Небесный", "Небесная", "Небесное", "Небесные"],
	["Яростный", "Яростная", "Яростное", "Яростные"],
	["Заточенный", "Заточенная", "Заточенное", "Заточенные"],
	["Превосходный", "Превосходная", "Превосходное", "Превосходные"],
	["Неистовый", "Неистовая", "Неистовое", "Неистовые"],
	["Сломаный", "Сломанная", "Сломанное", "Сломанные"],
	["Опасный", "Опасная", "Опасное", "Опасные"],
	["Поврежденный", "Поврежденная", "Поврежденное", "Поврежденные"],
	["Некачественный", "Некачественная", "Некачественное", "Некачественные"],
	["Быстрый", "Быстрая", "Быстрое", "Быстрые"],
	["Подвижный", "Подвижная", "Подвижное", "Подвижные"],
	["Шустрый", "Шустрая", "Шустрое", "Шустрые"],
	["Убийственный", "Убийственная", "Убийственное", "Убийственные"],
	["Медлительный", "Медлительная", "Медлительное", "Медлительные"],
	["Медленный", "Медленная", "Медленное", "Медленные"],
	["Лентяйский", "Лентяйская", "Лентяйское", "Лентяйские"],
	["Дикий", "Дикая", "Дикое", "Дикие"],
	["Раздражающий", "Раздражающая", "Раздражающее", "Раздражающие"],
	["Мерзкий", "Мерзкая", "Мерзкое", "Мерзкие"],
	["Маниакальный", "Маниакальная", "Маниакальное", "Маниакальные"],
	["Вредный", "Вредная", "Вредное", "Вредные"],
	["Прочный", "Прочная", "Прочное", "Прочные"],
	["Неприятный", "Неприятная", "Неприятное", "Неприятные"],
	["Слабый", "Слабая", "Слабое", "Слабые"],
	["Безжалостный", "Безжалостная", "Безжалостное", "Безжалостные"],
	["Буйный", "Буйная", "Буйное", "Буйные"],
	["Праведный", "Праведная", "Праведное", "Праведные"],
	["Острый", "Острая", "Острое", "Острые"],
	["Демонический", "Демоническая", "Демоническое", "Демонические"],
	["Пылкий", "Пылкая", "Пылкое", "Пылкие"],
	["Твердый", "Твердая", "Твердое", "Твердые"],
	["Защитный", "Защитная", "Защитное", "Защитные"],
	["Укрепленный", "Укрепленная", "Укрепленное", "Укрепленные"],
	["Охранный", "Охранная", "Охранное", "Охранные"],
	["Тайный", "Тайная", "Тайное", "Тайные"],
	["Точный", "Точная", "Точное", "Точные"],
	["Счастливый", "Счастливая", "Счастливой", "Счастливые"],
	["Зазубренный", "Зазубренная", "Зазубренное", "Зазубренные"],
	["Заостренный", "Заостренная", "Заостренное", "Заостренные"],
	["Шипастый", "Шипастая", "Шипастое", "Шипастые"],
	["Сердящий", "Сердящая", "Сердящее", "Сердящие"],
	["Бойкий", "Бойкая", "Бойкое", "Бойкие"],
	["Молниеносный", "Молниеносная", "Молниеносное", "Молниеносные"],
	["Безудержный", "Безудержная", "Безудержное", "Безудержные"],
	["Отважный", "Отважная", "Отважное", "Отважные"],
	["Маленький", "Маленькая", "Маленькое", "Маленькие"],
	["Жестокий", "Жестокая", "Жестокое", "Жестокие"],
	["Легендарный", "Легендарная", "Легендарное", "Легендарные"],
	["Нереальный", "Нереальная", "Нереальное", "Нереальные"],
	["Ужасный", "Ужасная", "Ужасное", "Ужасные"]
];
// Женский
let TypeW = [
	ItemID.BoneGlove,
	ItemID.LuckyHorseshoe,
	ItemID.Ruler,
	ItemID.BlizzardinaBottle,
	ItemID.HighTestFishingLine,
	ItemID.AnglerEarring,
	ItemID.FrogLeg,
	ItemID.LaserRuler,
	ItemID.BalloonPufferfish,
	ItemID.RedString,
	ItemID.OrangeString,
	ItemID.YellowString,
	ItemID.LimeString,
	ItemID.GreenString,
	ItemID.TealString,
	ItemID.CyanString,
	ItemID.SkyBlueString,
	ItemID.BlueString,
	ItemID.PurpleString,
	ItemID.VioletString,
	ItemID.PinkString,
	ItemID.BrownString,
	ItemID.WhiteString,
	ItemID.RainbowString,
	ItemID.BlackString,
	ItemID.SandstorminaBottle,
	ItemID.FartinaJar,
	ItemID.HandWarmer,
	ItemID.Toolbox,
	ItemID.ObsidianRose,
	ItemID.PortableCementMixer,
	ItemID.GoblinTech,
	ItemID.MechanicalLens,
	ItemID.ObsidianHorseshoe,
	ItemID.MoonCharm,
	ItemID.SorcererEmblem,
	ItemID.WarriorEmblem,
	ItemID.RangerEmblem,
	ItemID.TitanGlove,
	ItemID.Blindfold,
	ItemID.TrifoldMap,
	ItemID.SandstorminaBalloon,
	ItemID.BlizzardinaBalloon,
	ItemID.FartInABalloon,
	ItemID.SummonerEmblem,
	ItemID.YoYoGlove,
	ItemID.NeptunesShell,
	ItemID.DiscountCard,
	ItemID.LuckyCoin,
	ItemID.PowerGlove,
	ItemID.CountercurseMantra,
	ItemID.AvengerEmblem,
	ItemID.Hoverboard,
	ItemID.CelestialEmblem,
	ItemID.MoonShell,
	ItemID.StarVeil,
	ItemID.MechanicalGlove,
	ItemID.DestroyerEmblem,
	ItemID.FireGauntlet,
	ItemID.BundleofBalloons,
	ItemID.CelestialShell,
	ItemID.BejeweledValkyrieWing,
	ItemID.LeinforsWings,
	ItemID.WingsNebula,
	ItemID.CobaltChainsaw,
	ItemID.MythrilChainsaw,
	ItemID.AdamantiteChainsaw,
	ItemID.FleshGrinder,
	ItemID.BloodLustCluster,
	ItemID.PalladiumChainsaw,
	ItemID.OrichalcumChainsaw,
	ItemID.TitaniumChainsaw,
	ItemID.ChlorophyteChainsaw,
	ItemID.SawtoothShark,
	ItemID.ButchersChainsaw,
	ItemID.CactusPickaxe,
	ItemID.TinPickaxe,
	ItemID.CopperPickaxe,
	ItemID.IronPickaxe,
	ItemID.LeadPickaxe,
	ItemID.SilverPickaxe,
	ItemID.BonePickaxe,
	ItemID.TungstenPickaxe,
	ItemID.CnadyCanePickaxe,
	ItemID.GoldPickaxe,
	ItemID.PlatinumPickaxe,
	ItemID.NightmarePickaxe,
	ItemID.DeathbringerPickaxe,
	ItemID.MoltenPickaxe,
	ItemID.ReaverShark,
	ItemID.CobaltPickaxe,
	ItemID.PalladiumPickaxe,
	ItemID.MythrilPickaxe,
	ItemID.OrichalcumPickaxe,
	ItemID.AdamantitePickaxe,
	ItemID.TitaniumPickaxe,
	ItemID.ChlorophytePickaxe,
	ItemID.SpectrePickaxe,
	ItemID.ShroomiteDiggingClaw,
	ItemID.VortexPickaxe,
	ItemID.NebulaPickaxe,
	ItemID.SolarFlarePickaxe,
	ItemID.StardustPickaxe,
	ItemID.Minishark,
	ItemID.Blowpipe,
	ItemID.Sickle,
	ItemID.Vilethorn,
	ItemID.SnowballCannon,
	ItemID.DD2LightningAuraT2Popper,
	ItemID.ZombieArm,
	ItemID.BladedGlove,
	ItemID.TheRottedFork,
	ItemID.TheMeatball,
	ItemID.Katana,
	ItemID.TaxCollectorsStickOfDoom,
	ItemID.CrimsonYoyo,
	ItemID.SpaceGun,
	ItemID.Muramasa,
	ItemID.ClockworkAssaultRifle,
	ItemID.Swordfish,
	ItemID.JungleYoyo,
	ItemID.DyeTradersScimitar,
	ItemID.WaspGun,
	ItemID.Starfury,
	ItemID.Valor,
	ItemID.BlueMoon,
	ItemID.PurpleClubberfish,
	ItemID.BookStaff,
	ItemID.Megashark,
	ItemID.MagicMissile,
	ItemID.LaserRifle,
	ItemID.CobaltNaginata,
	ItemID.BookofSkulls,
	ItemID.Sandgun,
	ItemID.MoltenFury,
	ItemID.MagicalHarp,
	ItemID.PalladiumPike,
	ItemID.Sunfury,
	ItemID.DemonScythe,
	ItemID.MythrilHalberd,
	ItemID.SlapHand,
	ItemID.OrichalcumHalberd,
	ItemID.AdamantiteGlaive,
	ItemID.PiranhaGun,
	ItemID.Flamelash,
	ItemID.Marrow,
	ItemID.KOCannon,
	ItemID.ElectrosphereLauncher,
	ItemID.ShadowFlameHexDoll,
	ItemID.NightsEdge,
	ItemID.IceSickle,
	ItemID.DD2FlameburstTowerT2Popper,
	ItemID.CandyCornRifle,
	ItemID.RainbowGun,
	ItemID.Xenopopper,
	ItemID.MedusaHead,
	ItemID.MonkStaffT2,
	ItemID.ToxicFlask,
	ItemID.ChlorophyteSaber,
	ItemID.MagnetSphere,
	ItemID.Cutlass,
	ItemID.Frostbrand,
	ItemID.ChargedBlasterCannon,
	ItemID.VortexBeater,
	ItemID.DartRifle,
	ItemID.StarCannon,
	ItemID.DeathSickle,
	ItemID.DD2ExplosiveTrapT2Popper,
	ItemID.DaoofPow,
	ItemID.ScourgeoftheCorruptor,
	ItemID.ApprenticeStaffT3,
	ItemID.SnowmanCannon,
	ItemID.DD2BallistraTowerT2Popper,
	ItemID.ObsidianSwordfish,
	ItemID.BubbleGun,
	ItemID.MonkStaffT3,
	ItemID.TrueNightsEdge,
	ItemID.LastPrism,
	ItemID.LunarFlareBook,
	ItemID.StarWrath,
	ItemID.DayBreak,
	ItemID.GravediggerShovel,
	ItemID.FloatingTube,
	ItemID.GhostarsWings,
	ItemID.LongRainbowTrailWings,
	ItemID.EmpressFlightBooster,
	ItemID.BerserkerGlove,
	ItemID.FireWhip,
	ItemID.MaceWhip,
	ItemID.EmpressBlade
];
 
// Средний
let TypeU = [
	ItemID.CloudinaBottle,
	ItemID.PanicNecklace,
	ItemID.WeatherRadio,
	ItemID.CordageGuide,
	ItemID.FishermansGuide,
	ItemID.TsunamiInABottle,
	ItemID.SharkToothNecklace,
	ItemID.JellyfishNecklace,
	ItemID.SweetheartNecklace,
	ItemID.PocketMirror,
	ItemID.DivingGear,
	ItemID.CloudinaBalloon,
	ItemID.ArmorBracing,
	ItemID.GoldRing,
	ItemID.CoinRing,
	ItemID.CharmofMyths,
	ItemID.GreedyRing,
	ItemID.PygmyNecklace,
	ItemID.Yoraiz0rWings,
	ItemID.Spear,
	ItemID.WoodYoyo,
	ItemID.Rally,
	ItemID.AntlionClaw,
	ItemID.RedRyder,
	ItemID.Blowgun,
	ItemID.DarkLance,
	ItemID.Uzi,
	ItemID.FalconBlade,
	ItemID.HelFire,
	ItemID.DD2SquireDemonSword,
	ItemID.DD2BetsyBow,
	ItemID.MushroomSpear,
	ItemID.Tsunami,
	ItemID.FireworksLauncher,
	ItemID.ValkyrieYoyo,
	ItemID.SpiritFlame,
	ItemID.SolarEruption,
	ItemID.NebulaBlaze,
	ItemID.SniperRifle,
	ItemID.StingerNecklace,
	ItemID.AncientChisel,
	ItemID.FrogGear,
	ItemID.JoustingLance,
	ItemID.HallowJoustingLance,
	ItemID.ShadowJoustingLance,
	ItemID.FairyQueenMagicItem,
	ItemID.ThunderSpear,
	ItemID.Celeb2
];
 
// Множественный
let TypePl = [
	ItemID.BrainOfConfusion,
	ItemID.CopperWatch,
	ItemID.SilverWatch,
	ItemID.TinWatch,
	ItemID.TungstenWatch,
	ItemID.GoldWatch,
	ItemID.HermesBoots,
	ItemID.Flipper,
	ItemID.Shackle,
	ItemID.PlatinumWatch,
	ItemID.IceSkates,
	ItemID.ClimbingClaws,
	ItemID.ShoeSpikes,
	ItemID.FlurryBoots,
	ItemID.SailfishBoots,
	ItemID.BrainOfConfusion,
	ItemID.MagicCuffs,
	ItemID.RocketBoots,
	ItemID.FeralClaws,
	ItemID.SpectreBoots,
	ItemID.WaterWalkingBoots,
	ItemID.FastClock,
	ItemID.Vitamins,
	ItemID.ObsidianWaterWalkingBoots,
	ItemID.FinWings,
	ItemID.DemonWings,
	ItemID.AngelWings,
	ItemID.ButterflyWings,
	ItemID.FairyWings,
	ItemID.HarpyWings,
	ItemID.BoneWings,
	ItemID.FlameWings,
	ItemID.FrozenWings,
	ItemID.LightningBoots,
	ItemID.LeafWings,
	ItemID.BatWings,
	ItemID.BeeWings,
	ItemID.FestiveWings,
	ItemID.CelestialCuffs,
	ItemID.PutridScent,
	ItemID.LavaWaders,
	ItemID.Tabi,
	ItemID.TatteredFairyWings,
	ItemID.SpookyWings,
	ItemID.FrostsparkBoots,
	ItemID.BeetleWings,
	ItemID.FlowerBoots,
	ItemID.GhostWings,
	ItemID.SteampunkWings,
	ItemID.MasterNinjaGear,
	ItemID.FishronWings,
	ItemID.MothronWings,
	ItemID.BetsyWings,
	ItemID.RedsWings,
	ItemID.DTownsWings,
	ItemID.WillsWings,
	ItemID.CrownosWings,
	ItemID.CenxsWings,
	ItemID.JimsWings,
	ItemID.SkiphsWings,
	ItemID.LokisWings,
	ItemID.ArkhalisWings,
	ItemID.WingsSolar,
	ItemID.WingsStardust,
	ItemID.StylistKilLaKillScissorsIWish,
	ItemID.VampireKnives,
	ItemID.ChainGuillotines,
	ItemID.FetidBaghnakhs,
	ItemID.AmphibianBoots,
	ItemID.FairyBoots,
	ItemID.SandBoots,
	ItemID.HellfireTreads,
	ItemID.TerrasparkBoots,
	ItemID.FrogFlipper,
	ItemID.FrogWebbing,
	ItemID.GroxTheGreatWings,
	ItemID.FoodBarbarianWings,
	ItemID.CreativeWings,
	ItemID.RainbowWings,
	ItemID.FairyQueenRangedItem,
	ItemID.CoolWhip,
	ItemID.ManaCloak
];
 
let GetGenderedPrefix = function(prefix, id) {
   
	if (TypeW.includes(id))
		return prefix[1];
 
	if (TypeU.includes(id))
		return prefix[2];
 
	if (TypePl.includes(id))
		return prefix[3];
 
	return prefix[0];
}
 
AffixName.hook((original, self) => {
 
	original(self);
 
	if(self.prefix < 0 || self.prefix >= Lang.prefix.length)
		return self.Name;

	let text = Lang.prefix[self.prefix].Value;
 
	if (text === '')
		return self.Name;
 
	for (i = 0; i < Prefixes.length; i++) {
		if (Prefixes[i][0] === text)
			return GetGenderedPrefix(Prefixes[i], self.type) + ' ' + self.Name.toLowerCase();
	}
	
	return text + " " + self.Name.toLowerCase();
});