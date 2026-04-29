ServerEvents.recipes(event => {
    event.remove({output:'circulation_networks:sourceflow_crystal'})
    event.recipes.mekanism.metallurgic_infusing('circulation_networks:sourceflow_crystal','mek1000:crystal_certus_quartz', "100x astral_mekanism:singularity")

    event.remove({output:'circulation_networks:netherforged_crystal'})
    event.recipes.mekanism.metallurgic_infusing('circulation_networks:netherforged_crystal','mek1000:crystal_redstone', "100x astral_mekanism:singularity")

    event.remove({output:'circulation_networks:endercore_crystal'})
    event.recipes.mekanism.metallurgic_infusing('circulation_networks:endercore_crystal','mek1000:crystal_quartz', "100x astral_mekanism:singularity")

})