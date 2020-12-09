exports.handler = function (event, context, callback) {
    const secretContent = `
        <h3>Welcome To The Secret Zone</h3>
        <p>Here we can tell you that this content was returned by running a cloud function on Netlify.</p>
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
