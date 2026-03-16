ServerEvents.recipes(event =>{
    let transporters = ['mekanism_extras:absolute_logistical_transporter', 'mekanism_extras:supreme_logistical_transporter', 'mekanism_extras:cosmic_logistical_transporter', 'mekanism_extras:infinite_logistical_transporter', 'evolvedmekanism:overclocked_logistical_transporter', 'evolvedmekanism:quantum_logistical_transporter', 'evolvedmekanism:dense_logistical_transporter', 'evolvedmekanism:multiversal_logistical_transporter', 'evolvedmekanism:creative_logistical_transporter']

    transporters.forEach(value =>{
        event.remove({output:value})
    })
})