//console.log(issueData);

const comments = [];
const commentsMapped = {};
const authorNames = [];
const authorSet = new Set();

const firstIssue = issueData[0];
console.log(firstIssue);

function returnDate(str) {
  const dt = new Date(str);
  if (dt.toString() === "Invalid Date") {
    return str;
  } else {
    return dt;
  }
}
//event loop
function transform(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = returnDate(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      transform(obj[key]);
    } else if (typeof obj[key] === "object") {
      for (const el of obj[key]) {
        if (typeof el === "object" && !Array.isArray(el)) {
          transform(el);
        }
      }
    }
  }
}

transform(firstIssue);
console.log(firstIssue);

//

for (const is of issueData) {
  //console.log(is.comments);

  /*for (const comment of is.comments) {
    comments.push(comment);
  }*/

  comments.push(...is.comments);
}

//console.log(comments[0].author.displayName);

for (const c of comments) {
  commentsMapped[c.id] = c;
}

function getByIdArray(id) {
  for (const c of comments) {
    if (c.id == id) {
      return c;
    }
  }
  return null;
}

function getByIdMap(id) {
  return commentsMapped[id] || null;
}

for (const id in commentsMapped) {
  if (commentsMapped[id].author && commentsMapped[id].author.displayName) {
    const name = commentsMapped[id].author.displayName;
    if (!authorNames.includes(name)) {
      authorNames.push(name);
    }
    authorSet.add(name);
  }
}

//console.log(commentsMapped);
/*console.log(
  //commentsMapped["12792284"],
  //getByIdArray("12792284"),
  //getByIdMap("12792284")
  authorNames,
  authorSet
);*/
