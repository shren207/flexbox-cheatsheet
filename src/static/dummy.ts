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
    property: "align-items",
    subProps: ["start", "end", "center", "stretch"],
  },
  {
    type: "container",
    property: "align-content",
    subProps: [
      "start",
      "end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },
  { type: "item", property: "order", subProps: ["3", "-1", "2", "4"] },
  { type: "item", property: "flex-grow", subProps: ["1", "2", "3"] },
  { type: "item", property: "flex-basis", subProps: ["auto", "0", "200px"] },
  { type: "item", property: "flex-shrink", subProps: ["0", "1", "2"] },
  {
    type: "item",
    property: "align-self",
    subProps: ["start", "end", "center", "stretch"],
  },
];
