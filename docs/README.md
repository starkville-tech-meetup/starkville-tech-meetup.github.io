
#### Current number RSVP'd for the May 15<sup>th</sup> meetup:
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
const API_URL = "https://script.google.com/macros/s/AKfycbzQi4hIPcSYhAg3gS1ro9pLCb3XEZPIRPTme456au4JjkzHFFXFsENk1SBPXY86z-U4/exec";

fetch(API_URL, 
  // {
  //     redirect: "follow",
  //     method: "POST",
  //     // body: JSON.stringify(DATA),
  //     headers: {
  //       "Content-Type": "text/plain;charset=utf-8",
  //     }
  // }
  )
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



## "May"-king connections before the Starkville Summer Slump!

Personally, I typically am more likely to do things with people if I have scheduled them in advance. 
So, if you feel similarly and want to hang out with people over the summer, make plans 


I want to invite you to the May 2026 Tech Connect GTR meetup on Friday 5/15 at 6:30pm! 

Please see the RSVP form at the bottom of this page if you are interested in coming to this event or just interested in general!

Note that [MSU's 2026 Spring Commencements](https://www.registrar.msstate.edu/calendars/academic-calendar/2026/spring) will be held this day, but they should be long over before we start.


### Time and Place

Date and Time: **5/15 at 6:30pm**

<link rel="stylesheet" href="styles/buttons.css">
<a href="https://calendar.online/event/page/72770a0a98fd2e51e5719bc0b40997b3157895d07d7641ccab" target="_blank">
<button id="myButton">Add event to your device</button>
</a>

The meetups take place at [the Hub](https://coworkmsu.com/) ([301 E Main St., Starkville, MS](https://www.google.com/maps/place/The+Hub/@33.4640187,-88.8137437,19.83z/data=!4m6!3m5!1s0x88813510f01510dd:0x454a02eaf7bde9c7!8m2!3d33.4643121!4d-88.8137627!16s%2Fg%2F11y4364z1j?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D)).  
Note that parking is in the back of the building (2nd floor), but the doors are locked after hours. We hope to have a door greeter at the second floor entrance from ~6:30-6:45pm, but you will need to come around the building to the first floor if you arrive after that point.

### Further Reading

See this [provided agenda](agenda_next.md) for the upcoming meeting.

For some tips on getting the most out of tech meetups, see the [resources page](resources.md).  
TL;DR? Here's a 
<a href="presentations\quarto\what-to-expect-at-a-tech-meetup\what-to-expect-at-a-tech-meetup.html" target="_blank">
brief presentation
</a> 
on the same topic.

You can also see the slides for other past presentations [here](presentations.md).

## Social Media
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

<br>

<style>
#facebook-button {
  padding: 5px;
  background-color: #c8d8f8;
  border: 4px solid #0062fc;
  border-radius: 10px;
}

#facebook-button:hover {
  transition-duration: 0.4s;
  background-color: #0a1a3a;
}
</style>


<a href="https://www.facebook.com/groups/techconnect.gtr.ms">
  <img
    id="facebook-button"
    src="images/Facebook_logo_(2023).svg"
    width="200"
  />
</a>



## RSVP Form
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfuJq4Kg3P-EjWJdx8IU62IbaPHaKjTJz0R47hZ2NUA4Ih2Bg/viewform?embedded=true" width="640" height="993" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>