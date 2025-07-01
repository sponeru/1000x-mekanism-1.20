ServerEvents.loaded(event => {
    event.server.runCommandSilent("/kubejs reload lang")
})