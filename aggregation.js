//1. Get total money spent by TCS company as salary

db.users.aggregate([
{$match: {"company.name":"TCS"}},
{$group: {"_id":{companyName : "$company.name"},"TotalSalary":{$sum: "$salary"}}},
{$project:{_id: 0}}
])

db.users.aggregate([
{$match: {"company.name":"TCS"}},
{$group: {"_id":{companyName : "$company.name"},"TotalSalary":{$sum: "$salary"}}},

])

//2. Get total money spent by TCS & CTS as salary.

db.users.aggregate([
{$match: {"company.name": {$in:['TCS','CTS']}}},
{$group: {"_id":{companyName : "$company.name"},"TotalSalary":{$sum: "$salary"}}},
//{$project:{_id: 0}}
])

db.users.aggregate([
{$match: {"company.name": {$in:['TCS','CTS']}}},
{$group: {"_id":{companyName : "$company.name"},"TotalSalary":{$sum: "$salary"}}},
{$project:{_id: 0}}
])


//3. Get total money spent by individual company as salary.

db.users.aggregate([
{$group: {"_id":{companyName : "$company.name"},"TotalSalary":{$sum: "$salary"}}},
//{$project:{_id: 0}}
])

db.users.aggregate([
{$group: {"_id":{companyName : "$company.name"},"TotalSalary":{$sum: "$salary"}}},
{$project:{_id: 0}}
])

//4. Get total money spent by companies for software developers
db.users.aggregate([
{$match: {"role": "Junior software developer"}},
{$group: {"_id":{companyName : "$company.name"},"TotalSalary":{$sum: "$salary"}}},
{$project:{_id: 0}}
])

db.users.aggregate([
{$match: {"role": "Junior software developer"}},
{$group: {"_id":{companyName : "$company.name"},"TotalSalary":{$sum: "$salary"}}},
//{$project:{_id: 0}}
])

db.users.aggregate([
{$match: {"role": "Junior software developer"}},
{$group: {"_id":"$company.name","TotalSalary":{$sum: "$salary"}}},
//{$project:{_id: 0}}
])

db.users.aggregate([
{$match: {"role": {$in:[/developer/]}}},
{$group:{"_id":null,"TotalSalary": {$sum: "$salary"}}}
])

//Average salary for "Lead software developer" in industry

db.users.aggregate([
{$match:{"role": "Lead software developer"}},
{$group:{"_id":"$role","AvgSalary": {$avg: "$salary"}}},
])

//6. Minimum salary for "Lead software developer" in industry

db.users.aggregate([
{$match:{"role": "Lead software developer"}},
{$group:{"_id":"$role","MinSalary": {$min: "$salary"}}},
])

//7. Max salary for "Lead software developer" in industry

db.users.aggregate([
{$match:{"role": "Lead software developer"}},
{$group:{"_id":"$role","MaxSalary": {$max: "$salary"}}},
])

//8. List all the companies which have "Lead software developer"s?

db.users.aggregate([
{$match:{"role": "Lead software developer"}},
{$group:{"_id":{companyName : "$company.name",role:"$role"}}},
])

db.users.aggregate([
{$match:{"role": "Lead software developer"}},
{$group:{"_id":{companyName : "$company.name"}}},
])

//9. List all the companies which have "Senior software developer"s?

db.users.aggregate([
{$match:{"role": "Senior software developer"}},
{$group:{"_id":{companyName : "$company.name"}}},
])

//10. Get average salary based on each role

db.users.aggregate([
{$group:{"_id":"$role","AvgSalary": {$avg: "$salary"}}},
])

//11. Get all highest paid role in each company

db.users.aggregate([
{$group:{"_id":"$company.name","highestSalary": {$max: "$salary"}}},
])

db.users.aggregate([
{$group: {"_id":{companyName : "$company.name",role : "$role"},"TopSalary":{$max: "$salary"}}},
//{$project:{_id: 0}}
])

// 12. Get all the roles in companies.

db.users.aggregate([
{$group:{"_id":"$role"}},
])

// 13. Get all the roles in companies and show in order.

db.users.aggregate([
{$group:{"_id":"$role"}},
{$sort: {role: -1}}
])


db.users.aggregate([
{$group:{"_id":"$role"}},
{$sort: {role: 1}}
])

// 14. Split out individual skills with name.

db.users.aggregate([
{ $project: {skills: 1, name: 1 }},
{ $unwind: "$skills" }
])

// 15. How many people are online in each company?

db.users.aggregate([
{$match:{"status.online": true}},
{$count:"count"}
])

// 16. Count of companies in the collection?

db.users.aggregate([
{$group:{"_id":{companyName : "$company.name"}}},
{$count:"count"}
])
