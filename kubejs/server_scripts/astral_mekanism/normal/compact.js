ServerEvents.recipes(event =>{
    event.remove({output:'astral_mekanism:essential_compact_fusion_reactor'})

    event.shaped(Item.of('astral_mekanism:essential_compact_fusion_reactor'), [
        'ACA',
        'CFC',
        'ACA'
    ], {
        F:'compactmekanismmachinesplus:compact_fusion_reactor',
        C:'astral_mekanism:vibration_control_circuit',
        A:'astral_mekanism:alloy_elastic'
    })
})