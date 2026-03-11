const appointments = [];

function bookAppointment() {
    const name = document.getElementById('name').value.trim();
    const date = document.getElementById('date').value;
    const timeSlot = document.getElementById('timeSlot').value;

    if (!name || !date || !timeSlot) {
        alert('please fill all the fields');
        return;
    }

    let venue;
    let timeDisplay;
    
    switch(timeSlot) {
        case 'slot1':
            venue = 'Block A';
            timeDisplay = '10:00 AM';
            break;
        case 'slot2':
            venue = 'Block B';
            timeDisplay = '11:00 AM';
            break;
        case 'slot3':
            venue = 'Block C';
            timeDisplay = '12:00 PM';
            break;
    }

    appointments.push({
        name: name,
        date: date,
        timeSlot: timeSlot,
        timeDisplay: timeDisplay,
        venue: venue
    });

    updateTable();
    clearForm();
}

function updateTable() {
    const tbody = document.getElementById('appointmentsBody');
    tbody.innerHTML = '';

    if (appointments.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="empty-state">No appointments booked yet</td></tr>';
        return;
    }

    appointments.forEach(appointment => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${appointment.name}</td>
            <td>${appointment.date}</td>
            <td>${appointment.timeSlot}</td>
            <td>${appointment.venue}</td>
        `;
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('timeSlot').value = '';
}
