module.exports = {

    getRole: async (guild, input) => {

        if (input.length === 18 && await guild.roles.fetch(input)) return await guild.roles.fetch(input);
        
        const matches = input.match(/^<@&(\d+)>$/);
        if (!matches) return;

        return await guild.roles.fetch(matches[1]);

    },

    getMember: async (guild, input) => {
        
        if (input.length === 18 && await guild.members.fetch(input)) return await guild.members.fetch(input);

        const matches = input.match(/^<@!?(\d+)>$/);
        if (!matches) return;

        return await guild.members.fetch(matches[1]);

    },

    getChannel: async (client, input) => {

        if (input.length === 18 && await client.channels.fetch(input)) return await client.channels.fetch(input);

        const matches = input.match(/^<#(\d+)>$/);
        if (!matches) return;

        return await client.channels.fetch(matches[1]);

    }

}