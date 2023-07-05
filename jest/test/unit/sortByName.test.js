const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});
describe("Books names test suit without sorting", () => {
  it("Books names shouldn't be sorted", () => {
    expect( 
      sorting.sortByName([
        "Война и мир",
        "Капитанская дочка",
        "Война и мир",
      ])
    ).toEqual([
      "Война и мир",
      "Война и мир",
      "Капитанская дочка" 
    ]);
  });
});