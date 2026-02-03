StartupEvents.registry("block", (event) => {
  event
    .create("mek1000:electricity_resistant_reinforced_casing")
    .soundType(SoundType.METAL)
    .tagBlock("forge:mineable/paxel")
    .tagBlock("minecraft:mineable/pickaxe")
    .requiresTool(true);
  event
    .create("mek1000:wtf_casing")
    .soundType(SoundType.METAL)
    .tagBlock("forge:mineable/paxel")
    .tagBlock("minecraft:mineable/pickaxe")
    .requiresTool(true);
  event
    .create("mek1000:uranite_flux_casing")
    .soundType(SoundType.METAL)
    .tagBlock("forge:mineable/paxel")
    .tagBlock("minecraft:mineable/pickaxe")
    .requiresTool(true);
  event
    .create("mek1000:laser_glass")
    .renderType("translucent")
    .defaultTranslucent()
    .soundType(SoundType.GLASS)
    .tagBlock("forge:mineable/paxel")
    .tagBlock("minecraft:mineable/pickaxe")
    .requiresTool(true);
  event
    .create("mek1000:black_casing")
    .textureAll("mek1000:block/metallugic_form")
    .color(0, 0x696969)
    .item((itemForm) => {
      itemForm.color(0, 0x696969);
    })
    .soundType(SoundType.METAL)
    .tagBlock("forge:mineable/paxel")
    .tagBlock("minecraft:mineable/pickaxe")
    .requiresTool(true);
  event
    .create("mek1000:reinforced_steel_casing")
    .textureAll("mek1000:block/metallugic_form")
    .soundType(SoundType.METAL)
    .tagBlock("forge:mineable/paxel")
    .tagBlock("minecraft:mineable/pickaxe")
    .requiresTool(true);

  event
    .create("mek1000:tin_casing")
    .material("stone")
    .tagBlock("minecraft:mineable/pickaxe")
    .resistance(3);

  event
    .create("mek1000:tin_casing_incomplete")
    .textureAll("mek1000:block/tin_casing")
    .color(0, 0x999999)
    .item((itemForm) => {
      itemForm.color(0, 0x999999);
    })
    .material("metal")
    .tagBlock("minecraft:mineable/pickaxe")
    .resistance(2.5);

  event
    .create("mek1000:fusion_coil")
    .soundType(SoundType.METAL)
    .hardness(5.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true)
    .texture("up", "mek1000:block/fusion_coil_top")
    .texture("down", "mek1000:block/fusion_coil_top");

  event
    .create("mek1000:blast_coil")
    .soundType(SoundType.METAL)
    .hardness(5.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true)
    .texture("up", "mek1000:block/blast_coil_top")
    .texture("down", "mek1000:block/blast_coil_top");

  event
    .create("mek1000:fusion_casing")
    .soundType(SoundType.METAL)
    .hardness(5.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);

  event
    .create("mek1000:super_computing_cell")
    .soundType(SoundType.METAL)
    .hardness(5.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);
});
