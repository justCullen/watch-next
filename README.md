# Project Overview

## Watch Next

https://watch-next-project.netlify.app/

## Project Description

Watch Next is a React and Airtable webapp designed to help users keep track of what to watch and where to watch it, as well as log shows and movies they have watched. It is a to-do list and record of shows and movies the user has watched.

## Wireframes

The wireframes below show sample views for Watch Next, focusing on mobile and desktop.

![Mobile](https://i.imgur.com/ufQcoRY.png)
![Mobile Menu](https://i.imgur.com/kaTjQoP.png)
![Mobile Form](https://i.imgur.com/rYXYBGM.png)
![Desktop](https://i.imgur.com/ExBclga.png)
![Desktop Form](https://i.imgur.com/vN6xO5N.png)

## Component Hierarchy
![Component Hierachy](https://i.imgur.com/6U6Z1Pi.png)

## API and Data Sample

What follows is a snippet of JSON returned by Airtable:

```json
{
    "records": [
        {
            "id": "recSIQAIow3hnRNOT",
            "fields": {
                "title": "The Shape of Water",
                "type": "Movie",
                "source": "Hulu",
                "year": "2017",
                "priority": "High",
                "recommend": "Yes",
                "thoughts": "Loved it!"
            },
            "createdTime": "2021-02-15T20:50:58.000Z"
        },
        {
            "id": "recrypoSKRsCl2ZNL",
            "fields": {},
            "createdTime": "2021-02-15T20:50:58.000Z"
        },
        {
            "id": "recdh4fftJkMJEXmE",
            "fields": {},
            "createdTime": "2021-02-15T20:50:58.000Z"
        }
    ],
    "offset": "recdh4fftJkMJEXmE"
}
```

### MVP/PostMVP

#### MVP 

- Watch Next and Watched pages
- Render movie & tv series entries on each page
- Click on a title to view a details page
- Create/Update entries in either list
- Delete entries in either list

#### PostMVP  

- Animations
- Additional fields, including Date Added/Date Watched
- Sorting options for each page

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb. 13-15| Prompt / Wireframes / Timeframes | Complete
|Feb. 16| Project Approval | Complete
|Feb. 17| Core Application Structure (HTML, CSS, etc.) | Complete
|Feb. 17| Pseudocode / actual code | Complete
|Feb. 18| Initial Clickable Model  | Complete
|Feb. 19| mediaquery/CSS | Complete
|Feb. 20| MVP | Complete
|Feb. 23| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Homepage | H | 3hrs| 4hrs |
| Title Components | H | 3hrs| 2hrs |
| Detail Components | H | 3hrs| 5hrs |
| Create Forms | H | 3hrs| 2hrs |
| Edit Forms | H | 3hrs| 1hrs |
| Promote Form | H | 3hrs| 1hrs |
| mediaquery | H | 6hrs| 2hrs |
| CSS | H | 8hrs| 14hrs |
| Debugging | H| 8hrs| 5hrs |
| Total | H | 40hrs| 36hrs |

## SWOT Analysis

### Strengths:

I am the target demographic for this product, so I know what I want and I know how it should feel as a final product.

### Weaknesses:

I don't have a strong grasp on the exact visuals. I plan to get it working with "programmer art", but any further styling is a question mark right now.

### Opportunities:

I am looking at this as a chance to design something for mobile first, which is a departure from my P1. I want to make it as easy to use as possible.

### Threats:

When I get stuck, sometimes my mind wanders instead of either working on the problem or taking a break. I need to catch myself before I lose time like that.