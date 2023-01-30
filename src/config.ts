import { BotConfig } from './structures/types'; 

export const config: BotConfig = {
    groupId: 4502106,
    slashCommands: true,
    legacyCommands: {
        enabled: true,
        prefixes: ['!'],
    },
    permissions: {
        all: [''],
        ranking: [''],
        users: [''],
        shout: [''],
        join: [''],
        signal: [''],
        admin: [''],
    },
    logChannels: {
        actions: '1001020821495627827',
        shout: '1001020821495627827',
    },
    database: {
        enabled: true,
        type: 'mongodb',
    },
    api: false,
    maximumRank: 241,
    verificationChecks: true,
    firedRank: 1,
    suspendedRank: 1,
    recordManualActions: true,
    memberCount: {
        enabled: false,
        channelId: '',
        milestone: 100,
        onlyMilestones: false,
    },
    xpSystem: {
        enabled: false,
        autoRankup: false,
        roles: [
            /* Example:
            {
                rank: 3,
                xp: 30,
            },
            */
        ],
    },
    antiAbuse: {
        enabled: true,
        clearDuration: 1 * 60,
        threshold: 7,
        demotionRank: 1,
        bypassRoleId: '',
    },
    activity: {
        enabled: true,
        type: 'PLAYING',
        value: 'Pleasant Hotels',
    },
    status: 'online',
    deleteWallURLs: true,
}
