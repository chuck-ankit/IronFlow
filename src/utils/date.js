export const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const weekdayOrderMonFirst = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const getTodayWeekday = () => weekdayNames[new Date().getDay()];

export const getTodayDateKey = () => new Date().toISOString().slice(0, 10);

export const getDateKeyForWeekdayInCurrentWeek = (weekday) => {
  const today = new Date();
  const dayIndex = today.getDay();
  const mondayOffset = dayIndex === 0 ? -6 : 1 - dayIndex;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);

  const index = weekdayOrderMonFirst.indexOf(weekday);
  const target = new Date(monday);
  target.setDate(monday.getDate() + (index >= 0 ? index : 0));

  return target.toISOString().slice(0, 10);
};

export const getWeekDateKeys = () => {
  const today = new Date();
  const dayIndex = today.getDay();
  const mondayOffset = dayIndex === 0 ? -6 : 1 - dayIndex;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);

  return Array.from({ length: 7 }).map((_, i) => {
    const current = new Date(monday);
    current.setDate(monday.getDate() + i);
    return {
      weekday: weekdayNames[current.getDay()],
      dateKey: current.toISOString().slice(0, 10)
    };
  });
};
