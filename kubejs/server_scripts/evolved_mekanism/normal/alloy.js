ServerEvents.recipes(event => {
    event.remove({ id: 'evolvedmekanism:metallurgic_infusing/alloy/hypercharged' })
    event.remove({ id: 'evolvedmekanism:metallurgic_infusing/alloy/singular' })
    event.remove({ id: 'evolvedmekanism:metallurgic_infusing/alloy/exoversal' })
    event.remove({ id: 'evolvedmekanism:nucleosynthesizing/alloy_subatomic' })

    event.recipes.mekanismMetallurgicInfusing('evolvedmekanism:alloy_hypercharged', '4x mekanism:alloy_atomic', '100x evolvedmekanism:uranium')
    event.recipes.mekanismMetallurgicInfusing('evolvedmekanism:alloy_singular','4x evolvedmekanism:alloy_subatomic', '500x evolvedmekanism:better_gold')
    event.recipes.mekanismMetallurgicInfusing('evolvedmekanism:alloy_exoversal', '4x evolvedmekanism:alloy_singular', '500x evolvedmekanism:plaslitherite')

    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "itemInput": { "amount":4, "ingredient": { "item": 'evolvedmekanism:alloy_hypercharged' } },
        "gasInput": { "amount": 500, "gas": "mekanism:antimatter" },
        "output": { "item": 'evolvedmekanism:alloy_subatomic' }, "duration": 1000
    })

    event.recipes.mekanismMetallurgicInfusing('evolvedmekanism:alloy_subatomic', '8x emextras:absolute_overclocked_control_circuit', '50000x astral_mekanism:singularity')
    
})