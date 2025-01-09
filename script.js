const matchDays = {
  3: { team: 'Team A', logo: 'Real_Madrid_CF.svg' },
  7: { team: 'Team B', logo: 'Real_Madrid_CF.svg' },
  15: { team: 'Team C', logo: 'Real_Madrid_CF.svg' },
  20: { team: 'Team D', logo: 'Real_Madrid_CF.svg' },
  28: { team: 'Team E', logo: 'Real_Madrid_CF.svg' },
};

function generateCalendar(year, month) {
  const calendar = document.getElementById('calendar');
  calendar.innerHTML = ''; // Clear previous content

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const isCurrentMonth =
    today.getFullYear() === year && today.getMonth() === month;

  // Empty slots for days before the 1st
  for (let i = 0; i < firstDay - 1; i++) {
    const emptySlot = document.createElement('div');
    emptySlot.className = 'day';
    calendar.appendChild(emptySlot);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement('div');
    const currentDate = new Date(year, month, day);
    const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
    dayDiv.className = 'day';

    if (isWeekend) {
      dayDiv.classList.add('weekend');
    }

    if (isCurrentMonth && day === today.getDate()) {
      dayDiv.classList.add('today');
    }

    dayDiv.textContent = day;

    // Add match info if it's a match day
    if (matchDays[day]) {
      const img = document.createElement('img');
      img.src = matchDays[day].logo;
      img.alt = matchDays[day].team;
      dayDiv.appendChild(img);
    }

    calendar.appendChild(dayDiv);
  }

  for (let index = calendar.childElementCount; index < 35; index++) {
    const emptySlot = document.createElement('div');
    emptySlot.className = 'day';
    calendar.appendChild(emptySlot);
  }
}

const now = new Date(); // Создаем объект с текущей датой и временем
const currentYear = now.getFullYear(); // Получаем текущий год
const currentMonth = now.getMonth(); // Получаем текущий месяц

generateCalendar(currentYear, currentMonth);
