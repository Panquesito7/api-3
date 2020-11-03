
class CoreTeam {
    constructor(
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
    ) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.position = position;
        this.linkedin_profile = linkedin_profile;
        this.github_profile = github_profile;
        this.instagram_profile = instagram_profile;
        this.medium_profile = medium_profile;
        this.gender = gender;
        this.avatar_url = avatar_url;
    }
}


module.exports = {
    CoreTeam
}