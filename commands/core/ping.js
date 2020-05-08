const discord = require('discord.js')

module.exports = {

    name: 'ping',
    usage: 'ping',
    description: 'Display Puffles\'s response time and the connection latency to Discord\'s API.',
    module: 'core',
    aliases: [],
    examples: [],

    async execute (message, args, client) {

        const msg = await message.channel.send('`Pinging...`');

        const pingEmbed = new discord.MessageEmbed()
        .setColor(client.config.color.main)
        .addField('**Response Time**', msg.createdTimestamp - message.createdTimestamp + ' ms', true)
        .addField('**API Latency**', Math.round(client.ws.ping) + ' ms', true)

        msg.edit('', {embed: pingEmbed});

    }

}