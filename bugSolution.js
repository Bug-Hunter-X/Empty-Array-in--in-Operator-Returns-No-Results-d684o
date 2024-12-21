```javascript
// Correct approach to return all documents irrespective of 'field' existence
db.collection.find({});

// Correct approach to return documents where 'field' exists
db.collection.find({ field: { $exists: true } });
```