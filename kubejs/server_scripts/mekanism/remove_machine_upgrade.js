ServerEvents.recipes(event => {
    ['smelting', 'enriching', 'crushing', 'compressing', 'combining', 'purifying', 'injecting', 'infusing', 'sawing'].forEach((id) => {
        event.remove({ id: `mekanism:factory/basic/${id}` }),
            event.remove({ id: `mekanism:factory/advanced/${id}` }),
            event.remove({ id: `mekanism:factory/elite/${id}` }),
            event.remove({ id: `mekanism:factory/ultimate/${id}` }),
            event.remove({ id: `mekanism_extras:factory/absolute/${id}` }),
            event.remove({ id: `mekanism_extras:factory/supreme/${id}` }),
            event.remove({ id: `mekanism_extras:factory/cosmic/${id}` }),
            event.remove({ id: `mekanism_extras:factory/infinite/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/overclocked/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/quantum/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/dense/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/multiversal/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/creative/${id}` })
    })

    var allevlist = ['alloying']
    var allmmlist = ['planting', 'recycling', 'stamping', 'lathing', 'rolling_mill', 'replicating']
    var mmlist = ['planting', 'recycling', 'stamping']

    allmmlist.forEach((id) => {
        event.remove({ id: `mekmm:factory/basic/${id}` }),
            event.remove({ id: `mekmm:factory/advanced/${id}` }),
            event.remove({ id: `mekmm:factory/elite/${id}` }),
            event.remove({ id: `mekmm:factory/ultimate/${id}` }),
            event.remove({ id: `mekmm:compat/evolvedmekanism/factory/overclocked/${id}` }),
            event.remove({ id: `mekmm:compat/evolvedmekanism/factory/quantum/${id}` }),
            event.remove({ id: `mekmm:compat/evolvedmekanism/factory/dense/${id}` }),
            event.remove({ id: `mekmm:compat/evolvedmekanism/factory/multiversal/${id}` }),
            event.remove({ id: `mekmm:compat/evolvedmekanism/factory/creative/${id}` })
    })

    allevlist.forEach((id) => {
        event.remove({ id: `evolvedmekanism:factory/basic/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/advanced/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/elite/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/ultimate/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/overclock/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/quantum/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/dense/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/multiversal/${id}` }),
            event.remove({ id: `evolvedmekanism:factory/creative/${id}` })
    })

    var advMachineList = ["oxidizing", "chemical_infusing", "washing", "dissolving", "crystallizing", "pressurised_reacting", "centrifuging", "liquifying"]

    let machineUpgradeMap = new Map([
        ["planting", 'mekmm:planting_station'],
        ["oxidizing", 'mekanism:chemical_oxidizer'],
        ["chemical_infusing", 'mekanism:chemical_infuser'],
        ["washing", 'mekanism:chemical_washer'],
        ["dissolving", 'mekanism:chemical_dissolution_chamber'],
        ["crystallizing", 'mekanism:chemical_crystallizer'],
        ["pressurised_reacting", 'mekanism:pressurized_reaction_chamber'],
        ["centrifuging", 'mekanism:isotopic_centrifuge'],
        ["liquifying", 'mekanism:nutritional_liquifier']
    ])

    advMachineList.forEach((id) => {
        event.remove({ id: `mekmm:factory/basic/${id}` }),
            event.remove({ id: `mekmm:factory/advanced/${id}` }),
            event.remove({ id: `mekmm:factory/elite/${id}` }),
            event.remove({ id: `mekmm:factory/ultimate/${id}` }),
            event.remove({ id: `mekmm:compat/evolvedmekanism/factory/overclocked/${id}` }),
            event.remove({ id: `mekmm:compat/evolvedmekanism/factory/quantum/${id}` }),
            event.remove({ id: `mekmm:compat/evolvedmekanism/factory/dense/${id}` }),
            event.remove({ id: `mekmm:compat/evolvedmekanism/factory/multiversal/${id}` }),
            event.remove({ id: `mekmm:compat/evolvedmekanism/factory/creative/${id}` })
    })

    advMachineList.concat(mmlist).forEach((id) => {
        if (id == 'planting' || id == "centrifuging") {
            let mktier = ["basic", "advanced", "elite", "ultimate"]

            mktier.forEach((tier, index, array) => {
                if (tier != "basic") event.recipes.minecraft.crafting_shapeless(`mekmm:${tier}_${id}_factory`, [`mekmm:${array[index - 1]}_${id}_factory`, `mekanism:${tier}_tier_installer`])
            })
        }
    })

    machineUpgradeMap.forEach((value, key) => {
        event.recipes.minecraft.crafting_shapeless(`mekmm:basic_${key}_factory`, [value, `mekanism:basic_tier_installer`])
    })
})