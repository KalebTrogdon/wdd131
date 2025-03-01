document.addEventListener("DOMContentLoaded", function() {
    let participantCount = 1;
    
    const addBtn = document.getElementById("add-participant");
    addBtn.addEventListener("click", function(event) {
      event.preventDefault();
      participantCount++;
      const newParticipantHTML = participantTemplate(participantCount);
      addBtn.insertAdjacentHTML("beforebegin", newParticipantHTML);
    });
    

    const form = document.getElementById("registration-form");
    form.addEventListener("submit", submitForm);
  });
  

  function participantTemplate(count) {
    return `
    <section class="participant${count}">
      <h3>Participant ${count}</h3>
      <label for="fname${count}">First Name:</label>
      <input type="text" id="fname${count}" name="fname${count}" required>
      
      <label for="lname${count}">Last Name:</label>
      <input type="text" id="lname${count}" name="lname${count}" required>
      
      <label for="fee${count}">Fee:</label>
      <input type="number" id="fee${count}" name="fee${count}" required>
    </section>
    `;
  }
  
  function totalFees() {

    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, feeInput) => {
      const fee = parseFloat(feeInput.value) || 0;
      return sum + fee;
    }, 0);
    return total;
  }
  
  function successTemplate(info) {
    return `<p>Thank you ${info.adultName} for registering. You have registered ${info.participantCount} participant${info.participantCount > 1 ? "s" : ""} and owe $${info.totalFees} in Fees.</p>`;
  }

  function submitForm(event) {
    event.preventDefault();

    const total = totalFees();
    const adultName = document.getElementById("adultName").value;
    const participantCount = document.querySelectorAll("[id^=fname]").length;
    
    const info = {
      adultName: adultName,
      participantCount: participantCount,
      totalFees: total
    };
    
    document.getElementById("registration-form").style.display = "none";
    
    const summaryElement = document.getElementById("summary");
    summaryElement.innerHTML = successTemplate(info);
    summaryElement.style.display = "block";
  }
  