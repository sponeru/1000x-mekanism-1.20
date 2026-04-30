ServerEvents.loaded(event => {
    event.server.runCommandSilent("/kubejs reload lang")
})

PlayerEvents.respawned(event => {
    event.player.runCommandSilent("/ftbteambases lobby")
})