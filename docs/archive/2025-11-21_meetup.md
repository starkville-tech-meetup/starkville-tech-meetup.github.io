#### Current number RSVP'd for the 11/21 meetup:
<div id="rsvp-count">
  <div class="loading-spinner"></div>
  <!-- <p></p> -->
</div>

<style>
.loading-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<script>
const API_URL = "https://script.google.com/macros/s/AKfycbyrvYw4Sdk-gxJjMkvdlxEaCGlSgE2t_VMGIl3x6tM4LIvz4dNp4UV6KDeO5xTTFe4u/exec";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    console.log(`data = ${JSON.stringify(data)}`);
    const countDiv = document.querySelector("#rsvp-count");
    countDiv.innerHTML = `<p style="font-size: 50px; text-align:center; margin: 0;">${data["count"]}</p>`;
  })
  .catch(err => {
    console.error("Error fetching sheet data:", err);
    const countDiv = document.querySelector("#sheet-data div");
    countDiv.innerHTML = `Failed to load data; email me at <a href="mailto:techconnect.gtr.ms@gmail.com" target="_blank">techconnect.gtr.ms@gmail.com</a>`;
  });
</script> 
  
Want to see this number go up? Fill out the RSVP at the bottom of this page!


### Ready to meet and talk with other tech folks?

We have been hosting a tech-focused meetup in Starkville! 💻️  
The first three were on:
- [6/20/2025](archive/first_meetup.md),
- [7/18/2025](archive/2025-07-18_meetup.md),
- [8/22/2025](archive/2025-08-22_meetup.md),
- [9/19/2025](archive/2025-09-19_meetup.md), and
- [10/17/2025](archive/2025-10-17_meetup.md).

Please see the RSVP form at the bottom of this page if you are interested in coming to this event or just interested in general!

### Time and Place
The current plan for the November meeting is to start around **6pm Friday the 21st**.  

<link rel="stylesheet" href="styles/buttons.css">
<a href="https://calendar.online/event/page/0863cebd78ea8fddaaf11842bd18b832767322dc54a0916230" target="_blank">
<button id="myButton">Add event to your device</button>
</a>

For the foreseeable future, the meetups will take place at [the Hub](https://coworkmsu.com/) ([301 E Main St., Starkville, MS](https://www.google.com/maps/place/The+Hub/@33.4640187,-88.8137437,19.83z/data=!4m6!3m5!1s0x88813510f01510dd:0x454a02eaf7bde9c7!8m2!3d33.4643121!4d-88.8137627!16s%2Fg%2F11y4364z1j?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D)).  
Note that parking is in the back of the building (2nd floor), but the doors are locked after hours. We hope to have a door greeter at the second floor entrance from ~6:00-6:10pm, but you will need to come around the building to the first floor if you arrive after that point.

### Presentations

Last time, we were able to line up two presentations.
This time, I think we can do the same!  
Remember, they are pretty brief; you may think 10 minutes is a lot of time, but when you're talking about something you care about, it can be gone in an instant...

If you are interested in presenting on something, [let me know](contact.md)!


### Further Reading

See this [provided agenda](agenda_next.md) for the upcoming meeting.

For some tips on getting the most out of tech meetups, see the [resources page](resources.md).  
TL;DR? Here's a 
<a href="presentations\quarto\what-to-expect-at-a-tech-meetup\what-to-expect-at-a-tech-meetup.html" target="_blank">
brief presentation
</a> 
on the same topic.

You can also see the slides for other past presentations [here](presentations.md).

### Social Media
<style>
#discord-button {
        padding: 5px;
        background-color: #bfcde0;
  border: 2px solid #5865f2;
  border-radius: 5px;
}
#discord-button:hover {
  transition-duration: 0.4s;
  background-color:rgb(130, 169, 223);
  /* color: #brown; */
}

</style>

<a href="https://discord.gg/mQwu7K9dnG">
<img id="discord-button" src="images/Discord-Logo-Blurple.svg" width="100"> </img>
</a>

### RSVP Form
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf5uCwKnYGfWRWRgsYz7kMsH3o6RvY0NQWiSTJWQan5RlamLw/viewform?embedded=true" width="640" height="995" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>