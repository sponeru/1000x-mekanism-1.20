function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

StartupEvents.registry("item", (event) => {
  let types = [
    ["iron", 0xfafafa, Text.translate("mek1000.material.iron")],
    ["copper", 0xdea924, Text.translate("mek1000.material.copper")],
    ["gold", 0xfffb00, Text.translate("mek1000.material.gold")],
    ["osmium", 0x63cedb, Text.translate("mek1000.material.osmium")],
    ["tin", 0xddddea, Text.translate("mek1000.material.tin")],
    ["lead", 0x63a2a4, Text.translate("mek1000.material.lead")],
    ["uranium", 0x9cff9c, Text.translate("mek1000.material.uranium")],
    ["iridium", 0xf3ff80, Text.translate("mek1000.material.iridium")],
    ["debri", 0xa34f05, Text.translate("mek1000.material.debri")],
  ];

  types.forEach((type) => {
    event // 圧縮凝塊
      .create(`mek1000:compressed_${type[0]}_clump`)
      .displayName(
        Text.translate("item.mek1000.compressed_clump.name", type[2])
      )
      .tooltip(Text.translate("item.mek1000.compressed_clump.desc"))
      .maxStackSize(64)
      .textureJson({
        layer0: "mek1000:item/compressed_clump",
      })
      .tag(`mek1000:ores/compressed_clump/${type[0]}`)
      .tag(`mek1000:ores/compressed_clump`)
      .color(0, type[1])
      .rarity("uncommon");

    event // 圧縮欠片
      .create(`mek1000:compressed_${type[0]}_shard`)
      .displayName(
        Text.translate("item.mek1000.compressed_shard.name", type[2])
      )
      .tooltip(Text.translate("item.mek1000.compressed_shard.desc"))
      .textureJson({
        layer0: "mek1000:item/compressed_shard",
      })
      .tag(`mek1000:ores/compressed_shard/${type[0]}`)
      .tag(`mek1000:ores/compressed_shard`)
      .color(0, type[1])
      .maxStackSize(64)
      .rarity("uncommon")

    event // 圧縮結晶
      .create(`mek1000:compressed_${type[0]}_crystal`)
      .displayName(
        Text.translate("item.mek1000.compressed_crystal.name", type[2])
      )
      .tooltip(Text.translate("item.mek1000.compressed_crystal.desc"))
      .maxStackSize(64)
      .textureJson({
        layer0: "mek1000:item/compressed_crystal",
      })
      .tag(`mek1000:ores/compressed_crystal/${type[0]}`)
      .tag(`mek1000:ores/compressed_crystal`)
      .color(0, type[1])
      .rarity("uncommon")
  });
});
