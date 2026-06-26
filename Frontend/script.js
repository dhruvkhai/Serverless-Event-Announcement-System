const subscribeApi =
    "https://uhap2l6uw8.execute-api.us-east-1.amazonaws.com/subscribe";

const createApi =
    "https://uhap2l6uw8.execute-api.us-east-1.amazonaws.com/create-event";

fetch("events.json")
    .then(response => response.json())
    .then(events => {

        let html = "";

        events.forEach(event => {

            html += `
        <div class="card">
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
        </div>
        `;
        });

        document.getElementById("events").innerHTML = html;
    });

async function subscribe() {

    const email =
        document.getElementById("email").value;

    const response = await fetch(subscribeApi, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email
        })
    });

    const data = await response.json();

    alert(data.message);
}

async function createNewEvent() {

    const title =
        document.getElementById("title").value;

    const date =
        document.getElementById("date").value;

    const location =
        document.getElementById("location").value;

    const response = await fetch(createApi, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title,
            date,
            location
        })
    });

    const data = await response.json();

    alert(data.message);
}