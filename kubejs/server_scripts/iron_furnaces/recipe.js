ServerEvents.recipes(event =>{
    let removeItems = ['ironfurnaces:obsidian_furnace', 'ironfurnaces:crystal_furnace', 'ironfurnaces:netherite_furnace', 'ironfurnaces:copper_furnace', 'ironfurnaces:silver_furnace', 'ironfurnaces:upgrade_obsidian', 'ironfurnaces:upgrade_crystal', 'ironfurnaces:upgrade_netherite', 'ironfurnaces:upgrade_copper', 'ironfurnaces:upgrade_silver', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_iron2', 'ironfurnaces:upgrade_gold2', 'ironfurnaces:upgrade_silver2', 'ironfurnaces:heater', 'ironfurnaces:item_heater', 'ironfurnaces:augment_factory', 'ironfurnaces:augment_generator', 'ironfurnaces:augment_fuel', 'ironfurnaces:item_spooky', 'ironfurnaces:item_xmas', 'ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_plating','ironfurnaces:million_furnace', 'ironfurnaces:rainbow_coal']

    removeItems.forEach(value =>{
        event.remove({output:value})
    })

    event.remove({output:'ironfurnaces:iron_furnace'})
    event.shapeless('ironfurnaces:iron_furnace',['minecraft:furnace','#forge:ingots/iron'])

    event.remove({output:'ironfurnaces:upgrade_iron'})
    event.shapeless('ironfurnaces:upgrade_iron',['#minecraft:stone_crafting_materials','#forge:ingots/iron'])

    event.remove({output:'ironfurnaces:gold_furnace'})
    event.shapeless('ironfurnaces:gold_furnace',['ironfurnaces:iron_furnace','#forge:ingots/gold'])

    event.remove({output:'ironfurnaces:upgrade_gold'})
    event.shapeless('ironfurnaces:upgrade_gold',['#forge:ingots/iron','#forge:ingots/gold'])

    event.remove({output:'ironfurnaces:diamond_furnace'})
    event.shapeless('ironfurnaces:diamond_furnace',['ironfurnaces:gold_furnace','#forge:gems/diamond'])

    event.remove({output:'ironfurnaces:upgrade_diamond'})
    event.shapeless('ironfurnaces:upgrade_diamond',['#forge:ingots/gold','#forge:gems/diamond'])

    event.remove({output:'ironfurnaces:emerald_furnace'})
    event.shapeless('ironfurnaces:emerald_furnace',['ironfurnaces:diamond_furnace','#forge:gems/emerald'])

    event.remove({output:'ironfurnaces:upgrade_emerald'})
    event.shapeless('ironfurnaces:upgrade_emerald',['#forge:gems/diamond','#forge:gems/emerald'])

    event.remove({output:'ironfurnaces:augment_blasting'})
    event.shapeless('ironfurnaces:augment_blasting',['minecraft:blast_furnace'])

    event.remove({output:'ironfurnaces:augment_smoking'})
    event.shapeless('ironfurnaces:augment_smoking',['minecraft:smoker'])

    event.remove({output:'ironfurnaces:augment_speed'})
    event.shapeless('ironfurnaces:augment_speed',['8x mekanism:upgrade_speed'])
})