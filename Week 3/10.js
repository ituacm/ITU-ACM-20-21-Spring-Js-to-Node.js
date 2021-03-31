// example

//console.log(issueData);

/*const comments = issueData.reduce((arr, i) => {
  arr.push(...i.comments);
  return arr;
}, []);

const authors = comments.map((c) => c.author.displayName);
const filtered = authors.reduce((set, a) => {
  set.add(a);
  return set;
}, new Set());
console.log(filtered);
*/

console.log(issueData[0]);

// s2 - s1 in ms
function diffTime(s1, s2) {
  const d1 = new Date(s1);
  const d2 = new Date(s2);
  return d2.getTime() - d1.getTime();
}

const map = issueData.reduce((m, i) => {
  m[i.key] = {
    issue: i,
    time: diffTime(i.created, i.resolutionDate) / 1000 / 60 / 60,
  };
  return m;
}, {});

const ara = Object.keys(map).reduce(
  (araToplam, key) => {
    araToplam.sum += map[key].time;
    araToplam.count += 1;
    return araToplam;
  },
  { sum: 0, count: 0 }
);

console.log(ara, ara.sum / ara.count);
