StartupEvents.registry("item", (event) => {
  event.create("iridium").tag("forge:gems").tag("forge:gems/iridium");
  event
    .create("crystal_iridium")
    .tag("mekanism:crystals")
    .tag("mekanism:crystals/iridium");
  event
    .create("shard_iridium")
    .tag("mekanism:shards")
    .tag("mekanism:shards/iridium");
  event
    .create("clump_iridium")
    .tag("mekanism:clumps")
    .tag("mekanism:clumps/iridium");
  event
    .create("dirty_dust_iridium")
    .tag("mekanism:dirty_dusts")
    .tag("mekanism:dirty_dusts/iridium");
  event.create("dust_iridium").tag("forge:dusts").tag("forge:dusts/iridium");

  event
    .create("crystal_debri")
    .tag("mekanism:crystals")
    .tag("mekanism:crystals/debri");
  event
    .create("shard_debri")
    .tag("mekanism:shards")
    .tag("mekanism:shards/debri");
  event
    .create("clump_debri")
    .tag("mekanism:clumps")
    .tag("mekanism:clumps/debri");
  event
    .create("dirty_dust_debri")
    .tag("mekanism:dirty_dusts")
    .tag("mekanism:dirty_dusts/debri");
  event.create("dust_debri").tag("forge:dusts").tag("forge:dusts/debri");
});

StartupEvents.registry("mekanism:slurry", (event) => {
  event
    .create("dirty_iridium")
    .texture("mekanism:slurry/dirty")
    .color(0xf0f8ff);
  event
    .create("clean_iridium")
    .texture("mekanism:slurry/clean")
    .color(0xf0f8ff);

  event.create("dirty_debri").texture("mekanism:slurry/dirty").color(0x9c6a3e);
  event.create("clean_debri").texture("mekanism:slurry/clean").color(0x9c6a3e);
});

StartupEvents.registry("block", (event) => {
  event
    .create("ore_iridium")
    .soundType(SoundType.STONE)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:mineable/paxel")
    .requiresTool(true)
    .tag("forge:ores/iridium");

  event
    .create("dense_ore_iridium")
    .soundType(SoundType.STONE)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:mineable/paxel")
    .requiresTool(true);

  event
    .create("ore_quartz")
    .soundType(SoundType.STONE)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:mineable/paxel")
    .requiresTool(true);

  event
    .create("dense_ore_quartz")
    .soundType(SoundType.STONE)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:mineable/paxel")
    .requiresTool(true);

  event
    .create("ore_iridium_deepslate")
    .soundType(SoundType.DEEPSLATE)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:mineable/paxel")
    .requiresTool(true)
    .tag("forge:ores/iridium");

  event
    .create("dense_ore_iridium_deepslate")
    .soundType(SoundType.DEEPSLATE)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:mineable/paxel")
    .requiresTool(true);

  event
    .create("ore_quartz_deepslate")
    .soundType(SoundType.DEEPSLATE)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:mineable/paxel")
    .requiresTool(true);

  event
    .create("dense_ore_quartz_deepslate")
    .soundType(SoundType.DEEPSLATE)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:mineable/paxel")
    .requiresTool(true);
});
