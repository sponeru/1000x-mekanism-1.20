JEIEvents.hideItems(event => {

    let hideMachines = ['mekmm:cnc_lathe', 'mekmm:cnc_rolling_mill', 'mekmm:basic_lathing_factory', 'mekmm:advanced_lathing_factory', 'mekmm:replicator', 'mekmm:fluid_replicator', 'mekmm:basic_rolling_mill_factory', 'mekmm:advanced_rolling_mill_factory', 'mekmm:elite_rolling_mill_factory', 'mekmm:basic_replicating_factory', 'mekmm:advanced_replicating_factory', 'mekmm:elite_replicating_factory', 'mekmm:ultimate_replicating_factory', 'mekmm:ultimate_lathing_factory', 'mekmm:elite_lathing_factory', 'mekmm:ultimate_rolling_mill_factory']

    hideMachines.forEach(item =>{
        event.hide(item)
    })

    let hideMesh = ['exdeorum:golden_mesh', 'exdeorum:diamond_mesh', 'exdeorum:netherite_mesh']

    hideMesh.forEach(item =>{
        event.hide(item)
    })

    event.hide('hyperdaimc:materializer')
    
    event.hide('expatternprovider:fishbig')
    event.hide(Item.of('ae2:facade', '{item:"expatternprovider:fishbig"}'))

    let IF_removeItems = ['ironfurnaces:obsidian_furnace', 'ironfurnaces:crystal_furnace', 'ironfurnaces:netherite_furnace', 'ironfurnaces:copper_furnace', 'ironfurnaces:silver_furnace', 'ironfurnaces:upgrade_obsidian', 'ironfurnaces:upgrade_crystal', 'ironfurnaces:upgrade_netherite', 'ironfurnaces:upgrade_copper', 'ironfurnaces:upgrade_silver', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_iron2', 'ironfurnaces:upgrade_gold2', 'ironfurnaces:upgrade_silver2', 'ironfurnaces:heater', 'ironfurnaces:item_heater', 'ironfurnaces:augment_factory', 'ironfurnaces:augment_generator', 'ironfurnaces:augment_fuel', 'ironfurnaces:item_spooky', 'ironfurnaces:item_xmas', 'ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_plating','ironfurnaces:million_furnace', 'ironfurnaces:rainbow_coal']

    IF_removeItems.forEach(item =>{
        event.hide(item)
    })
})