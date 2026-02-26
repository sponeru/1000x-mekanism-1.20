ServerEvents.recipes((event) => {
    event.remove({ id: "emextras:alloying/control_circuit/overclocked" })
    event.remove({ id: "emextras:alloying/control_circuit/quantum" })
    event.remove({ id: "emextras:alloying/control_circuit/dense" })
    event.remove({ id: "emextras:alloying/control_circuit/multiversal" })

    event.remove({ output: "evolvedmekanism:overclocked_control_circuit" })
    event.remove({ output: "evolvedmekanism:quantum_control_circuit" })
    event.remove({ output: "evolvedmekanism:dense_control_circuit" })
    event.remove({ output: "evolvedmekanism:multiversal_control_circuit" })

    event.shaped(
        Item.of("evolvedmekanism:overclocked_control_circuit", 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'mek1000:flux_processor',
            B: 'evolvedmekanism:alloy_hypercharged',
            C: 'mekanism:ultimate_control_circuit'
        }
    )

    event.shaped(
        Item.of("evolvedmekanism:quantum_control_circuit", 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'mek1000:cognitive_processor',
            B: 'evolvedmekanism:alloy_subatomic',
            C: "evolvedmekanism:overclocked_control_circuit"
        }
    )

    event.shaped(
        Item.of("evolvedmekanism:dense_control_circuit", 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'mek1000:echo_processor',
            B: 'evolvedmekanism:alloy_singular',
            C: "evolvedmekanism:quantum_control_circuit"
        }
    )

    event.shaped(
        Item.of('evolvedmekanism:multiversal_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'mek1000:valinium_processor',
            B: 'evolvedmekanism:alloy_exoversal',
            C: "evolvedmekanism:dense_control_circuit"
        }
    )
})