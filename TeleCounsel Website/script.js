function openProfileModal() {
  document.getElementById('profileModal').style.display = 'block';
}

function closeProfileModal() {
  document.getElementById('profileModal').style.display = 'none';
}

function editProfile() {
  alert("Editing profile functionality will be here.");
}

function logout() {
  alert("You have been logged out.");
  // Optionally redirect to login page:
  // window.location.href = "login.html";
}

//hero
  const images = [
    "therapist/1therapist.png",
    "therapist/3therapist.png",
    "therapist/5therapist.png",
    "therapist/7therapist.png",
    "therapist/8therapist.png"
  ];
  let current = 0;

  setInterval(() => {
    current = (current + 1) % images.length;
    document.getElementById("therapistPic").src = images[current];
  }, 5000);

// therapists 
const therapists = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "Clinical Psychologist",
    expertise: "Specializes in anxiety & depression",
    profile: "therapist/1therapist.png",
    verified: "therapist/verified.png"
  },
  {
    name: "Dr. Michael Lee",
    specialization: "Psychiatrist",
    expertise: "Child and adolescent mental health",
    profile: "therapist/2therapist.png",
    verified: "therapist/verified.png"
  },
  {
    name: "Dr. Aisha Rahman",
    specialization: "Marriage & Family Therapist",
    expertise: "Relationship counseling and family therapy",
    profile: "therapist/3therapist.png",
    verified: "therapist/verified.png"
  },
  {
    name: "Dr. Rajiv Mehta",
    specialization: "Clinical Psychologist",
    expertise: "PTSD and trauma recovery",
    profile: "therapist/4therapist.png",
    verified: "therapist/verified.png"
  },
  {
    name: "Dr. Emily Carter",
    specialization: "Licensed Professional Counselor",
    expertise: "Grief counseling and emotional wellness",
    profile: "therapist/5therapist.png",
    verified: "therapist/verified.png"
  },
  {
    name: "Dr. Naomi Choudhury",
    specialization: "Behavioral Therapist",
    expertise: "Autism spectrum and behavioral issues",
    profile: "therapist/6therapist.png",
    verified: "therapist/verified.png"
  },
  {
    name: "Dr. James Patel",
    specialization: "Addiction Counselor",
    expertise: "Substance abuse recovery and relapse prevention",
    profile: "therapist/7therapist.png",
    verified: "therapist/verified.png"
  },
  {
    name: "Dr. Lisa Morgan",
    specialization: "Mental Health Nurse Practitioner",
    expertise: "Medication management and mood disorders",
    profile: "therapist/8therapist.png",
    verified: "therapist/verified.png"
  }
];

const container = document.getElementById('therapist-container');

therapists.forEach((t, index) => {
  const card = document.createElement('div');
  card.className = 'therapist-card';

  card.innerHTML = `
    <div class="card-content">
      <img class="profile-pic" src="${t.profile}" alt="${t.name}" />
      <div class="details">
        <h3>
          ${t.name}
          <img class="verified-badge" src="${t.verified}" alt="Verified" />
        </h3>
        <p>${t.specialization}<br />${t.expertise}</p>

        <div class="star-rating" data-index="${index}">
          ${[1, 2, 3, 4, 5].map(i => `<span onclick="rate(${index}, ${i})">★</span>`).join('')}
        </div>

        <button class="call-btn">Call</button>
        <button class="book" onclick="toggleCalendar(this)">Book</button>
        <div class="calendar-popup">
          <input type="date" />
          <button onclick="closeCalendar(this)">Confirm</button>
        </div>
      </div>
    </div>
  `;
  container.appendChild(card);
});

// Sidebar toggle
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

// Placeholder functions
function goToProfile() {
  alert("Navigating to Profile...");
}

function startAnonymousChat() {
  alert("Starting anonymous chat...");
}

function openBooking() {
  alert("Redirecting to booking page...");
}

function triggerEmergency() {
  alert("Emergency support triggered!");
}

// Star rating
function rate(index, rating) {
  const stars = document.querySelectorAll(`.star-rating[data-index="${index}"] span`);
  stars.forEach((star, i) => {
    star.classList.toggle("active", i < rating);
  });
}

// Booking calendar
function toggleCalendar(button) {
  const popup = button.nextElementSibling;
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function closeCalendar(button) {
  const popup = button.parentElement;
  popup.style.display = "none";
  alert("Session booked successfully!");
}

// ai button

function toggleChatbot() {
  const chatbot = document.getElementById('chatbotWindow');

  if (chatbot.classList.contains('active')) {
    chatbot.classList.remove('active');
  } else {
    chatbot.classList.add('active');
  }
}

document.getElementById('chatbotToggleBtn').addEventListener('click', toggleChatbot);

function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  const body = document.getElementById('chatbotBody');

  if (message !== '') {
    const userMessage = document.createElement('p');
    userMessage.innerHTML = `<strong>You:</strong> ${message}`;
    body.appendChild(userMessage);

    // Simple bot reply
    const botReply = document.createElement('p');
    botReply.innerHTML = `<strong>MindSpace AI:</strong> I'm here to help. Let's talk.`;
    body.appendChild(botReply);

    input.value = '';
    body.scrollTop = body.scrollHeight;
  }
}

