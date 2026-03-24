StartupEvents.registry("block", event => {
    event.create('mek1000:pdt')
        .soundType(SoundType.METAL)
        .hardness(5.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true)

    event.create('mek1000:pdt_i')
        .soundType(SoundType.METAL)
        .hardness(5.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true)
})