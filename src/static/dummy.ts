export const dummy = [
  { type: "container", property: "display", subProps: ["flex", "inline-flex"] },
  {
    type: "container",
    property: "flex-direction",
    subProps: ["row", "row-reverse", "column", "column-reverse"],
  },
  {
    type: "container",
    property: "flex-wrap",
    subProps: ["nowrap", "wrap", "wrap-reverse"],
  },
  {
    type: "container",
    property: "justify-content",
    subProps: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },
  {
    type: "container",
    property: "align-items",
    subProps: ["flex-start", "flex-end", "center", "stretch"],
  },
  {
    type: "container",
    property: "align-content",
    subProps: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },
  { type: "item", property: "order", subProps: ["2", "-1", "5"] },
  { type: "item", property: "flex-grow", subProps: ["0", "1", "2", "3"] },
  {
    type: "item",
    property: "flex-basis",
    subProps: ["auto", "0", "25%", "33%", "50%", "66%", "75%"],
  },
  { type: "item", property: "flex-shrink", subProps: ["0", "1", "2"] },
  {
    type: "item",
    property: "align-self",
    subProps: ["flex-start", "flex-end", "center", "stretch"],
  },
];
