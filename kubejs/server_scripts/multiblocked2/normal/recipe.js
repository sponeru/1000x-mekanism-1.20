ServerEvents.recipes((event) => {
    event.shapeless('mek1000:advanced_gas_burning_generator', ['mekanismgenerators:gas_burning_generator', 'mekanism:advanced_control_circuit'])

    event.shaped('mek1000:library_of_babel', [
        'BMB',
        'ECE',
        'BDB'
    ], {
        C: 'mek1000:black_casing',
        M: 'experienceobelisk:molecular_metamorpher',
        D: 'experienceobelisk:precision_dispeller',
        E: 'minecraft:enchanting_table',
        B: 'mekanism:elite_control_circuit'

    })
})