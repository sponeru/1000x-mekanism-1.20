ServerEvents.recipes(event => {
    ['smelting', 'enriching', 'crushing', 'compressing', 'combining', 'purifying', 'injecting', 'infusing', 'sawing'].forEach((id) => {
        event.remove({ id: `mekanism:factory/basic/${id}` }),
            event.remove({ id: `mekanism:factory/advanced/${id}` }),
            event.remove({ id: `mekanism:factory/elite/${id}` }),
            event.remove({ id: `mekanism:factory/ultimate/${id}` }),
            event.remove({ id: `mekanism_extras:factory/absolute/${id}` }),
            event.remove({ id: `mekanism_extras:factory/supreme/${id}` }),
            event.remove({ id: `mekanism_extras:factory/cosmic/${id}` }),
            event.remove({ id: `mekanism_extras:factory/infinite/${id}` })
    })

    var mmlist = ['planting', 'recycling', 'stamping', 'lathing', 'rolling_mill', 'replicating']

    mmlist.forEach((id)=>{
            event.remove({ id: `mekmm:factory/basic/${id}` }),
            event.remove({ id: `mekmm:factory/advanced/${id}` }),
            event.remove({ id: `mekmm:factory/elite/${id}` }),
            event.remove({ id: `mekmm:factory/ultimate/${id}` })
    })

    var advMachineList = ["oxidizing","chemical_infusing","washing","dissolving","crystallizing","pressurised_reacting","centrifuging","liquifying"]
    
    let machineUpgradeMap = new Map([
        ["recycling",'mekmm:recycler'],
        ["planting",'mekmm:planting_station'],
        ["stamping",'mekmm:cnc_stamper'],
        ["oxidizing",'mekanism:chemical_oxidizer'],
        ["chemical_infusing",'mekanism:chemical_infuser'],
        ["washing",'mekanism:chemical_washer'],
        ["dissolving",'mekanism:chemical_dissolution_chamber'],
        ["crystallizing",'mekanism:chemical_crystallizer'],
        ["pressurised_reacting",'mekanism:pressurized_reaction_chamber'],
        ["centrifuging",'mekanism:isotopic_centrifuge'],
        ["liquifying",'mekanism:nutritional_liquifier']        
        ])

    //lathing
    //replicating
    //rolling_mill

    advMachineList.forEach((id)=>{
            event.remove({ id: `mekmm:factory/basic/${id}` }),
            event.remove({ id: `mekmm:factory/advanced/${id}` }),
            event.remove({ id: `mekmm:factory/elite/${id}` }),
            event.remove({ id: `mekmm:factory/ultimate/${id}` })
    })
        
    advMachineList.concat(mmlist).forEach((id)=>{
        ["basic","advanced","elite","ultimate"].forEach((tier,index,array)=>{
                if(tier != "basic") event.recipes.minecraft.crafting_shapeless(`mekmm:${tier}_${id}_factory`,[`mekmm:${array[index-1]}_${id}_factory`,`mekanism:${tier}_tier_installer`])
        })
    })

    machineUpgradeMap.forEach((value,key)=>{
        event.recipes.minecraft.crafting_shapeless(`mekmm:basic_${key}_factory`,[value,`mekanism:basic_tier_installer`])
    })
})