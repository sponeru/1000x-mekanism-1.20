//priority 0

let diskDrive = [
  "ae2things:disk_drive_4k",
  "ae2things:disk_drive_16k",
  "ae2things:disk_drive_64k",
  "ae2_mega_things:chemical_disk_drive_1k",
  "ae2_mega_things:chemical_disk_drive_16k",
  "ae2things:disk_drive_1k",
  "ae2_mega_things:item_disk_drive_1m",
  "ae2_mega_things:item_disk_drive_4m",
  "ae2_mega_things:item_disk_drive_16m",
  "ae2_mega_things:item_disk_drive_64m",
  "ae2_mega_things:item_disk_drive_256m",
  "ae2_mega_things:fluid_disk_drive_1k",
  "ae2_mega_things:fluid_disk_drive_4k",
  "ae2_mega_things:fluid_disk_drive_16k",
  "ae2_mega_things:fluid_disk_drive_64k",
  "ae2_mega_things:fluid_disk_drive_256k",
  "ae2_mega_things:fluid_disk_drive_1m",
  "ae2_mega_things:fluid_disk_drive_4m",
  "ae2_mega_things:fluid_disk_drive_16m",
  "ae2_mega_things:fluid_disk_drive_64m",
  "ae2_mega_things:fluid_disk_drive_256m",
  "ae2_mega_things:chemical_disk_drive_1k",
  "ae2_mega_things:chemical_disk_drive_4k",
  "ae2_mega_things:chemical_disk_drive_16k",
  "ae2_mega_things:chemical_disk_drive_64k",
  "ae2_mega_things:chemical_disk_drive_256k",
  "ae2_mega_things:chemical_disk_drive_256m",
  "ae2_mega_things:chemical_disk_drive_1m",
  "ae2_mega_things:chemical_disk_drive_4m",
  "ae2_mega_things:chemical_disk_drive_16m",
  "ae2_mega_things:chemical_disk_drive_64m",
  "ae2things:disk_drive_256k",
  "ae2things:disk_drive_1k",
];

let normalCell = [
  "megacells:chemical_storage_cell_64m",
  "megacells:chemical_storage_cell_256m",
  "ae2:item_storage_cell_1k",
  "ae2:item_storage_cell_4k",
  "ae2:item_storage_cell_16k",
  "ae2:item_storage_cell_64k",
  "ae2:item_storage_cell_256k",
  "ae2:fluid_storage_cell_4k",
  "ae2:fluid_storage_cell_16k",
  "ae2:fluid_storage_cell_64k",
  "ae2:fluid_storage_cell_256k",
  "appmek:chemical_storage_cell_1k",
  "appmek:chemical_storage_cell_4k",
  "appmek:chemical_storage_cell_16k",
  "appmek:chemical_storage_cell_64k",
  "appmek:chemical_storage_cell_256k",
  "megacells:fluid_storage_cell_256m",
  "megacells:item_storage_cell_1m",
  "megacells:item_storage_cell_4m",
  "megacells:item_storage_cell_16m",
  "megacells:item_storage_cell_64m",
  "megacells:item_storage_cell_256m",
  "megacells:fluid_storage_cell_64m",
  "megacells:fluid_storage_cell_16m",
  "megacells:fluid_storage_cell_4m",
  "megacells:fluid_storage_cell_1m",
  "megacells:chemical_storage_cell_1m",
  "megacells:chemical_storage_cell_4m",
  "megacells:chemical_storage_cell_16m",
];

let anyFECell = [
  "appflux:fe_1m_cell",
  "appflux:fe_1k_cell",
  "appflux:fe_4k_cell",
  "appflux:fe_16k_cell",
  "appflux:fe_64k_cell",
  "appflux:fe_256k_cell",
  "appflux:fe_1m_cell",
  "appflux:fe_4m_cell",
  "appflux:fe_16m_cell",
  "appflux:fe_64m_cell",
  "appflux:fe_256m_cell",
];

ServerEvents.tags("minecraft:item", event => {
    event.add('forge:ores/certus_quartz', 'kubejs:ore_certus_quartz')
    event.add('forge:ores/certus_quartz', 'kubejs:ore_certus_quartz_deepslate')

    diskDrive.forEach(element => {
        event.add('mek1000:ae2/any_disk_drive', element)
    });

    normalCell.forEach((element) => {
      event.add("mek1000:ae2/any_cell", element);
    });

    anyFECell.forEach((element) => {
      event.add("mek1000:ae2/any_fe_cell", element);
    });
})