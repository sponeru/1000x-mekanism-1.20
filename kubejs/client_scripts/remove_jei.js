JEIEvents.hideItems(event => {

    let hideMachines = ['mekmm:cnc_lathe', 'mekmm:cnc_rolling_mill', 'mekmm:basic_lathing_factory', 'mekmm:advanced_lathing_factory', 'mekmm:replicator', 'mekmm:fluid_replicator', 'mekmm:basic_rolling_mill_factory', 'mekmm:advanced_rolling_mill_factory', 'mekmm:elite_rolling_mill_factory', 'mekmm:basic_replicating_factory', 'mekmm:advanced_replicating_factory', 'mekmm:elite_replicating_factory', 'mekmm:ultimate_replicating_factory', 'mekmm:ultimate_lathing_factory', 'mekmm:elite_lathing_factory', 'mekmm:ultimate_rolling_mill_factory']

    hideMachines.forEach(item =>{
        event.hide(item)
    })

    event.hide('expatternprovider:fishbig')
    event.hide(Item.of('ae2:facade', '{item:"expatternprovider:fishbig"}'))
})