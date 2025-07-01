//packmode: normal

ServerEvents.recipes(event => {
    let metaformer = (output, countA, input1, countB, input2, countC, input3, countD, expCost, time) => {
        event.custom({
            type: 'experienceobelisk:molecular_metamorphosis',
            ingredient1:
                { item: input1 }
            ,
            count1: countB,
            ingredient2:
                { item: input2 }
            ,
            count2: countC,
            ingredient3:
                { item: input3 }
            ,
            count3: countD,
            result:
                { item: output, count: countA }
            ,
            cost: expCost,
            processTime: time
        })
    }

    event.remove({ output: 'igleelib:blazum_ingot' })
    metaformer(
        'igleelib:blazum_ingot',
        1,
        'igleelib:modium_ingot',
        4,
        'minecraft:blaze_rod',
        2,
        'experienceobelisk:calcarine_matrix',
        4,
        50,
        100)

    event.remove({ output: 'igleelib:lavium_ingot' })
    metaformer(
        'igleelib:lavium_ingot',
        1,
        'igleelib:blazum_ingot',
        4,
        'igleelib:blaze_shard',
        2,
        'experienceobelisk:calcarine_matrix',
        4,
        200,
        100)

    event.remove({ output: 'igleelib:derium_ingot' })
    metaformer(
        'igleelib:derium_ingot',
        1,
        'igleelib:lavium_ingot',
        4,
        'minecraft:crying_obsidian',
        2,
        'experienceobelisk:calcarine_matrix',
        4,
        500,
        100)

    metaformer(
        'mek1000:the_null',
        4,
        'mek1000:infinite_super_circuit',
        1,
        'megacells:bulk_cell_component',
        4,
        'megacells:cell_component_256m',
        4,
        25250,
        2000)

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: "minecraft:book" }
        ,
        count1: 1,
        ingredient2:
            []
        ,
        count2: 0,
        ingredient3:
            []
        ,
        count3: 0,
        result:
            { item: 'minecraft:enchanted_book', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })
})