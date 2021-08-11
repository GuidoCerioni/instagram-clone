export default function calculateDaysCreatedAgo(dateCreated) {
  const date = new Date(dateCreated);
  const actualDate = new Date();

  // prettier-ignore
  const daysDifference = Math.round(
      (actualDate.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );

  if (daysDifference > 1) {
    // days ago handle
    if (daysDifference > 6) {
      if (Math.round(daysDifference / 7) == 1) {
        return `${Math.round(daysDifference / 7)} week ago`;
      } else {
        return `${Math.round(daysDifference / 7)} weeks ago`;
      }
    }
    return `${daysDifference} days ago`;
  } else if (daysDifference < 1) {
    return `today`;
  } else {
    return `${daysDifference} day ago`;
  }
}
