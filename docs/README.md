#### Current number RSVP'd for the 2/20 meetup:
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
const API_URL = "https://script.google.com/macros/s/AKfycbxjGSpimaBEh0Q7D6oWN__9pZW91fRO1mq_QtGBmrq8SzakcuLa4VrLD7trPpwsW0mAxg/exec";

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


### New Year, New Connections!

I want to invite you to the February 2026 Tech Connect GTR meetup! 

Please see the RSVP form at the bottom of this page if you are interested in coming to this event or just interested in general!

### Time and Place
Date and Time: **6pm Friday the 20th**

<link rel="stylesheet" href="styles/buttons.css">
<a href="https://calendar.online/event/page/4f5dc944513fe7cd9e1c3c39501c3d82809aad603426fe05b2" target="_blank">
<button id="myButton">Add event to your device</button>
</a>

The meetups take place at [the Hub](https://coworkmsu.com/) ([301 E Main St., Starkville, MS](https://www.google.com/maps/place/The+Hub/@33.4640187,-88.8137437,19.83z/data=!4m6!3m5!1s0x88813510f01510dd:0x454a02eaf7bde9c7!8m2!3d33.4643121!4d-88.8137627!16s%2Fg%2F11y4364z1j?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D)).  
Note that parking is in the back of the building (2nd floor), but the doors are locked after hours. We hope to have a door greeter at the second floor entrance from ~6:00-6:10pm, but you will need to come around the building to the first floor if you arrive after that point.

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
  border: 4px solid #5865f2;
  border-radius: 10px;
}
#discord-button:hover {
  transition-duration: 0.4s;
  background-color:rgb(15, 26, 41);
  /* color: #brown; */
}

</style>

<a href="https://discord.gg/mQwu7K9dnG">
<img id="discord-button" src="images/Discord-Logo-Blurple.svg" width="200"> </img>
</a>

### RSVP Form
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfjqyru-XHcTXTe_kT9P002Oiboy69egAtsYblh8u4aIPMiLA/viewform?embedded=true" width="640" height="990" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
