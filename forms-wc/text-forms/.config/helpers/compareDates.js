module.exports = {
  name: "compareDates",
  description: "compareDates",
  fn: (dateString1, dateString2) => {
    const date1 = new Date(dateString1 + 'Z');
    const date2 = new Date(dateString2 + 'Z');
    return date1.getTime() - date2.getTime();
  }
};