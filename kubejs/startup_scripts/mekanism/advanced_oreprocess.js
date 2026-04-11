function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let types = [
  // ["name",0x color,langkey]
  ["iron", 0xfafafa, Text.translate("mek1000.material.iron")],
  ["copper", 0xdea924, Text.translate("mek1000.material.copper")],
  ["gold", 0xfffb00, Text.translate("mek1000.material.gold")],
  ["osmium", 0x63cedb, Text.translate("mek1000.material.osmium")],
  ["tin", 0xddddea, Text.translate("mek1000.material.tin")],
  ["lead", 0x63a2a4, Text.translate("mek1000.material.lead")],
  ["uranium", 0x9cff9c, Text.translate("mek1000.material.uranium")],
  ["iridium", 0xf3ff80, Text.translate("mek1000.material.iridium")],
  ["redstone", 0xff2020, Text.translate("mek1000.material.redstone")],
  ["quartz", 0xffc0b1, Text.translate("mek1000.material.quartz")],
  ["certus_quartz", 0xb1c0ff, Text.translate("mek1000.material.certus_quartz")],
  ["fluorite", 0xffb0ff, Text.translate("mek1000.material.fluorite")],
  ["coal", 0x444444, Text.translate("mek1000.material.coal")],
  ["lapis", 0x4444ff, Text.translate("mek1000.material.lapis")],
  ["diamond", 0x33b1ff, Text.translate("mek1000.material.diamond")],
  ["emerald", 0x33ff61, Text.translate("mek1000.material.emerald")],
  ["debri", 0xa34f05, Text.translate("mek1000.material.debri")],
];


StartupEvents.registry("block", (event) => {
  types.forEach((item) => { 
    event
      .create(`mek1000:block_dust_${item[0]}`)
      .displayName(Text.translate("block.mek1000.dust.name", item[2]))
      .soundType(SoundType.SAND)
      .hardness(1.0)
      .color(0, item[1])
      .item((itemForm) => {
        itemForm.color(0, item[1]);
      })
      .textureAll("mek1000:block/dust")
      .tagBlock("minecraft:mineable/shovel")
      .tagItem(`forge:storage_blocks/dust_${item[0]}`)
      .requiresTool(true);
    
      event
        .create(`mek1000:block_dirty_dust_${item[0]}`)
        .displayName(Text.translate("block.mek1000.dirty_dust.name", item[2]))
        .soundType(SoundType.SAND)
        .hardness(1.0)
        .color(0, item[1])
        .item((itemForm) => {
          itemForm.color(0, item[1]);
        })
        .textureAll("mek1000:block/dirty_dust")
        .tagBlock("minecraft:mineable/shovel")
        .tagItem(`forge:storage_blocks/dirty_dust_${item[0]}`)
        .requiresTool(true);
  })

});

