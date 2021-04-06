import { getTopRatedTutorialsForTags } from "../helperFunctions";
import { searchForTutorials } from "../helperFunctions";
const mockTutorials = require("../__mocks__/tutorials.json");

describe("getTopRatedTutorialsForTags", function () {
  it("should return an empty array when no parameters passed", function () {
    expect(getTopRatedTutorialsForTags()).toEqual([]);
  });

  it("should return an empty array when tags are matched", function () {
    expect(
      getTopRatedTutorialsForTags(mockTutorials, ["made-up-tag"], 1)
    ).toEqual([]);
  });

  it("should return highest rated tutorial for matching tag", function () {
    const expected = [
      {
        videoTitle: "Activity: Animals",
        tags: ["Exploring", "Energetic", "Hard"],
        averageUserRating: 0.9410138034340467,
      },
    ];
    expect(getTopRatedTutorialsForTags(mockTutorials, ["Hard"], 1)).toEqual(
      expected
    );
  });

  it("should return multiple tutorials matched by tags", function () {
    const expected = [
      {
        videoTitle: "Learn: Places",
        tags: ["Medium"],
        averageUserRating: 0.5347414366393164,
      },
      {
        videoTitle: "Learn: Work",
        tags: ["Interactive", "Passive", "Calming"],
        averageUserRating: 0.3490546479057728,
      },
    ];
    expect(
      getTopRatedTutorialsForTags(mockTutorials, ["Calming", "Medium"], 5)
    ).toEqual(expected);
  });
});

describe("searchForTutorials", function () {
  it("should return an empty array when no parameters passed", function () {
    expect(searchForTutorials()).toEqual([]);
  });

  it("should return a matched tutorial for an uppercase search term", function () {
    const expected = [
      {
        videoTitle: "Learn: School",
        tags: ["Exploring"],
        averageUserRating: 0.5190766417899317,
      },
    ];
    expect(searchForTutorials(mockTutorials, "SCHOOL")).toEqual(expected);
  });

  it("should return an empty array when partial search terms are matched", function () {
    expect(searchForTutorials(mockTutorials, "work play")).toEqual([]);
  });

  it("should return a matched tutorial when multiple search terms are matched", function () {
    const expected = [
      {
        videoTitle: "Activity: Animals",
        tags: ["Exploring", "Energetic", "Hard"],
        averageUserRating: 0.9410138034340467,
      },
    ];
    expect(searchForTutorials(mockTutorials, "activity animals")).toEqual(
      expected
    );
  });
});
