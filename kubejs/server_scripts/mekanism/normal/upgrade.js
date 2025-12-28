ServerEvents.recipes(event => {
    let circuit = [
        'mekanism:upgrade_speed',
        'mekanism:upgrade_energy',
        'mekanism:upgrade_filter',
        'mekanism:upgrade_muffling',
        'mekanism:upgrade_gas',
        'mekanism:upgrade_anchor',
        'mekanism:upgrade_stone_generator',
        'mekanism_extras:upgrade_stack'
    ]
    circuit.forEach((name) => {
        event.remove({ output: name })
    })
    let upgr = (output, E, T, N) => {
        event.shaped(output, [
            ' e ',
            'tnt',
            ' e '
        ], {
            e: E,
            t: T,
            n: N
        })
    }
    upgr('mekanism:upgrade_speed', 'minecraft:redstone', 'minecraft:glass', '#forge:ingots/osmium')
    upgr('mekanism:upgrade_energy', 'minecraft:redstone', 'minecraft:glass', '#forge:ingots/gold')
    upgr('mekanism:upgrade_filter', 'minecraft:redstone', 'minecraft:glass', '#forge:ingots/tin')
    upgr('mekanism:upgrade_muffling', 'minecraft:redstone', 'minecraft:glass', '#forge:ingots/steel')
    upgr('mekanism:upgrade_gas', 'minecraft:redstone', 'minecraft:glass', '#forge:ingots/iron')
    upgr('mekanism:upgrade_anchor', 'minecraft:redstone', 'minecraft:glass', '#forge:gems/diamond')
    upgr('mekanism:upgrade_stone_generator', 'minecraft:redstone', 'minecraft:glass', 'minecraft:cobblestone')
    upgr('mekanism_extras:upgrade_stack', 'mek1000:absolute_super_circuit', 'mek1000:laser_glass', 'mekanism_extras:infinite_tier_installer')


    
    //Advanced Upgrade
    
    let advUpgr = (output,input) =>{
            event.custom({
            type: "mekanism:reaction",
            itemInput: { amount: 64,ingredient: { item: input} },
            fluidInput: { fluid: "mek1000:condenced_lux", amount: 500 },
            gasInput: { gas: "mekanism:antimatter", amount: 500 },
            energyRequired: 20,
            duration: 50,
            itemOutput: { item: output },
            //gasOutput: { gas: "mek1000:activated_redstone", amount: 1 },
        });
    }

    advUpgr('mekanism_empowered:upgrade_empowered_speed','mekanism:upgrade_speed')
})