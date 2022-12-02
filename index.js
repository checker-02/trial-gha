const core = require('@actions/core');
const github = require('@actions/github');
const request = require('request');
const process = require('process');
var axios = require('axios');



module.exports = run;

async function run() {
    console.log("Identifying new issue in leaks repositoy");
    console.log(process.env.GITHUB_TOKEN)

    try {

        /*const payload = {
            "action": "opened",
            "issue": {
                "active_lock_reason": null,
                "assignee": null,
                "assignees": [],
                "author_association": "CONTRIBUTOR",
                "body": "This is a triall issue to trigger a workflow.\r\n[Files](https://github.com/checker-02/cofig-repo/blob/main/leak-one/config.json) | [Guide](https://github.com/checker-02/cofig-repo/blob/main/leak-one/notes.txt)",
                "closed_at": null,
                "comments": 0,
                "comments_url": "https://api.github.com/repos/checker-02/trial-gha/issues/2/comments",
                "created_at": "2022-11-28T14:31:05Z",
                "events_url": "https://api.github.com/repos/checker-02/trial-gha/issues/2/events",
                "html_url": "https://github.com/checker-02/trial-gha/issues/2",
                "id": 1466536235,
                "labels": [],
                "labels_url": "https://api.github.com/repos/checker-02/trial-gha/issues/2/labels{/name}",
                "locked": false,
                "milestone": null,
                "node_id": "I_kwDOIc1kMc5XaZEr",
                "number": 2,
                "performed_via_github_app": null,
                "reactions": {
                    "+1": 0,
                    "-1": 0,
                    "confused": 0,
                    "eyes": 0,
                    "heart": 0,
                    "hooray": 0,
                    "laugh": 0,
                    "rocket": 0,
                    "total_count": 0,
                    "url": "https://api.github.com/repos/checker-02/trial-gha/issues/2/reactions"
                },
                "repository_url": "https://api.github.com/repos/checker-02/trial-gha",
                "state": "open",
                "state_reason": null,
                "timeline_url": "https://api.github.com/repos/checker-02/trial-gha/issues/2/timeline",
                "title": "Trial-Check",
                "updated_at": "2022-11-28T14:31:05Z",
                "url": "https://api.github.com/repos/checker-02/trial-gha/issues/2",
                "user": {
                    "avatar_url": "https://avatars.githubusercontent.com/u/58053679?v=4",
                    "events_url": "https://api.github.com/users/surya-de/events{/privacy}",
                    "followers_url": "https://api.github.com/users/surya-de/followers",
                    "following_url": "https://api.github.com/users/surya-de/following{/other_user}",
                    "gists_url": "https://api.github.com/users/surya-de/gists{/gist_id}",
                    "gravatar_id": "",
                    "html_url": "https://github.com/surya-de",
                    "id": 58053679,
                    "login": "surya-de",
                    "node_id": "MDQ6VXNlcjU4MDUzNjc5",
                    "organizations_url": "https://api.github.com/users/surya-de/orgs",
                    "received_events_url": "https://api.github.com/users/surya-de/received_events",
                    "repos_url": "https://api.github.com/users/surya-de/repos",
                    "site_admin": false,
                    "starred_url": "https://api.github.com/users/surya-de/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/surya-de/subscriptions",
                    "type": "User",
                    "url": "https://api.github.com/users/surya-de"
                }
            },
            "organization": {
                "avatar_url": "https://avatars.githubusercontent.com/u/104818246?v=4",
                "description": null,
                "events_url": "https://api.github.com/orgs/checker-02/events",
                "hooks_url": "https://api.github.com/orgs/checker-02/hooks",
                "id": 104818246,
                "issues_url": "https://api.github.com/orgs/checker-02/issues",
                "login": "checker-02",
                "members_url": "https://api.github.com/orgs/checker-02/members{/member}",
                "node_id": "O_kgDOBj9mRg",
                "public_members_url": "https://api.github.com/orgs/checker-02/public_members{/member}",
                "repos_url": "https://api.github.com/orgs/checker-02/repos",
                "url": "https://api.github.com/orgs/checker-02"
            },
            "repository": {
                "allow_forking": true,
                "archive_url": "https://api.github.com/repos/checker-02/trial-gha/{archive_format}{/ref}",
                "archived": false,
                "assignees_url": "https://api.github.com/repos/checker-02/trial-gha/assignees{/user}",
                "blobs_url": "https://api.github.com/repos/checker-02/trial-gha/git/blobs{/sha}",
                "branches_url": "https://api.github.com/repos/checker-02/trial-gha/branches{/branch}",
                "clone_url": "https://github.com/checker-02/trial-gha.git",
                "collaborators_url": "https://api.github.com/repos/checker-02/trial-gha/collaborators{/collaborator}",
                "comments_url": "https://api.github.com/repos/checker-02/trial-gha/comments{/number}",
                "commits_url": "https://api.github.com/repos/checker-02/trial-gha/commits{/sha}",
                "compare_url": "https://api.github.com/repos/checker-02/trial-gha/compare/{base}...{head}",
                "contents_url": "https://api.github.com/repos/checker-02/trial-gha/contents/{+path}",
                "contributors_url": "https://api.github.com/repos/checker-02/trial-gha/contributors",
                "created_at": "2022-11-17T04:43:17Z",
                "default_branch": "main",
                "deployments_url": "https://api.github.com/repos/checker-02/trial-gha/deployments",
                "description": null,
                "disabled": false,
                "downloads_url": "https://api.github.com/repos/checker-02/trial-gha/downloads",
                "events_url": "https://api.github.com/repos/checker-02/trial-gha/events",
                "fork": false,
                "forks": 0,
                "forks_count": 0,
                "forks_url": "https://api.github.com/repos/checker-02/trial-gha/forks",
                "full_name": "checker-02/trial-gha",
                "git_commits_url": "https://api.github.com/repos/checker-02/trial-gha/git/commits{/sha}",
                "git_refs_url": "https://api.github.com/repos/checker-02/trial-gha/git/refs{/sha}",
                "git_tags_url": "https://api.github.com/repos/checker-02/trial-gha/git/tags{/sha}",
                "git_url": "git://github.com/checker-02/trial-gha.git",
                "has_discussions": false,
                "has_downloads": true,
                "has_issues": true,
                "has_pages": false,
                "has_projects": true,
                "has_wiki": true,
                "homepage": null,
                "hooks_url": "https://api.github.com/repos/checker-02/trial-gha/hooks",
                "html_url": "https://github.com/checker-02/trial-gha",
                "id": 567108657,
                "is_template": false,
                "issue_comment_url": "https://api.github.com/repos/checker-02/trial-gha/issues/comments{/number}",
                "issue_events_url": "https://api.github.com/repos/checker-02/trial-gha/issues/events{/number}",
                "issues_url": "https://api.github.com/repos/checker-02/trial-gha/issues{/number}",
                "keys_url": "https://api.github.com/repos/checker-02/trial-gha/keys{/key_id}",
                "labels_url": "https://api.github.com/repos/checker-02/trial-gha/labels{/name}",
                "language": "JavaScript",
                "languages_url": "https://api.github.com/repos/checker-02/trial-gha/languages",
                "license": null,
                "merges_url": "https://api.github.com/repos/checker-02/trial-gha/merges",
                "milestones_url": "https://api.github.com/repos/checker-02/trial-gha/milestones{/number}",
                "mirror_url": null,
                "name": "trial-gha",
                "node_id": "R_kgDOIc1kMQ",
                "notifications_url": "https://api.github.com/repos/checker-02/trial-gha/notifications{?since,all,participating}",
                "open_issues": 2,
                "open_issues_count": 2,
                "owner": {
                    "avatar_url": "https://avatars.githubusercontent.com/u/104818246?v=4",
                    "events_url": "https://api.github.com/users/checker-02/events{/privacy}",
                    "followers_url": "https://api.github.com/users/checker-02/followers",
                    "following_url": "https://api.github.com/users/checker-02/following{/other_user}",
                    "gists_url": "https://api.github.com/users/checker-02/gists{/gist_id}",
                    "gravatar_id": "",
                    "html_url": "https://github.com/checker-02",
                    "id": 104818246,
                    "login": "checker-02",
                    "node_id": "O_kgDOBj9mRg",
                    "organizations_url": "https://api.github.com/users/checker-02/orgs",
                    "received_events_url": "https://api.github.com/users/checker-02/received_events",
                    "repos_url": "https://api.github.com/users/checker-02/repos",
                    "site_admin": false,
                    "starred_url": "https://api.github.com/users/checker-02/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/checker-02/subscriptions",
                    "type": "Organization",
                    "url": "https://api.github.com/users/checker-02"
                },
                "private": false,
                "pulls_url": "https://api.github.com/repos/checker-02/trial-gha/pulls{/number}",
                "pushed_at": "2022-11-28T14:23:51Z",
                "releases_url": "https://api.github.com/repos/checker-02/trial-gha/releases{/id}",
                "size": 141,
                "ssh_url": "git@github.com:checker-02/trial-gha.git",
                "stargazers_count": 0,
                "stargazers_url": "https://api.github.com/repos/checker-02/trial-gha/stargazers",
                "statuses_url": "https://api.github.com/repos/checker-02/trial-gha/statuses/{sha}",
                "subscribers_url": "https://api.github.com/repos/checker-02/trial-gha/subscribers",
                "subscription_url": "https://api.github.com/repos/checker-02/trial-gha/subscription",
                "svn_url": "https://github.com/checker-02/trial-gha",
                "tags_url": "https://api.github.com/repos/checker-02/trial-gha/tags",
                "teams_url": "https://api.github.com/repos/checker-02/trial-gha/teams",
                "topics": [],
                "trees_url": "https://api.github.com/repos/checker-02/trial-gha/git/trees{/sha}",
                "updated_at": "2022-11-28T06:00:21Z",
                "url": "https://api.github.com/repos/checker-02/trial-gha",
                "visibility": "public",
                "watchers": 0,
                "watchers_count": 0,
                "web_commit_signoff_required": false
            },
            "sender": {
                "avatar_url": "https://avatars.githubusercontent.com/u/58053679?v=4",
                "events_url": "https://api.github.com/users/surya-de/events{/privacy}",
                "followers_url": "https://api.github.com/users/surya-de/followers",
                "following_url": "https://api.github.com/users/surya-de/following{/other_user}",
                "gists_url": "https://api.github.com/users/surya-de/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/surya-de",
                "id": 58053679,
                "login": "surya-de",
                "node_id": "MDQ6VXNlcjU4MDUzNjc5",
                "organizations_url": "https://api.github.com/users/surya-de/orgs",
                "received_events_url": "https://api.github.com/users/surya-de/received_events",
                "repos_url": "https://api.github.com/users/surya-de/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/surya-de/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/surya-de/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/surya-de"
            }
        }*/
        // Get git hub payload from ticket.
        const payload = getPayload();
        console.log(`The event payload: ${payload}`);
        // Parse body to get config file link.
        const link = getConfiglink(payload.issue.body);
        const download_link = generateDownloadablelink(link);
        // Trigger API for download.
        const resp = await makeRequest(download_link);
        const final_link = getFilelink(resp);
        console.log(final_link);
        //const api_payload = await makeRequest(final_link);
        //console.log(api_payload);
    } catch (error) {
        core.setFailed(error.message);
    } finally {
        console.log("Task Completed");
    }
}

