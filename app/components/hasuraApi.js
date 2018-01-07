const clusterName = "carton66"

const dataUrl = "https://data." + clusterName + ".hasura-app.io/v1/query";
const loginUrl = "https://auth." + clusterName + ".hasura-app.io/v1/login";
const signupUrl = "https://auth." + clusterName + ".hasura-app.io/v1/signup";
const logoUrl= "https://filestore." + clusterName + ".hasura-app.io/v1/file/0e2fd6f4-6d21-4c3b-8f41-bbeaec0ccd45";

import { Alert } from 'react-native';

const networkErrorObj = {
  status: 503
}

export async function trySignup(username, password) {
  console.log('Making signup query');
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

  let body = {
    "provider":"username",
    "data": {
      "username": username,
      "password": password
    }
  };

  requestOptions["body"] = JSON.stringify(body);
  console.log("Auth Response ---------------------");
  
  try {
    let resp = await fetch(signupUrl, requestOptions);
    console.log(resp);
    return resp; 
  }
  catch(e) {
    console.log("Request Failed: " + e);
    return networkErrorObj;
  }
}

export async function tryLogin(username, password) {
  console.log('Making login query');
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

  let body = {
    "provider":"username",
    "data": {
      "username": username,
      "password": password
    }
  };

  requestOptions["body"] = JSON.stringify(body);

  console.log("Auth Response ---------------------");
  
  try {
    let resp = await fetch(loginUrl, requestOptions);
    console.log(resp);
    return resp; 
  }
  catch(e) {
    console.log("Request Failed: " + e);
    return networkErrorObj;
  }
}

export async function getArticleList() {
	console.log('Making data query (get article list)');
  let requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json"
      }
  };

  let body = {
      "type": "select",
      "args": {
          "table": "article",
          "columns": [
              "id",
              "title",
          ]
      }
  };

  requestOptions["body"] = JSON.stringify(body);
  console.log('Data Response ---------------------');
  try {
  	let resp = await fetch(dataUrl, requestOptions);
    console.log(resp);
  	return resp; 
  }
  catch(e) {
  	console.log("Request Failed: " + e);
    return networkErrorObj;
  }
}

export async function getArticle(id) {
  console.log('Making data query (get article)');
  let requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json"
      }
  };

  let body = {
      "type": "select",
      "args": {
          "table": "article",
          "columns": [
              "content",
              "id",
              "title",
              {
                "name": "author",
                "columns":[
                  "name"
                ]
              }
          ],
          "where": {
              "id": {
                  "$eq": id
              }
          }
      }
  };

  requestOptions["body"] = JSON.stringify(body);
  console.log('Data Response ---------------------');
  try{
  	let resp = await fetch(dataUrl, requestOptions);
    console.log(resp);
  	return resp;
  }
  catch (e) {
  	console.log("Request failed: " + e);
    return networkErrorObj;
  }
};


export async function fetchfile() {
  console.log('Getting file');
  
  var fetchAction =  require('fetch');
  
  var url = "https://filestore.carton66.hasura-app.io/v1/file/53f95824-aa76-4b6b-8d3c-b4945207dcaa";
  
  var requestOptions = {
      "method": "GET",
      "headers": {}
  };
  
  fetchAction(url, requestOptions)
  .then(function(response) {
    return response.blob();
  })
  .then(function(blob) {
    console.log(result);
  })
  .catch(function(error) {
    console.log('Request Failed:' + error);
  });
}

export async function getSearchList(searchText) {
  console.log('Making data query (search article)');
  let requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json"
      }
  };

  let body = {
      "type": "select",
      "args": {
          "table": "article",
          "columns": [
              "content",
              "id",
              "title",
              {
                "name": "author",
                "columns":[
                  "name"
                ]
              }
          ],
          "where": {
              "title": {
                  "$like": '%'+searchText+'%'
              }
          }
      }
  };

  requestOptions["body"] = JSON.stringify(body);
  console.log('Data Response ---------------------');
  try{
  	let resp = await fetch(dataUrl, requestOptions);
    console.log(resp);
  	return resp;
  }
  catch (e) {
  	console.log("Request failed: " + e);
    return networkErrorObj;
  }
};

