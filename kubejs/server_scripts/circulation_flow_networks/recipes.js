ServerEvents.recipes(event => {
    event.remove({output:'circulation_networks:sourceflow_crystal'})
    event.recipes.mekanism.metallurgic_infusing('circulation_networks:sourceflow_crystal','fluxnetworks:flux_core', "100x mekanism:diamond")

    event.remove({output:'circulation_networks:netherforged_crystal'})
    event.recipes.mekanism.metallurgic_infusing('circulation_networks:netherforged_crystal','fluxnetworks:flux_core', "100x mekanism:redstone")

    event.remove({output:'circulation_networks:endercore_crystal'})
    event.recipes.mekanism.metallurgic_infusing('circulation_networks:endercore_crystal','fluxnetworks:flux_core', "100x mekanism:gold")

})