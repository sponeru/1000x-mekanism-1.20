//

ServerEvents.recipes(event => {
    let oxidize = (input, out, count) => (event.custom({
        "type": "mekanism:oxidizing",
        "input": {
            "ingredient": {
                "item": input
            }
        },
        "output": {
            "gas": out,
            "amount": count
        }
    }))
    oxidize('minecraft:quartz', 'mek1000:vaporized_quartz', 1)
    oxidize('minecraft:iron_ingot', 'mek1000:vaporized_iron', 1)
    oxidize('minecraft:coal', 'mek1000:vaporized_coal', 1)
    oxidize('minecraft:diamond', 'mek1000:vaporized_diamond', 1)
    oxidize('minecraft:emerald', 'mek1000:vaporized_emerald', 1)
    oxidize('minecraft:lapis_lazuli', 'mek1000:vaporized_lapis', 1)
    oxidize('minecraft:copper_ingot', 'mek1000:vaporized_copper', 1)
    oxidize('minecraft:amethyst_shard', 'mek1000:vaporized_amethyst', 1)
    oxidize('minecraft:redstone', 'mek1000:vaporized_redstone', 1)
    oxidize('mekanism:fluorite_gem', 'mek1000:vaporized_fluorite', 1)
    oxidize('mekanism:ingot_osmium', 'mek1000:vaporized_osmium', 1)
    oxidize('mekanism:ingot_tin', 'mek1000:vaporized_tin', 1)
    oxidize('mekanism:ingot_lead', 'mek1000:vaporized_lead', 1)
    oxidize('mekanism:ingot_uranium', 'mek1000:vaporized_uranium', 1)
    oxidize('minecraft:gold_ingot', 'mek1000:vaporized_gold', 1)
    oxidize('ae2:certus_quartz_crystal', 'mek1000:vaporized_certus', 1)
    oxidize('kubejs:iridium', 'mek1000:vaporized_iridium', 1)

    oxidize('mek1000:compressed_purified_quartz_rawore', 'mek1000:vaporized_quartz', 6000)
    oxidize('mek1000:compressed_purified_iron_rawore', 'mek1000:vaporized_iron', 8100)
    oxidize('mek1000:compressed_purified_coal_rawore', 'mek1000:vaporized_coal', 4000)
    oxidize('mek1000:compressed_purified_diamond_rawore', 'mek1000:vaporized_diamond', 1000)
    oxidize('mek1000:compressed_purified_emerald_rawore', 'mek1000:vaporized_emerald', 1000)
    oxidize('mek1000:compressed_purified_lapis_rawore', 'mek1000:vaporized_lapis', 6000)
    oxidize('mek1000:compressed_purified_copper_rawore', 'mek1000:vaporized_copper', 8100)
    oxidize('minecraft:amethyst_block', 'mek1000:vaporized_amethyst', 4)
    oxidize('mek1000:crystal_redstone', 'mek1000:vaporized_redstone', 48)
    oxidize('mek1000:compressed_purified_fluorite_rawore', 'mek1000:vaporized_fluorite', 6000)
    oxidize('mek1000:compressed_purified_osmium_rawore', 'mek1000:vaporized_osmium', 8100)
    oxidize('mek1000:compressed_purified_tin_rawore', 'mek1000:vaporized_tin', 8100)
    oxidize('mek1000:compressed_purified_lead_rawore', 'mek1000:vaporized_lead', 8100)
    oxidize('mek1000:compressed_purified_uranium_rawore', 'mek1000:vaporized_uranium', 8100)
    oxidize('mek1000:compressed_purified_gold_rawore', 'mek1000:vaporized_gold', 8100)
    oxidize('mek1000:compressed_purified_certus_quartz_rawore', 'mek1000:vaporized_certus', 8100)
    oxidize('mek1000:compressed_purified_iridium_rawore', 'mek1000:vaporized_iridium', 8100)
})