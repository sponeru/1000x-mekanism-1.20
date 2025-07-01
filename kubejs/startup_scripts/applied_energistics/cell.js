const $BasicStorageCell = Java.loadClass(
  "appeng.items.storage.BasicStorageCell"
);
const $StorageComponentItem = Java.loadClass(
  "appeng.items.materials.StorageComponentItem"
);
const $AEKeyType = Java.loadClass("appeng.api.stacks.AEKeyType");
const $Item$Properties = Java.loadClass(
  "net.minecraft.world.item.Item$Properties"
);
const $ItemDiskDrive = Java.loadClass(
  "io.github.lapis256.ae2_mega_things.item.ItemDISKDrive"
);

const $FluidDiskDrive = Java.loadClass(
  "io.github.lapis256.ae2_mega_things.item.FluidDISKDrive"
);

const $ChemicalDiskDrive = Java.loadClass(
  "io.github.lapis256.ae2_mega_things.integration.appmek.item.ChemicalDISKDrive"
);
  

StartupEvents.registry("item", (event) => {
    const INT_MAX = 2147483647;
    
  event.create("mek1000:ultimate_storage_housing").rarity("EPIC");
  event.create("mek1000:infinity_item_component").rarity("EPIC");
  event.create("mek1000:infinity_fluid_component").rarity("EPIC");
  event.create("mek1000:infinity_chemical_component").rarity("EPIC");

  event.createCustom("mek1000:item_disk_drive_infinity", () => {
    const cell = new $ItemDiskDrive(
      Item.of("mek1000:infinity_item_component"),
      Item.of("mek1000:ultimate_storage_housing"),
      Math.floor(INT_MAX / 1000),
      2.5
    );
    cell.setRarity("EPIC");
    cell.setNameKey("item.mek1000.item_disk_drive_infinity.name");
    return cell;
  });
    
  event.createCustom("mek1000:fluid_disk_drive_infinity", () => {
    const cell = new $FluidDiskDrive(
      Item.of("mek1000:infinity_fluid_component"),
      Item.of("mek1000:ultimate_storage_housing"),
      Math.floor(INT_MAX / 1000),
      2.5
    );
    cell.setRarity("EPIC");
    cell.setNameKey("item.mek1000.fluid_disk_drive_infinity.name");
    return cell;
  });
    
  event.createCustom("mek1000:chemical_disk_drive_infinity", () => {
    const cell = new $ChemicalDiskDrive(
      Item.of("mek1000:infinity_chemical_component"),
      Item.of("mek1000:ultimate_storage_housing"),
      Math.floor(INT_MAX / 1000),
      2.5
    );
    cell.setRarity("EPIC");
    cell.setNameKey("item.mek1000.chemical_disk_drive_infinity.name");
    return cell;
  });
    
});
