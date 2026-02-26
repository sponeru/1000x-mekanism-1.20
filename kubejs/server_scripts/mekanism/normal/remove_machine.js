ServerEvents.recipes(event => {
    event.remove({ output: 'mekmm:cnc_rolling_mill' })
    event.remove({ output: 'mekmm:cnc_lathe' })
    event.remove({ output: 'mekmm:replicator' })
    event.remove({ output: 'mekmm:fluid_replicator' })
})