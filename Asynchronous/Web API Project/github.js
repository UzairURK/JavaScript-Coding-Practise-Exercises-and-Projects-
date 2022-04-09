class Github{
    constructor() {
        this.client_id = '09743c764b63067f5c13';
        this.client_secret = 'a5e769779bb9e5d71300ead4ad6d9c36c03a7bfa';
        this.repo_count = 5;
        this.repo_sort = 'created: asc'; // in asceding order
    }

    async getUsers(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`); // orginal URL to find github user = https://api.github.com/users/bradtraversy
        const profile = await profileResponse.json(); // convert to json
        // fetch repo
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`); // orginal URL to find github user = https://api.github.com/users/bradtraversy

        const repos = await reposResponse.json(); // convert to json

        return {
            profile,
            repos
        }
    }
}