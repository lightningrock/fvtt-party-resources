export default class PartyResourcesApi {
  static get(name) {
    return game.settings.get('party-resources', name)
  }

  static set(name, value, options) {
    let properties = $.merge(
      options,
      { scope: "client", config: false, default: 0 },
    )

    game.settings.register('party-resources', name, properties);
  }
}