# Community Projects

### Background and Selection

As a group, some of us believe that our group has the potential to do some real good for our community.
As a first pass at putting some effort into that, I asked the group for their ideas of potential projects to put our efforts to. 

At the April 2026 meetup (4/14/26), we discussed ~10 potential projects. 
The pitches were all pretty short (aside from some discussion), but they are all open to more research, planning, and discussion. 
My hope is to select 2-3 projects that people are most interested in using Ranked-Choice Voting (RCV)[^1], and then set up some 
project management tool[^2] to help us organize work around those efforts. 

### Project Proposals
These are in a random order to avoid bias during reading and selection.


<div id="section-list"></div>

<script>
  const sections = [
    {
      title: "Getting Started",
      description: "Install the tool and run your first command in under five minutes."
    },
    {
      title: "Configuration",
      description: "Customise behaviour via a single YAML file in your project root."
    },
    {
      title: "API Reference",
      description: "Full list of endpoints, parameters, and response shapes."
    }
  ];


    function fisherYatesShuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }


const indices = [...Array(sections.length).keys()];
const shuffledIndices = fisherYatesShuffle([...indices]);
shuffledSections = shuffledIndices.map(index => sections[index]);
console.log(shuffledIndices);
console.log(shuffledSections);


  document.getElementById("section-list").innerHTML = shuffledSections
    .map(({ title, description }) => `
      <div class="section-card">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    `)
    .join("");
</script>



[^1]: See [here](https://www.rcvresources.org/how-rcv-works) for more info on RCV.

[^2]: I am wholy unsure what tool we should use here. Ultimately, the choice of tooling will likely be left up to the people working on the actual project, but I am hoping to eventually come to some consitent method for future ease of onboarding and transparency. 
As to centralized tools, I have personal experience with [Jira](https://www.atlassian.com/software/jira), [Confluence](https://www.atlassian.com/software/confluence), and (to a limited extent) [Trello](https://trello.com/). All are Atlassian products, none of which I am personally interested in using... (unless someone makes a good case 🤷). 
I am currently considering [Vikunja](https://vikunja.io/), [OpenProject](https://www.openproject.org/), and a GitHub-based shared Obsidian vault (such as [this one](https://dev.to/padiazg/how-to-sync-your-obsidian-vault-using-github-a-complete-guide-2l08)). The Obsidian one is my favorite one, but I am not sure we want to make everyone learn GitHub if they aren't already software developers or planning to become software developers... However, there may be a way to automate the pull/push flow, but I haven't investigated very much yet.
