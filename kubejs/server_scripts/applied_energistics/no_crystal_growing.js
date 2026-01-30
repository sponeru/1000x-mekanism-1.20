ServerEvents.recipes(event => { 
    let budding = ['ae2:flawless_budding_quartz', 'ae2:flawed_budding_quartz', 'ae2:chipped_budding_quartz', 'ae2:damaged_budding_quartz']

    budding.forEach(value => {
        event.remove({output:value})
    })
})