StartupEvents.registry("item", (event) => {

  types.forEach((item) => {
    event // 精製原石
      .create(`mek1000:purified_${item[0]}_rawore`)
      .displayName(Text.translate("item.mek1000.purified_rawore.name", item[2]))
      .tooltip(Text.translate("item.mek1000.purified_rawore.desc"))
      .maxStackSize(64)
      .textureJson({
        layer0: "mek1000:item/purified_ore_base",
        layer1: "mek1000:item/purified_ore_overlay",
      })
      .tag(`mek1000:ores/purifired/${item[0]}`)
      .tag(`mek1000:ores/purifired`)
      .color(1, item[1])
      .rarity("uncommon");

    event // 圧縮精製原石
      .create(`mek1000:compressed_purified_${item[0]}_rawore`)
      .displayName(
        Text.translate("item.mek1000.compressed_purified_rawore.name", item[2])
      )
      .tooltip(Text.translate("item.mek1000.compressed_purified_rawore.desc"))
      .maxStackSize(16)
      .textureJson({
        layer0: "mek1000:item/compressed_purified_ore_base",
        layer1: "mek1000:item/compressed_purified_ore_overlay",
      })
      .tag(`mek1000:ores/compressed_purified/${item[0]}`)
      .tag(`mek1000:ores/compressed_purified`)
      .color(1, item[1])
      .rarity("rare");

    event // 繊細に結晶化された鉱石
      .create(`mek1000:crystalized_${item[0]}_rawore`)
      .displayName(
        Text.translate("item.mek1000.crystalized_rawore.name", item[2])
      )
      .tooltip(Text.translate("item.mek1000.crystalized_rawore.desc"))
      .maxStackSize(32)
      .textureJson({
        layer0: "mek1000:item/crystalized_ore_base",
        layer1: "mek1000:item/crystalized_ore_overlay",
      })
      .tag(`mek1000:ores/crystalized/${item[0]}`)
      .tag(`mek1000:ores/crystalized`)
      .color(1, item[1])
      .rarity("epic");
  });

  let add_any = ["coal", "lapis"];
  add_any.forEach((type) => {
    event
      .create(`mek1000:crystal_${type}`)
      .tag(`mekanism:crystals`)
      .tag(`mekanism:crystals/${type}`);
    event
      .create(`mek1000:shard_${type}`)
      .tag(`mekanism:shards`)
      .tag(`mekanism:shards/${type}`);
    event
      .create(`mek1000:clump_${type}`)
      .tag(`mekanism:clumps`)
      .tag(`mekanism:clumps/${type}`);

    if (type == "lapis") {
      event
        .create(`mek1000:dirty_dust_${type}`)
        .tag(`mekanism:dirty_dusts`)
        .tag(`mekanism:dirty_dusts/${type}`)
        .textureJson({
          layer0: "mekanism:item/dust_lapis_lazuli",
          layer1: "mekanism:item/dirty_dust_overlay",
        });
    } else {
      event
        .create(`mek1000:dirty_dust_${type}`)
        .tag(`mekanism:dirty_dusts`)
        .tag(`mekanism:dirty_dusts/${type}`)
        .textureJson({
          layer0: `mekanism:item/dust_${type}`,
          layer1: "mekanism:item/dirty_dust_overlay",
        });
    }
  });

  event
    .create(`mek1000:polonium_synced`)
    .texture(`mekanism:item/pellet_polonium`)
    .glow(true)
    .tooltip(`WTF too long name`);
});

StartupEvents.registry("mekanism:gas", (event) => {
  event
    .create(`mek1000:activated_redstone`)
    .displayName("Activator Redstone")
    .color(0xf05050);
  event
    .create(`mek1000:active_aqua_regia`)
    .displayName("Activated Aqua Regia")
    .color(0xffff80)
    .radioactivity(0.015);

    //各種活性蒸気
    let activated_types = [
      ["iron",0xffff80],
      ["copper",0xffff80],
      ["gold",0xf2cd67],
      ["osmium",0x52bdca],
      ["tin", 0xccccd9],
      ["lead", 0xffff80],
      ["uranium", 0xffff80],
      ["iridium", 0xffff80],
      ["debri", 0x9c6a3e],
      ["redstone", 0xff0f0f],
      ["quartz", 0xffafa0],
      ["certus_quartz", 0xa0afff],
      ["fluorite", 0xff9ff0],
      ["coal", 0x333333],
      ["diamond", 0x22a0f0],
      ["emerald", 0x22f050],
      ["lapis", 0x3333f0],
    ]

    activated_types.forEach(element =>{
      event
      .create(`mek1000:active_${element[0]}`)
      .displayName(Text.translate("mek1000.active_gas.name", Text.translate(`mek1000.material.${element[0]}`)))
      .tag(`mek1000:active_gas/${element[0]}`)
      .color(element[1])
      
      event
      .create(`mek1000:purified_${element[0]}`)
      .displayName(Text.translate("mek1000.purified_gas.name",Text.translate(`mek1000.material.${element[0]}`)))
      .tag(`mek1000:purified_gas/${element[0]}`)
      .color(element[1])
    })
});
