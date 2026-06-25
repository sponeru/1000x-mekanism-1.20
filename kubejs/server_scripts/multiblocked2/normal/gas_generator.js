ServerEvents.recipes(event => {

    event.shaped('mek1000:combustion_gas_generator', [
        'ete',
        'tnt',
        'ese'
    ], {
        e: 'mekanism:elite_control_circuit',
        t: 'mekanism:alloy_atomic',
        n: 'mek1000:reinforced_steel_casing',
        s: 'mekanismgenerators:gas_burning_generator'
    })

    event.recipes.mek1000.gas_generator()
        .id("mek1000:gas_generator_1")
        .duration(20 * 100)
        .perTick(builder => builder
            .outputFE(2147483647)
            .inputGases('200x mekanism_the_valine:deuterium_valine3g_tritium')
        )

    event.recipes.mek1000.advanced_gas_burning()
        .id("mek1000:advanced_gas_valine")
        .duration(400)
        .perTick(builder => builder
            .outputFE(2950000)
            .inputGases('128x mekanism_the_valine:valine3g')
        )
})