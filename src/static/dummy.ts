export const dummy = [
  { type: "container", title: "display", subProps: ["flex", "inline-flex"] },
  {
    type: "container",
    title: "flex-direction",
    subProps: ["row", "row-reverse", "column", "column-reverse"],
  },
  {
    type: "container",
    title: "flex-wrap",
    subProps: ["nowrap", "wrap", "wrap-reverse"],
  },
  {
    type: "container",
    title: "justify-content",
    subProps: [
      "start",
      "end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },
  {
    type: "container",
    title: "align-items",
    subProps: ["start", "end", "center", "stretch"],
  },
  {
    type: "container",
    title: "align-content",
    subProps: [
      "start",
      "end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },
  { type: "item", title: "order", subProps: ["3", "-1", "2", "4"] },
  { type: "item", title: "flex-grow", subProps: ["1", "2", "3"] },
  { type: "item", title: "flex-basis", subProps: ["auto", "0", "200px"] },
  { type: "item", title: "flex-shrink", subProps: ["0", "1", "2"] },
  {
    type: "item",
    title: "align-self",
    subProps: ["start", "end", "center", "stretch"],
  },
];