function getPayload() {
    //return JSON.stringify(github.context.payload, undefined, 2);
    return github.context.payload;
}

function getConfiglink(body) {
    let link = '';
    var start_idx = body.indexOf('[Files]');
    var end_idx = body.indexOf(')');

    console.log('start' + start_idx);
    console.log('end' + end_idx);

    for (let i = start_idx + 8; i < end_idx; i++) {
        link += body[i];
    }
    console.log(link);

    return link;
}

function generateDownloadablelink(link) {
    console.log(`Generate downloadable link from config link from: ${link}`);
    const host = 'https://api.github.com/repos/';
    const org = 'checker-02';
    const repo = 'cofig-repo';
    const split_arr = link.split('/');
    const branch = split_arr[split_arr.length - 3];
    const folder = split_arr[split_arr.length - 2];
    const key = split_arr[split_arr.length - 1];

    const temp_link = host + org + '/' + repo + '/contents/' + folder + '/' + key + '?ref=' + branch;

    console.log(temp_link);

    return temp_link;

}

function getFilelink(resp) {
    console.log(resp.download_url);
    return resp.download_url;
}

async function makeRequest(link) {
    var config = {
        method: 'get',
        url: link,
        headers: { 
          'Authorization': `Basic ${process.env.GITHUB_TOKEN}`, 
          //'Authorization': 'Basic c3VyeWEtZGU6Z2hwX2s4bllYSWNyYnBkbFRkRnI0Q2Y3d2xjaGxqMVF2czRkdUMyYg==',
          'Cookie': '_octo=GH1.1.919301032.1669750838; logged_in=no'
        }
      };
    try {
        const resp = await axios(config);
        let y = await resp.data;
        return y;
    }
    catch(error) {
        console.log(error);
    }
    
}
  

console.log("GHA triggered!");
run();