ServerEvents.recipes(event => {
    event.remove({ id: 'astral_mekanism:alloy/alloy_elastic' })
    event.remove({ id: 'astral_mekanism:alloy/alloy_convergent' })
    event.remove({ id: 'astral_mekanism:alloy/alloy_enchanted' })
    event.remove({ id: 'astral_mekanism:alloy/alloy_stardust' })

    event.recipes.mekanismMetallurgicInfusing('astral_mekanism:alloy_elastic', '10x #forge:ingots/tin', '100x astral_mekanism:utility_infuse')
    event.recipes.mekanismMetallurgicInfusing('astral_mekanism:alloy_convergent','4x astral_mekanism:alloy_elastic', '500x astral_mekanism:singularity')
    event.recipes.mekanismMetallurgicInfusing('astral_mekanism:alloy_enchanted', '4x astral_mekanism:alloy_convergent', '200000x astral_mekanism:xp')
    event.recipes.mekanismMetallurgicInfusing('astral_mekanism:alloy_stardust', 'astral_mekanism:alloy_infuse', '5000x astral_mekanism:nether_star')

})