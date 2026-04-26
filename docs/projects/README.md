# Community Projects

## Background and Selection

As a group, some of us believe that our group has the potential to do some real good for our community.
As a first pass at putting some effort into that, I asked the group for their ideas of potential projects to put our efforts to. 

At the April 2026 meetup (4/14/26), we discussed ~10 potential projects. 
The pitches were all pretty short (aside from some discussion), but they are all open to more research, planning, and discussion. 
My hope is to select 2-3 projects that people are most interested in using Ranked-Choice Voting (RCV)[^1], and then set up some 
project management tool[^2] to help us organize work around those efforts. 

Please note that your selection of these is not a commitment in any sense.
This is solely just to gauge where interests and skills are at so our collective
force can focus and do the most good.

## Project Proposals
These are in a random order to avoid bias during reading and selection.
When voting (look out for that e-mail), please pay attention specifically to the project names!
They will be randomized there, as well.


<div id="section-list"></div>

<script>
  const sections = [
    {
      title: "Start a Hack Club",
      description: "This is a community thing for the people who are in high school in the area that are interested in computer science.",
      url: "https://hackclub.com"
    },
    {
      title: "Defcon Cell",
      description: "Have not really looked into this one but it maybe a long term project would need to have a stated mission.",
      url: "https://defcon.org/index.html"
    },
    {
      title: "Meshtastic Network",
      description: "This is one that could have an impact for the people in the community a lot more the idea is to have a connected network for the community incase there is a disaster. If there is a way to connect it to the existing telecom networks to provide cheaper internet it may be a cool idea but not feasible.",
      url: "https://meshtastic.org/"
    },
    {
      title: "Food Waste Compost",
      description: "This is where we take all of the food waste that is inedible (not the left overs) and make compost for farmers."
    }, 
    {
        title: "Re-Connect",
        description: "This effort is through Starkville Strong and is about refurbishing donated computers (desktops and laptops) and getting them to local community members that need and can use them. While there are multiple facets to this effort, it relates to our group via the repair/refurbishing and computer training. However, the current bottleneck right now is actually identifying candidates for the computers.",
        url: "https://drive.google.com/file/d/1uX-_8TS5X1OVsrvlEElx3sGwbjfV2tI4/view"
    }, 
    {
      title: "Graph-based Knowledge Center for Community",
      description: "This project would build a centralized site that community members could retrieve mostly static information, such as what organizations provide what kinds of community services, contact information of people that can get them help, and other potentially important knowledge.",
      url: "http://github.com/oleeskild/obsidian-digital-garden"
    },
    {
      title: "AI Literacy Classes",
      description: 'Sometimes "AI-literacy" means "using AI to get things done", but here it is meant more as "being aware of how misinformation and scammers are being amplified by using AI". So, basically a media literacy course but with the knowledge that AI-based tooling exists. If we found a good curriculumn, we could host useful classes/workshops at various places in town/the community.',
      url: "https://www.gse.harvard.edu/ideas/education-now/24/04/media-literacy-education-and-ai"
    },
    {
      title: "Community Cloud",
      description: 'A set of shared computer infrastructure and hosted services to provide value to the community. There are a lot of potential questions, mainly to do with what would be hosted, who would own what, who would be responsible for upkeep, etc.  After some preliminary research, I realize my vision is different from what a lot of the tech space calls "community cloud", so I\'m not exactly sure how to describe it...',
      url: "https://en.wikipedia.org/wiki/Community_cloud"
    },
    {
      title: "Technology and Communication Group for Better Together",
      description: 'The link is to the Starkville Strong Facebook Page, but "Better Together" is it\'s own thing: an organization of other local organizations all working towards bettering the community in some way. They have been formalizing over the last several months, and soon they will be forming teams to tackle certain problems. One of these teams is the "Technology and Communication Group", which I felt our group is uniquely suited to help out in!',
      url: "https://www.facebook.com/starkvillestrong"
    },
    // {
    //   title: "Food Logistics for Unlimited Community Agricultural Cooperative (UCAC)",
    //   description: "Placeholder text"
    //   url: "https://www.theucac.com/about" 
    // }
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
  // console.log(shuffledIndices);
  // console.log(shuffledSections);

  const container = document.getElementById("section-list");

  container.innerHTML = shuffledSections.map(({ title, description, url }) => `
    <div class="section-card">
    <h4>${url ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>` : title}</h4>
      <p>${description}</p>
    </div>
  `).join("");
</script>



[^1]: See [here](https://www.rcvresources.org/how-rcv-works) for more info on RCV.

[^2]: I am wholy unsure what tool we should use here. Ultimately, the choice of tooling will likely be left up to the people working on the actual project, but I am hoping to eventually come to some consitent method for future ease of onboarding and transparency. 
As to centralized tools, I have personal experience with [Jira](https://www.atlassian.com/software/jira), [Confluence](https://www.atlassian.com/software/confluence), and (to a limited extent) [Trello](https://trello.com/). All are Atlassian products, none of which I am personally interested in using... (unless someone makes a good case 🤷). 
I am currently considering [Vikunja](https://vikunja.io/), [OpenProject](https://www.openproject.org/), and a GitHub-based shared Obsidian vault (such as [this one](https://dev.to/padiazg/how-to-sync-your-obsidian-vault-using-github-a-complete-guide-2l08)). The Obsidian one is my favorite one, but I am not sure we want to make everyone learn GitHub if they aren't already software developers or planning to become software developers... However, there may be a way to automate the pull/push flow, but I haven't investigated very much yet.
