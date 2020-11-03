
function PublicRepos({
    name,
    html_url,
    language,
    description,
    stars,
    issues_count
}) {
    return {
        name,
        html_url,
        language,
        description,
        stars,
        issues_count
    }
}


module.exports = {
    PublicRepos
}