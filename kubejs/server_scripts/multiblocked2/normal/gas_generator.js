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
            .inputGases('200x mek1000:dvt')
        )
})