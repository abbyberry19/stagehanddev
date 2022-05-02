const ROLE = {
    MANAGER: 'manager',
    CAST: 'cast',
    CREW: 'crew',
}

module.exports = {
    ROLE: ROLE,
    users: [
        { id: 1, username: 'emilymcs', role: ROLE.MANAGER },
        { id: 1, username: 'joshoh', role: ROLE.CAST },
        { id: 1, username: 'niamhmcl', role: ROLE.CREW }
    ],
    projects: [
        { id: 1, name: "Hairspray", userId: 1 },
        { id: 2, name: "Legally Blonde", userId: 2 },
        { id: 3, name: "Mean Girls", userId: 3 },
    ]
}