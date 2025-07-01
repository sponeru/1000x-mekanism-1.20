ServerEvents.recipes((event) => {
    event.recipes.mek1000.fusion()
        .id("mek1000:recipe_infinity_ingot")
        .duration(20 * 50)
        .outputItems('mek1000:infinity_ingot')
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .inputItems('mek1000:eternal_singularity', 'mek1000:neutronium_ingot')

    event.recipes.mek1000.fusion()
        .id("mek1000:recipe_creative_energy_cell")
        .duration(20 * 150)
        .outputItems('ae2:creative_energy_cell')
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .inputItems('megacells:mega_energy_cell', '8x mek1000:infinity_ingot')

    event.recipes.mek1000.fusion()
        .id("mek1000:recipe_creative_chemical")
        .duration(20 * 150)
        .outputItems('mekanism:creative_chemical_tank')
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .inputItems('mekanism_extras:infinite_chemical_tank', '8x mek1000:infinity_ingot')

    event.recipes.mek1000.fusion()
        .id("mek1000:recipe_creative_tank")
        .duration(20 * 150)
        .outputItems('mekanism:creative_fluid_tank')
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .inputItems('mekanism_extras:infinite_fluid_tank', '8x mek1000:infinity_ingot')

    event.recipes.mek1000.fusion()
        .id("mek1000:recipe_creative_cell")
        .duration(20 * 150)
        .outputItems('ae2:creative_item_cell')
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .inputItems('mekanism:creative_bin', '64x mek1000:infinity_ingot')
})