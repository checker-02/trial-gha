const core = require('@actions/core');
const github = require('@actions/github');
const request = require('request');
const process = require('process');
var axios = require('axios');
const util = require('util');
const { Console } = require('console');



module.exports = run;

async function run() {
    console.log("Identifying new issue in leaks repositoy");
    console.log(process.env.GITHUB_TOKEN)

    try {
        // Get git hub payload from ticket.
        const payload = getPayload();
        console.log('The event payload:', payload);
        // Parse body to get config file link.
        const link = getConfiglink(payload.issue.body);

        const download_link = generateDownloadablelink(link);
        // Trigger API for download.
        const resp = await makeRequest(download_link);
        const final_link = getFilelink(resp);
        console.log(final_link);
        const api_payload = await makeRequest(final_link);
        console.log(api_payload);

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
    const split_arr = link.split('/');
    //https://github.com/checker-02/cofig-repo/tree/main/leak-one
    const org = split_arr[split_arr.length - 5];
    const repo = split_arr[split_arr.length - 4];
    const branch = split_arr[split_arr.length - 2];
    const folder = split_arr[split_arr.length - 1];
    
    const key = 'config.json';      //leak_config.json

    const temp_link = host + org + '/' + repo + '/contents/' + folder + '/' + key + '?ref=' + branch;

    console.log(temp_link);

    return temp_link;

}

function getFilelink(resp) {
    console.log('File download url', resp);
    return resp.download_url;
}

async function makeRequest(link) {
    const requestPromise = util.promisify(request);
    var config = {
        method: 'get',
        url: link,
        headers: { 
          'Authorization': `Basic ${process.env.GITHUB_TOKEN}`, 
          'user-agent': 'node.js',
          'Cookie': '_octo=GH1.1.919301032.1669750838; logged_in=no'
        }
      };
      
      const response = await requestPromise(config);
      console.log(response.body);

      return JSON.parse(response.body);

}
  

console.log("GHA triggered!");
run();