// Author: Yum (Razz#3533)

const Player = new NativeClass('Terraria', 'Player');
const Item = new NativeClass('Terraria', 'Item');
const Main = new NativeClass('Terraria', 'Main');

const ItemCheck = Player['void ItemCheck(int i)'];
const SetDefaults = Item["void SetDefaults(int Type, bool noMatCheck)"];

SetDefaults.hook((original, self, type, noMatCheck) => {
	original(self, type, noMatCheck);

	switch (type) {
		case 15:
		case 16:
		case 17:
		case 707:
		case 708:
		case 709:
			self.useTime = 20;
			self.useAnimation = 20;
			self.useStyle = 4;
			self.consumable = false;
			break;
	}
});


ItemCheck.hook((original, self, i) => {
	original(self, i);

	let item = self.inventory[self.selectedItem];

	switch (item.type) {
		case 15:
		case 16:
		case 17:
		case 707:
		case 708:
		case 709:
			if (self.itemAnimation > 0 && self.ItemTimeIsZero) {
				self.SetItemTime(item.useTime);
				Main.time = 0.0;
				Main.dayTime = !Main.dayTime;
				if (Main.dayTime && ++Main.moonPhase >= 8) {
					Main.moonPhase = 0;
				}
			}
			break;
	}
});
