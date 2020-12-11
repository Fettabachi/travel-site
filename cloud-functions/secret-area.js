exports.handler = function (event, context, callback) {
    const secretContent = `
        <h3>Welcome To The Secret Zone</h3>
        <p>This content was returned by running a serverless function on Netlify.</p>
    `

  let body;

  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }

  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: secretContent
    });
  } else {
    callback(null, {
      statusCode: 410,
    });
  }
};

// use to test the client area feature locally
// exports.handler = function(event, context, callback) {
//   const headers = {
//     "Access-Control-Allow-Origin" : "*",
//     "Access-Control-Allow-Headers" : "Content-Type"
//   }
 
//   if (event.httpMethod !== "POST") {
//     return callback(null, {
//       statusCode: 200,
//       headers,
//       body: "This was not a POST request"
//     })
//   }
  
//   const secretContent = `
//   <h3>Welcome To The Secret Zone</h3>
//   <p>This content was returned by running a serverless function on Netlify.</p>
//   `
  
//   let body
 
//   if (event.body) {
//     body = JSON.parse(event.body)
//   } else {
//     body = {}
//   }
 
//   if (body.password == "javascript") {
//     callback(null, {
//       statusCode: 200,
//       headers,
//       body: secretContent
//     })
//   } else {
//     callback(null, {
//       statusCode: 401,
//       headers
//     })
//   }
// }