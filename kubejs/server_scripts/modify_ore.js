let oreList = [
    'minecraft:coal_ore',
    'minecraft:deepslate_coal_ore',
    'minecraft:iron_ore',
    'minecraft:deepslate_iron_ore',
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore',
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:redstone_ore',
    'minecraft:deepslate_redstone_ore',
    'minecraft:emerald_ore',
    'minecraft:deepslate_emerald_ore',
    'minecraft:lapis_ore',
    'minecraft:deepslate_lapis_ore',
    'minecraft:diamond_ore',
    'minecraft:deepslate_diamond_ore',
    'mekanism:tin_ore',
    'mekanism:deepslate_tin_ore',
    'mekanism:osmium_ore',
    'mekanism:deepslate_osmium_ore',
    'mekanism:uranium_ore',
    'mekanism:deepslate_uranium_ore',
    'mekanism:fluorite_ore',
    'mekanism:deepslate_fluorite_ore',
    'mekanism:lead_ore',
    'mekanism:deepslate_lead_ore',
    'densemekanism:dense_tin_ore',
    'densemekanism:dense_deepslate_tin_ore',
    'densemekanism:dense_osmium_ore',
    'densemekanism:dense_deepslate_osmium_ore',
    'densemekanism:dense_uranium_ore',
    'densemekanism:dense_deepslate_uranium_ore',
    'densemekanism:dense_fluorite_ore',
    'densemekanism:dense_deepslate_fluorite_ore',
    'densemekanism:dense_lead_ore',
    'densemekanism:dense_deepslate_lead_ore',
    'denseores:dense_coal_ore',
    'denseores:dense_deepslate_coal_ore',
    'denseores:dense_iron_ore',
    'denseores:dense_deepslate_iron_ore',
    'denseores:dense_copper_ore',
    'denseores:dense_deepslate_copper_ore',
    'denseores:dense_gold_ore',
    'denseores:dense_deepslate_gold_ore',
    'denseores:dense_redstone_ore',
    'denseores:dense_deepslate_redstone_ore',
    'denseores:dense_emerald_ore',
    'denseores:dense_deepslate_emerald_ore',
    'denseores:dense_lapis_ore',
    'denseores:dense_deepslate_lapis_ore',
    'denseores:dense_diamond_ore',
    'denseores:dense_deepslate_diamond_ore',
    'denseores:dense_nether_gold_ore'
]

oreList.forEach(item => {
    ServerEvents.tags('block', event => {
        event.remove('minecraft:needs_stone_tool', item)
        event.remove('minecraft:needs_iron_tool', item)
    })
})

ServerEvents.tags('item', event => {
    event.add('forge:ores/debri', 'deepdepthnetherite:deepslate_netherite_ore')
})

