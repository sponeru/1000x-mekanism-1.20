ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    Commands.literal("infchannel").executes((c) =>
      c.source.server.runCommand("ae2 channelmode infinite")
    )
  );
    
  event.register(
    Commands.literal("defchannel").executes((c) =>
      c.source.server.runCommand("ae2 channelmode default")
    )
  );
    
});
