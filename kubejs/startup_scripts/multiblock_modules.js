StartupEvents.registry("block", (event) => {
    event
    .create("mek1000:composite_module")
    .soundType(SoundType.METAL)
    .hardness(5.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);

    event
    .create("mek1000:enchanted_module")
    .soundType(SoundType.METAL)
    .hardness(5.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);

    event
    .create("mek1000:infinity_module")
    .soundType(SoundType.METAL)
    .hardness(5.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);

    event
    .create("mek1000:astral_module")
    .soundType(SoundType.METAL)
    .hardness(5.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);

    event
    .create("mek1000:module_smelting")
    .soundType(SoundType.METAL)
    .hardness(5.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);

    event
    .create("mek1000:module_oxidize")
    .soundType(SoundType.METAL)
    .hardness(5.0)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);


})