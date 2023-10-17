import moment from "moment";
import { projects } from "./projects";

export const getDate = (
  date: Date,
  type: "dateonly" | "timeonly" | "datewithoutday" | null = null
): string => {
  if (moment(date).isSame(moment(), "day")) {
    return "Present";
  }

  switch (type) {
    case "dateonly":
      return moment(date).format("MMMM DD, YYYY");

    case "timeonly":
      return moment(date).format("HH:mm A");

    case "datewithoutday":
      return moment(date).format("MMMM, YYYY");

    default:
      return moment(date).format("MMMM DD, YYYY HH:mm A");
  }
};

export const getDuration = (from: Date, to: Date) => {
  const difference = moment(to).diff(moment(from));
  const duration = moment.duration(difference);
  const months = parseInt(duration.asMonths().toFixed(0));

  if (months < 12) {
    return `${months} Months`;
  } else {
    const years = Math.floor(months / 12);
    const monthsAfterYears = months - years * 12;
    return (
      `${years} Year${years > 1 ? "s" : ""} ` +
      `${monthsAfterYears} Month${monthsAfterYears > 1 ? "s" : ""}`
    );
  }
};

export const getInitials = (str: string) => {
  const splited: string[] = str.split(" ");
  return splited.reduce(
    (acc: string, item: string) => acc.concat(item.charAt(0).toUpperCase()),
    ""
  );
};

export const getProjectById = (id: number) => projects[id - 1];
