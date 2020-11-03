
function CoreTeam({
    id,
    name,
    email,
    mobile,
    position,
    linkedin_profile,
    github_profile,
    instagram_profile,
    medium_profile,
    gender,
    avatar_url
}) {
    return {
        id,
        name,
        email,
        mobile,
        position,
        linkedin_profile,
        github_profile,
        instagram_profile,
        medium_profile,
        gender,
        avatar_url
    }
}

module.exports = {
    CoreTeam
}