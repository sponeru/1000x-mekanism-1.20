ServerEvents.tags("item",(event) => {
    event.add('forge:ores/quartz', 'kubejs:ore_quartz')
    event.add('forge:ores/quartz', 'kubejs:ore_quartz_deepslate')

    event.add('mek1000:ores/dense_tin', 'densemekanism:dense_tin_ore')
    event.add('mek1000:ores/dense_tin', 'densemekanism:dense_deepslate_tin_ore')

    event.add('mek1000:ores/dense_osmium', 'densemekanism:dense_osmium_ore')
    event.add('mek1000:ores/dense_osmium', 'densemekanism:dense_deepslate_osmium_ore')

    event.add('mek1000:ores/dense_uranium', 'densemekanism:dense_uranium_ore')
    event.add('mek1000:ores/dense_uranium', 'densemekanism:dense_deepslate_uranium_ore')

    event.add('mek1000:ores/dense_fluorite', 'densemekanism:dense_fluorite_ore')
    event.add('mek1000:ores/dense_fluorite', 'densemekanism:dense_deepslate_fluorite_ore')

    event.add('mek1000:ores/dense_lead', 'densemekanism:dense_lead_ore')
    event.add('mek1000:ores/dense_lead', 'densemekanism:dense_deepslate_lead_ore')

    event.add('mek1000:ores/dense_coal', 'denseores:dense_coal_ore')
    event.add('mek1000:ores/dense_coal', 'denseores:dense_deepslate_coal_ore')

    event.add('mek1000:ores/dense_iron', 'denseores:dense_iron_ore')
    event.add('mek1000:ores/dense_iron', 'denseores:dense_deepslate_iron_ore')

    event.add('mek1000:ores/dense_copper', 'denseores:dense_copper_ore')
    event.add('mek1000:ores/dense_copper', 'denseores:dense_deepslate_copper_ore')

    event.add('mek1000:ores/dense_gold', 'denseores:dense_gold_ore')
    event.add('mek1000:ores/dense_gold', 'denseores:dense_deepslate_gold_ore')

    event.add('mek1000:ores/dense_redstone', 'denseores:dense_redstone_ore')
    event.add('mek1000:ores/dense_redstone', 'denseores:dense_deepslate_redstone_ore')

    event.add('mek1000:ores/dense_emerald', 'denseores:dense_emerald_ore')
    event.add('mek1000:ores/dense_emerald', 'denseores:dense_deepslate_emerald_ore')

    event.add('mek1000:ores/dense_lapis', 'denseores:dense_lapis_ore')
    event.add('mek1000:ores/dense_lapis', 'denseores:dense_deepslate_lapis_ore')

    event.add('mek1000:ores/dense_diamond', 'denseores:dense_diamond_ore')
    event.add('mek1000:ores/dense_diamond', 'denseores:dense_deepslate_diamond_ore')

    event.add('mek1000:ores/dense_iridium', 'kubejs:dense_ore_iridium')
    event.add('mek1000:ores/dense_iridium', 'kubejs:dense_ore_iridium_deepslate')

    event.add('mek1000:ores/dense_quartz', 'kubejs:dense_ore_quartz')
    event.add('mek1000:ores/dense_quartz', 'kubejs:dense_ore_quartz_deepslate')

    event.add('mek1000:ores/dense_certus_quartz', 'kubejs:dense_ore_certus_quartz')
    event.add('mek1000:ores/dense_certus_quartz', 'kubejs:dense_ore_certus_quartz_deepslate')

    event.add('mekanism:clumps/diamond', 'astral_mekanism:compressed_diamond_ore')
    event.add('mekanism:shards/diamond', 'astral_mekanism:sparkling_diamond_ore')
    event.add('mekanism:crystals/diamond', 'astral_mekanism:enriched_diamond_ore')

    event.add('mekanism:clumps/emerald', 'astral_mekanism:compressed_emerald_ore')
    event.add('mekanism:shards/emerald', 'astral_mekanism:sparkling_emerald_ore')
    event.add('mekanism:crystals/emerald', 'astral_mekanism:enriched_emerald_ore')
})

ServerEvents.tags("fluid",(event)=>{
    event.add('forge:hydrogen', 'mekanism:hydrogen')
    event.add('minecraft:water', 'minecraft:water')
})