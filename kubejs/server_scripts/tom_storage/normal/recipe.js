ServerEvents.recipes(event => {
    let removeItems = ['toms_storage:ts.storage_terminal', 'toms_storage:ts.trim', 'toms_storage:ts.open_crate', 'toms_storage:ts.inventory_cable', 'toms_storage:ts.inventory_cable_framed', 'toms_storage:ts.inventory_cable_connector', 'toms_storage:ts.inventory_cable_connector_filtered', 'toms_storage:ts.inventory_cable_connector_framed', 'toms_storage:ts.inventory_proxy', 'toms_storage:ts.inventory_hopper_basic', 'toms_storage:ts.level_emitter', Item.of('toms_storage:ts.paint_kit', '{Damage:0}'), 'toms_storage:ts.wireless_terminal', 'toms_storage:ts.adv_wireless_terminal', 'toms_storage:ts.item_filter', 'toms_storage:ts.polymorphic_item_filter', 'toms_storage:ts.tag_item_filter']

    removeItems.forEach(value => {
        event.remove({ output: value })
    })

    event.remove({ output: 'toms_storage:ts.crafting_terminal' })
    event.shaped('toms_storage:ts.crafting_terminal', [
        'TDT',
        'DCD',
        'TDT'
    ], {
        T: 'minecraft:crafting_table',
        D: 'minecraft:diamond',
        C: '#forge:chests/wooden',
    })

    event.remove({ output: 'toms_storage:ts.inventory_connector' })
    event.shaped('toms_storage:ts.inventory_connector', [
        'WDW',
        'CCC',
        'WDW'
    ], {
        W: '#minecraft:planks',
        D: 'minecraft:diamond',
        C: '#forge:chests/wooden',
    })
})