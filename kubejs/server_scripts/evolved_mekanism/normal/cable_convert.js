ServerEvents.recipes(event =>{
    let cables = [
        ['mekanism_extras:absolute_universal_cable','evolvedmekanism:overclocked_universal_cable'],
        ['mekanism_extras:supreme_universal_cable','evolvedmekanism:quantum_universal_cable'],
        ['mekanism_extras:cosmic_universal_cable','evolvedmekanism:dense_universal_cable'],
        ['mekanism_extras:infinite_universal_cable','evolvedmekanism:multiversal_universal_cable']
    ]
    
    cables.forEach(value =>{
        event.remove({output:value[1]})
        event.shapeless(value[1],[value[0]])
        event.shapeless(value[0],[value[1]])
    })
})