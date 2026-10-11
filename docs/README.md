
#### Current number RSVP'd for the September 18<sup>th</sup> meetup:
<div id="rsvp-count">
  <div class="loading-spinner"></div>
  <p></p>
</div>

Want to see this number go up? Fill out the RSVP at the bottom of this page! 

###### Potluck items:
<div id="potluck-list"></div>


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

.potluck-card {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.75rem;
  break-inside: avoid; /* keeps a card from splitting across columns */
}

</style>

<script>
const API_URL = "https://script.google.com/macros/s/AKfycbyOTrfxxIxZyQoLz7nOQU7I7ZldyMysJuy0h83bt8ZLvu8kCj7c0mz97lJV0yy94Mvp/exec";

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

    const potluck_items = data["potluck"].split(",").map(s => s.trim()).filter(Boolean);

    const potluck_container = document.getElementById("potluck-list");
    const MIN_COL_WIDTH = 160; // px, the narrowest a column is allowed to get

    function render() {
      const cols = Math.max(1, Math.floor(potluck_container.clientWidth / MIN_COL_WIDTH));
      potluck_container.style.columnCount = cols;
      potluck_container.style.columnGap = "1.5rem";
    }

    potluck_items.forEach(i => {
      const card = document.createElement("div");
      card.className = "potluck-card";
      card.textContent = i;
      potluck_container.appendChild(card);
    });

    render();
    new ResizeObserver(render).observe(potluck_container);

  })
  .catch(err => {
    console.error("Error fetching sheet data:", err);
    const countDiv = document.querySelector("#sheet-data div");
    countDiv.innerHTML = `Failed to load data; email me at <a href="mailto:techconnect.gtr.ms@gmail.com" target="_blank">techconnect.gtr.ms@gmail.com</a>`;
  });
</script> 
  

## Welcome to the Tech Connect GTR homepage!

We are a group of local (GTR) techies, techos, and tech-interested people that meet once a month to discuss tech (amongst a variety of other topics).

If that kind of event interests you, read on!


## September: [ Do you remember?](https://youtu.be/_zzEDrYTkkg)

Lots of stuff is happening, everywhere, all the time.  
Want to talk about it?


Sometimes, we talk about the weather, sometimes cars, sometimes AI, and sometimes public policy (though trying to stay local). 
Ultimately, we speak from similar expertise perspectives, while still being able to learn from each other. 

If interested, you can join us at the September 2026 Tech Connect GTR meetup! 


### Time and Place

Date and Time: **9/18 @ 6:30pm**

<!-- <link rel="stylesheet" href="styles/buttons.css">
<a href="https://calendar.online/event/page/8af72a330aa69f6ac22277a819baeab585ef06f48aae3223be" target="_blank">
<button id="myButton">Add event to your device</button>
</a> -->

The meetups take place at [the Hub](https://coworkmsu.com/) ([301 E Main St., Starkville, MS](https://www.google.com/maps/place/The+Hub/@33.4640187,-88.8137437,19.83z/data=!4m6!3m5!1s0x88813510f01510dd:0x454a02eaf7bde9c7!8m2!3d33.4643121!4d-88.8137627!16s%2Fg%2F11y4364z1j?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D)).  
<details>
<summary>Parking details </summary>
Note that parking is in the back of the building (2nd floor), but the doors are locked after hours. We hope to have a door greeter at the second floor entrance from ~6:30-6:45pm, but you will need to come around the building to the first floor if you arrive after that point.
</details>

> Be advised that construction is still going on at this location, so you may be forced to enter the rear parking lot from the rear/east entrance. 


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
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdfG3-Tj5zvUf28gyw25kZePy9fHzoZPjAZrgcg69epIeDQ_Q/viewform?embedded=true" width="640" height="995" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>