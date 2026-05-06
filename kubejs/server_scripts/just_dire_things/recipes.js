ServerEvents.recipes(event =>{
    event.remove({output:'justdirethings:gooblock_tier1'})
    event.remove({output:'justdirethings:gooblock_tier2'})
    event.remove({output:'justdirethings:gooblock_tier3'})
    event.remove({output:'justdirethings:gooblock_tier4'})

    event.recipes.mekanism.metallurgic_infusing('4x justdirethings:raw_ferricore','#forge:storage_blocks/iron',"100x astral_mekanism:utility_infuse")
    event.recipes.mekanism.metallurgic_infusing('4x justdirethings:raw_blazegold','#forge:storage_blocks/gold',"100x astral_mekanism:utility_infuse")
    event.recipes.mekanism.metallurgic_infusing('4x justdirethings:raw_eclipsealloy','#forge:storage_blocks/netherite',"100x astral_mekanism:utility_infuse")
})