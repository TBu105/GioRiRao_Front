const currentDate = new Date()
const formattedDate = currentDate.toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
})

export default formattedDate
