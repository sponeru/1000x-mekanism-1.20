ServerEvents.recipes(event =>{
    let transporters = ['mekanism:basic_logistical_transporter', 'mekanism:advanced_logistical_transporter', 'mekanism:elite_logistical_transporter', 'mekanism:ultimate_logistical_transporter', 'mekanism:restrictive_transporter', 'mekanism:diversion_transporter', 'mekanism_extras:absolute_logistical_transporter', 'mekanism_extras:supreme_logistical_transporter', 'mekanism_extras:cosmic_logistical_transporter', 'mekanism_extras:infinite_logistical_transporter', 'evolvedmekanism:overclocked_logistical_transporter', 'evolvedmekanism:quantum_logistical_transporter', 'evolvedmekanism:dense_logistical_transporter', 'evolvedmekanism:multiversal_logistical_transporter', 'evolvedmekanism:creative_logistical_transporter']

    transporters.forEach(value =>{
        event.remove({output:value})
    })
})