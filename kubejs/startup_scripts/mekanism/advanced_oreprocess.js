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
  event
    .create(`mek1000:active_iron`)
    .displayName("Active Compressed Iron Gas")
    .color(0xffff80);
  event
    .create(`mek1000:active_copper`)
    .displayName("Active Compressed Copper Gas")
    .color(0xffff80);
  event
    .create(`mek1000:active_gold`)
    .displayName("Active Compressed Gold Gas")
    .color(0xf2cd67);
  event
    .create(`mek1000:active_osmium`)
    .displayName("Active Compressed Osmium Gas")
    .color(0x52bdca);
  event
    .create(`mek1000:active_tin`)
    .displayName("Active Compressed Tin Gas")
    .color(0xccccd9);
  event
    .create(`mek1000:active_lead`)
    .displayName("Active Compressed Lead Gas")
    .color(0xffff80);
  event
    .create(`mek1000:active_uranium`)
    .displayName("Active Compressed Uranium Gas")
    .color(0xffff80);
  event
    .create(`mek1000:active_iridium`)
    .displayName("Active Compressed Iridium Gas")
    .color(0xffff80);
  event
    .create(`mek1000:active_debri`)
    .displayName("Active Compressed Acient Debri Gas")
    .color(0x9c6a3e);

  event
    .create(`mek1000:active_redstone`)
    .displayName("Active Compressed Redstone Gas")
    .color(0xff0f0f);
  event
    .create(`mek1000:active_quartz`)
    .displayName("Active Compressed Quartz Gas")
    .color(0xffafa0);
  event
    .create(`mek1000:active_certus_quartz`)
    .displayName("Active Compressed Certus Quartz Gas")
    .color(0xa0afff);
  event
    .create(`mek1000:active_fluorite`)
    .displayName("Active Compressed Fluorite Gas")
    .color(0xff9ff0);

  event
    .create(`mek1000:active_coal`)
    .displayName("Active Compressed Coal Gas")
    .color(0x333333);
  event
    .create(`mek1000:active_diamond`)
    .displayName("Active Compressed Diamond Gas")
    .color(0x22a0f0);
  event
    .create(`mek1000:active_emerald`)
    .displayName("Active Compressed Emerald Gas")
    .color(0x22f050);
  event
    .create(`mek1000:active_lapis`)
    .displayName("Active Compressed Lapis Gas")
    .color(0x3333f0);

  event
    .create(`mek1000:purified_iron`)
    .displayName("Purified Compressed Iron Gas")
    .color(0xffff80);
  event
    .create(`mek1000:purified_copper`)
    .displayName("Purified Compressed Copper Gas")
    .color(0xffff80);
  event
    .create(`mek1000:purified_gold`)
    .displayName("Purified Compressed Gold Gas")
    .color(0xf2cd67);
  event
    .create(`mek1000:purified_osmium`)
    .displayName("Purified Compressed Osmium Gas")
    .color(0x52bdca);
  event
    .create(`mek1000:purified_tin`)
    .displayName("Purified Compressed Tin Gas")
    .color(0xccccd9);
  event
    .create(`mek1000:purified_lead`)
    .displayName("Purified Compressed Lead Gas")
    .color(0xffff80);
  event
    .create(`mek1000:purified_uranium`)
    .displayName("Purified Compressed Uranium Gas")
    .color(0xffff80);
  event
    .create(`mek1000:purified_iridium`)
    .displayName("Purified Compressed Iridium Gas")
    .color(0xffff80);
  event
    .create(`mek1000:purified_debri`)
    .displayName("Purified Compressed Acient Debri Gas")
    .color(0x803c00);

  event
    .create(`mek1000:purified_redstone`)
    .displayName("Purified Compressed Redstone Gas")
    .color(0xff0f0f);
  event
    .create(`mek1000:purified_quartz`)
    .displayName("Purified Compressed Quartz Gas")
    .color(0xffafa0);
  event
    .create(`mek1000:purified_certus_quartz`)
    .displayName("Purified Compressed Certus Quartz Gas")
    .color(0xa0afff);
  event
    .create(`mek1000:purified_fluorite`)
    .displayName("Purified Compressed Fluorite Gas")
    .color(0xff9ff0);

  event
    .create(`mek1000:purified_coal`)
    .displayName("Purified Compressed Coal Gas")
    .color(0x333333);
  event
    .create(`mek1000:purified_diamond`)
    .displayName("Purified Compressed Diamond Gas")
    .color(0x22a0f0);
  event
    .create(`mek1000:purified_emerald`)
    .displayName("Purified Compressed Emerald Gas")
    .color(0x22f050);
  event
    .create(`mek1000:purified_lapis`)
    .displayName("Purified Compressed Lapis Gas")
    .color(0x3333f0);
});
